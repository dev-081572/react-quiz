import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import {validateControl} from '../../form/formFunctions';

class Auth extends Component {
  state = {
    formControls: {
      email: {
        type: 'email',
        label: 'Email',
        value: '',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        type: 'password',
        label: 'Пароль',
        value: '',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls
    });
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key = {index}
          type = {control.type}
          label = {control.label}
          value = {control.value}
          errorMessage = {control.errorMessage}
          valid = {control.valid}
          touched = {control.touched}
          shouldValidate = {!!control.validation}
          onChange = {event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className = {styles.Auth}>
        <div className = {styles.AuthWrapper}>
          <h1>Авторизация</h1>

          <form onSubmit = {this.submitHandler}>
            {this.renderInputs()}

            <Button type="success" onClick = {this.loginHandler}>Войти</Button>
            <Button type="primary" onClick = {this.registerHandler}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
