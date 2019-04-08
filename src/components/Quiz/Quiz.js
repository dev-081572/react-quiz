import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import FinishedQuiz from './FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../UI/Loader/Loader';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [],
    answerState: null,
    results: {},
    isFinished: false,
    loading: true
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const quizItem = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (quizItem.rightAnswerId === answerId) {
      if (!results[quizItem.questionId]) {
        results[quizItem.questionId] = 'success';
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
          clearTimeout(timeout);
        }
      }, 1000);
    } else {
      if (!results[quizItem.questionId]) {
        results[quizItem.questionId] = 'fail';
      }
      this.setState({
        answerState: {[answerId]: 'fail'},
        results
      });
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      results: {},
      isFinished: false
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false
      });
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>{!this.state.isFinished ? 'Ответьте на все вопросы' : 'Результаты викторины'}</h1>
          {
            this.state.loading
            ? <Loader />
            : this.state.isFinished
              ? <FinishedQuiz
                  results = {this.state.results}
                  quiz = {this.state.quiz}
                  onRetry = {this.retryHandler}
                />
              : <ActiveQuiz
                  question = {this.state.quiz[this.state.activeQuestion].questionText}
                  questionNumber = {this.state.activeQuestion + 1}
                  quizLength = {this.state.quiz.length}
                  answers = {this.state.quiz[this.state.activeQuestion].answers}
                  onAnswerClick = {this.onAnswerClickHandler}
                  answerState = {this.state.answerState}
                />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;
