import React from 'react';
import styles from './ActiveQuiz.module.scss';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => (
  <div className = {styles.ActiveQuiz}>
    <div className = {styles.QuestionSection}>
      <p><strong>{props.questionNumber}</strong>. {props.question}</p>
      <small>{props.questionNumber} из {props.quizLength}</small>
    </div>

    <AnswerList answers = {props.answers} />
  </div>
);

export default ActiveQuiz;
