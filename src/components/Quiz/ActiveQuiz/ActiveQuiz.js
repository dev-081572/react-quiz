import React from 'react';
import styles from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <div className = {styles.ActiveQuiz}>
    <div className = {styles.QuestionSection}>
      <p><strong>1</strong>. Как дела?</p>
      <small>4 из 12</small>
    </div>

    <ul>
      <li>Плохо</li>
      <li>Нормально</li>
      <li>Хорошо</li>
      <li>Отлично</li>
    </ul>
  </div>
);

export default ActiveQuiz;
