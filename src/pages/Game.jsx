import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { fetchGameApi } from '../services';

class Game extends React.Component {
  constructor() {
    const positions = 11;
    super();
    this.state = {
      data: [],
      currentQuestion: 0,
      loading: true,
      redirect: false,
      position: Math.floor(Math.random() * positions),
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const gameURL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const data = await fetchGameApi(gameURL);
    const badToken = 3;
    console.log(data);
    if (data.response_code === badToken) {
      localStorage.removeItem('token');
      this.setState({ redirect: true });
    } else {
      this.setState({ data, loading: false });
    }
  }

  render() {
    const { data, currentQuestion, loading, redirect, position } = this.state;
    const answerPosition = 6;
    return (
      <div>
        <Header />
        {redirect && <Redirect to="./" />}
        {
          loading
            ? (<div>Loading...</div>)
            : (
              <div>
                <p
                  data-testid="question-category"
                >
                  {data.results[currentQuestion].category}
                </p>
                <p
                  data-testid="question-text"
                >
                  {data.results[currentQuestion].question}
                </p>
                <div data-testid="answer-options">
                  {
                    position <= answerPosition
                      ? (
                        <button
                          type="button"
                          data-testid="correct-answer"
                        >
                          {data.results[currentQuestion].correct_answer}
                        </button>
                      )
                      : (<div />)
                  }
                  {data.results[currentQuestion].incorrect_answers.map((elem, index) => (
                    <button
                      type="button"
                      key={ index }
                      data-testid={ `wrong-answer-${index}` }
                    >
                      {elem}

                    </button>
                  ))}
                  {
                    position > answerPosition
                      ? (
                        <button
                          type="button"
                          data-testid="correct-answer"
                        >
                          {data.results[currentQuestion].correct_answer}
                        </button>
                      )
                      : (<div />)
                  }

                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default Game;
