import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    // const TRES = 3;
    // const { score } = this.props;
    return (
      <div>
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
  score: state.score,
});

export default connect(mapStateToProps)(Feedback);
