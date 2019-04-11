import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import FinishedQuiz from './FinishedQuiz/FinishedQuiz';
import Loader from '../../UI/Loader/Loader';
import {connect} from 'react-redux';
import {fetchQuizById, quizAnswerClick, retryQuiz} from '../../redux/actions/quiz';

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz();
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
                  onRetry = {this.props.retryQuiz}
                />
              : <ActiveQuiz
                  question = {this.props.quiz[this.props.activeQuestion].questionText}
                  questionNumber = {this.props.activeQuestion + 1}
                  quizLength = {this.props.quiz.length}
                  answers = {this.props.quiz[this.props.activeQuestion].answers}
                  onAnswerClick = {this.props.quizAnswerClick}
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
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
