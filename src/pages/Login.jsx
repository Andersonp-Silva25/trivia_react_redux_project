import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* import logo from '../trivia.png'; */

class Login extends React.Component {
  state = {
    email: '',
    name: '',
    btnDisabled: true,
  };

  validateLogin = () => {
    const { email, name } = this.state;
    const minLengthName = 1;
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);

    const stateBolean = regexEmail && name.length >= minLengthName;
    return !stateBolean;
  };

  habiliteBtn = () => (
    this.setState({ btnDisabled: this.validateLogin() })
  );

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.habiliteBtn());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(saveEmailAction(email));
    history.push('/');
  };

  render() {
    const { btnDisabled } = this.state;
    return (
      <main>
        {/* <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <p>SUA VEZ</p>
          </header>
        </div> */}
        <Link to="/Settings">
          <button type="button" data-testid="btn-settings">Settings</button>
        </Link>
        <form
          onSubmit={ this.handleSubmit }
          id="form-login"
        >
          <label htmlFor="input-player-name">
            Nome:
            <input
              type="name"
              name="name"
              data-testid="input-player-name"
              id="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-gravatar-email">
            Email
            <input
              type="text"
              name="email"
              data-testid="input-gravatar-email"
              id="input-gravatar-email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ btnDisabled }
          >
            Play
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

/* export default connect()(Login) */

export default Login;
