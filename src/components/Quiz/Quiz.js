import React, {Component} from 'react';
import styles from './Quiz.module.scss';

class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>Quiz</h1>
        </div>
      </div>
    )
  }
}

export default Quiz;
