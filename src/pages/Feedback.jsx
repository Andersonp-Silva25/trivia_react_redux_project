import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedbackHeader from '../components/FeedbackHeader';

class Feedback extends Component {
  ranking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const TRES = 3;
    const DEZ = 10;
    const { score } = this.props; // OBS Readme: No estado do redux as chaves score e assertions devem ser do tipo number
    return (
      <div>
        <FeedbackHeader />
        <h2>Feedback</h2>
        <div>
          <p>Placar Final:</p>
          <span data-testid="feedback-total-score">{ score * DEZ }</span>
          {/* score pode ser o Nº de acertos x 10 por exemplo */}
        </div>
        <div>
          <p>Numero de acertos:</p>
          <p data-testid="feedback-total-question">{ score }</p>
        </div>

        { score < TRES && <p data-testid="feedback-text">Could be better...</p> }
        { score >= TRES && <p data-testid="feedback-text">Well Done!</p> }
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.ranking }
        >
          Ver Ranking

        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
