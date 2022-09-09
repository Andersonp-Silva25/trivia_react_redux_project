import React from 'react';
import PropTypes from 'prop-types';

class ButtonNewGame extends React.Component {
  newGame = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <button
        type="button"
        data-testid="btn-go-home"
        onClick={ this.newGame }
      >
        Jogar Novamente

      </button>
    );
  }
}

ButtonNewGame.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default ButtonNewGame;
