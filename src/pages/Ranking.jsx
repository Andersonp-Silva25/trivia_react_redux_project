import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import ButtonNewGame from '../components/ButtonNewGame';
import '../styles/Ranking.css';
import Logo from '../imgs/logo_trivia.svg';

class Ranking extends React.Component {
  constructor() {
    super();

    this.state = {
      isRanking: false,
    };
  }

  componentDidMount() {
    const { name, score, assertions, gravatarEmail } = this.props;
    const playerInfo = {
      name,
      score,
      assertions,
      gravatarEmail,
    };

    const getStorage = localStorage.getItem('ranking');

    if (getStorage === null) {
      const arrayPlayer = [];
      arrayPlayer.push(playerInfo);
      localStorage.setItem('ranking', JSON.stringify(arrayPlayer));
      this.setState({ isRanking: true });
    } else {
      const convertStorage = JSON.parse(getStorage);
      if (!getStorage.includes(JSON.stringify(playerInfo))) {
        const arrayPlayer = [...convertStorage, playerInfo];
        const orderRanking = arrayPlayer.sort((a, b) => {
          if (a.score > b.score) {
            const min = -1;
            return min;
          }
          return 1;
        });

        localStorage.setItem('ranking', JSON.stringify(orderRanking));
      }

      this.setState({ isRanking: true });
    }
  }

  render() {
    const { isRanking, gravatarEmail } = this.state;
    const { history } = this.props;
    const ranking = JSON.parse(localStorage.getItem('ranking'));

    return (
      <main>
        {/* <Header /> */}
        <section className="main-content">
          <img src={ Logo } alt="Logo Trivia" />
          <h2 data-testid="ranking-title">Ranking</h2>
          {isRanking ? ranking.map((player, index) => (
            <div key={ index }>
              <div className="content-player">
                <img src={ `https://www.gravatar.com/avatar/${gravatarEmail}` } alt="Foto Gravatar" />
                <p data-testid={ `player-name-${index}` }>{player.name}</p>
              </div>
              <div className="score">
                <p data-testid={ `player-score-${index}` }>
                  Acertos:
                  {' '}
                  {player.assertions}
                  {' '}
                  Pontuação:
                  {' '}
                  {player.score}
                </p>
              </div>
            </div>
          )) : <p>Ranking vazio</p>}
          <ButtonNewGame history={ history } nameButton="btn-go-home" />
        </section>
      </main>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  name: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  assertions: state.player.assertions,
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
});

export default connect(mapStateToProps)(Ranking);
