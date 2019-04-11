import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import FinishedQuiz from './FinishedQuiz/FinishedQuiz';
import Loader from '../../UI/Loader/Loader';
import {connect} from 'react-redux';
import {fetchQuizById} from '../../redux/actions/quiz';

class Quiz extends Component {

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

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>{!this.props.isFinished ? 'Ответьте на все вопросы' : 'Результаты викторины'}</h1>
          {
            this.props.loading || !this.props.quiz
            ? <Loader />
            : this.props.isFinished
              ? <FinishedQuiz
                  results = {this.props.results}
                  quiz = {this.props.quiz}
                  onRetry = {this.retryHandler}
                />
              : <ActiveQuiz
                  question = {this.props.quiz[this.props.activeQuestion].questionText}
                  questionNumber = {this.props.activeQuestion + 1}
                  quizLength = {this.props.quiz.length}
                  answers = {this.props.quiz[this.props.activeQuestion].answers}
                  onAnswerClick = {this.onAnswerClickHandler}
                  answerState = {this.props.answerState}
                />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeQuestion: state.quiz.activeQuestion,
    quiz: state.quiz.quiz,
    answerState: state.quiz.answerState,
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
