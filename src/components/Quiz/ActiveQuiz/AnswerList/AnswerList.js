import React from 'react';
import styles from './AnswerList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = props => (
  <ul className = {styles.AnswerList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          key = {index}
          answer = {answer}
        />
      )
    })}
  </ul>
);

export default AnswerList;
