import React from 'react';
import styles from './AnswerItem.module.scss';

const AnswerItem = props => (
  <li className = {styles.AnswerItem}>
    {props.answer.answerText}
  </li>
);

export default AnswerItem;
