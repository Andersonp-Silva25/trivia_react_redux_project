import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeedbackHeader from '../components/FeedbackHeader';

class Feedback extends Component {
  ranking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    // const TRES = 3;
    // const { score } = this.props;
    return (
      <div>
        <FeedbackHeader />
        <h2>Feedback</h2>
        {/* { score < TRES && <p data-testid="feedback-text">Could be better...</p> }
        { score >= TRES && <p data-testid="feedback-text">Well Done!</p> } */}
        <p data-testid="feedback-text">Feedback Placeholder</p>
      </div>
    );
  }
}

// Feedback.propTypes = {
//   score: PropTypes.number.isRequired,
// };

const mapStateToProps = (state) => ({
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
