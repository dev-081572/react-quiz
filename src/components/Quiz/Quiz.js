import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    )
  }
}

export default Quiz;
