import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  ranking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const TRES = 3;
    const { score } = this.props;
    return (
      <div>
        <h2>Feedback</h2>
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
