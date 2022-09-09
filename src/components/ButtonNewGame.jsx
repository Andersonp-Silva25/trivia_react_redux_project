import React from 'react';
import PropTypes from 'prop-types';

class ButtonNewGame extends React.Component {
  newGame = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { nameButton } = this.props;
    return (
      <button
        type="button"
        data-testid={ nameButton }
        onClick={ this.newGame }
      >
        Jogar Novamente

      </button>
    );
  }
}

ButtonNewGame.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  nameButton: PropTypes.string.isRequired,
};

export default ButtonNewGame;
