import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ButtonNewGame from '../components/ButtonNewGame';

class Ranking extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <h2 data-testid="ranking-title">Ranking</h2>
        <ButtonNewGame history={ history } />
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Ranking;
