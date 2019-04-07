import React from 'react';
import styles from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && touched && shouldValidate;
}

const Input = props => {
  const inputType = props.type;
  const cls = [styles.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(styles.invalid)
  }

  return (
    <div className = {cls.join(' ')}>
      <label htmlFor = {htmlFor}>{props.label}</label>

      <input
        type = {inputType}
        id = {htmlFor}
        value = {props.value}
        onChange = {props.onChange}
      />

      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  )
}

export default Input;
