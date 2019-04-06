import React from 'react';
import styles from './AnswerItem.module.scss';

const AnswerItem = props => (
  <li className = {styles.AnswerItem}
      onClick = {() => props.onAnswerClick(props.answer.answerId)}
  >
    {props.answer.answerText}
  </li>
);

export default AnswerItem;
