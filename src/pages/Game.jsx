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
      timer: 30,
      timeout: false,
    };
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const gameURL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const data = await fetchGameApi(gameURL);
    const badToken = 3;
    if (data.response_code === badToken) {
      localStorage.removeItem('token');
      this.setState({ redirect: true });
    } else {
      this.setState({ data, loading: false });
    }
    const interval = 1000;
    setInterval(this.updateTimer, interval);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    // console.log(prevState);
    // console.log(currentQuestion);
  }

  handleAnswerClick() {
    document.querySelectorAll('#wrong-answer').forEach((elem) => {
      elem.classList.add('wrong-answer');
    });
    document.querySelectorAll('#right-answer').forEach((elem) => {
      elem.classList.add('right-answer');
    });
    const { currentQuestion } = this.state;
    const nextQuestion = currentQuestion + 1;
    this.setState({ currentQuestion: nextQuestion });
  }

  updateTimer() {
    let { timer } = this.state;
    timer -= 1;
    if (timer >= 0) {
      this.setState({ timer });
    }
    if (timer === 0) {
      this.setState({ timeout: true });
    }
  }

  render() {
    const { data, currentQuestion, loading, redirect, position, timer,
      timeout } = this.state;
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
                <p>{timer}</p>
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
                          id="right-answer"
                          onClick={ this.handleAnswerClick }
                          disabled={ timeout }
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
                      id="wrong-answer"
                      onClick={ this.handleAnswerClick }
                      disabled={ timeout }
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
                          id="right-answer"
                          onClick={ this.handleAnswerClick }
                          disabled={ timeout }
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
