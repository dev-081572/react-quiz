import React from 'react';
import styles from './AnswerItem.module.scss';

const AnswerItem = props => {
  const cls = [styles.AnswerItem];

  if (props.answerState) {
    cls.push(styles[props.answerState])
  }

  return (
    <li className = {cls.join(' ')}
        onClick = {() => props.onAnswerClick(props.answer.answerId)}
    >
      {props.answer.answerText}
    </li>
  );
};

export default AnswerItem;
