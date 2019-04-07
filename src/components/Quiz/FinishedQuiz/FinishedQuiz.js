import React from 'react';
import styles from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {
  return (
    <div className = {styles.FinishedQuiz}>
      <ul>
        {
          props.quiz.map((quizItem, index) => {
            const cls = [
              'fa',
              props.results[quizItem.questionId] === 'success' ? 'fa-check' : 'fa-times',
              styles[props.results[quizItem.questionId]]
            ];
            return (
              <li>
                <i className = {cls.join(' ')} />
                <p><strong>{quizItem.questionId}</strong>. {quizItem.questionText}</p>
              </li>
            )
          })
        }
      </ul>

      <p>
        Правильно 4 из {props.quiz.length}
      </p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
}

export default FinishedQuiz;
