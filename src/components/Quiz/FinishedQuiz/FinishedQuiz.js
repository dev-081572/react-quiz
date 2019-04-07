import React from 'react';
import styles from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {

  return (
    <div className = {styles.FinishedQuiz}>
      <ul>
        <li>
          <i className = {'fa fa-times ' + styles.fail} />
          <p><strong>1</strong>. Вопрос</p>
        </li>
        <li>
          <i className = {'fa fa-check ' + styles.success} />
          <p><strong>2</strong>. Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос Вопрос</p>
        </li>
      </ul>

      <p>
        Правильно 4 из 10
      </p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
}

export default FinishedQuiz;
