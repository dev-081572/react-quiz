import React from 'react';
import styles from './FinishedQuiz.module.scss';
import Button from '../../../UI/Button/Button';

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

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
              <li key = {index}>
                <i className = {cls.join(' ')} />
                <p><strong>{quizItem.questionId}</strong>. {quizItem.questionText}</p>
              </li>
            )
          })
        }
      </ul>

      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <div>
        <Button type = 'success' onClick = {props.onRetry}>
          Повторить
        </Button>

        <Button type = 'primary'>
          Список тестов
        </Button>
      </div>
    </div>
  );
}

export default FinishedQuiz;
