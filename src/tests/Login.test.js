import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Verifica o componente <Login />', () => {
  test('Se existe input de email e nome', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();

    const inputname = screen.getByTestId('input-player-name');
    expect(inputname).toBeInTheDocument();
  });

  test('O botão de logar "Play" será habilitado se for digitado um nome e um email em formato valido', () => {
    renderWithRouterAndRedux(<App />);
    const inputname = screen.getByTestId('input-player-name');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    const btnLogin = screen.getByRole('button');

    expect(btnLogin).toBeInTheDocument();
    expect(btnLogin).toBeDisabled();

    userEvent.type(inputname, '');
    userEvent.type(inputEmail, 'teste@teste');
    expect(btnLogin).toBeDisabled();

    userEvent.type(inputname, 'joao');
    userEvent.type(inputEmail, 'teste@teste.com');
    expect(btnLogin).toBeEnabled();
    
  });
});