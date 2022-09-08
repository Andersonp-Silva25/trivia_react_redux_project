import React from 'react';
import PropTypes from 'prop-types';
/* import logo from '../trivia.png'; */

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      btnDisabled: true,
    };
  }

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

  loginEvent = async () => {
    const { history } = this.props;
    //const response = await fetch('https://opentdb.com/api_token.php?command=request');
    //const token = await response.json();
    console.log(token.token);
    console.log('teste');
    //localStorage.setItem('token', JSON.stringify(token.token));
    console.log(history);
    history.push('/game');
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
        <form
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
            onClick={ this.loginEvent }
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
};

/* export default connect()(Login) */

export default Login;
