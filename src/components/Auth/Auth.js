import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

class Auth extends Component {
  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className = {styles.Auth}>
        <div className = {styles.AuthWrapper}>
          <h1>Авторизация</h1>

          <form onSubmit = {this.submitHandler}>
            <Input label = 'Email'/>
            <Input label = 'Пароль' errorMessage = 'TEST'/>

            <Button type="success" onClick = {this.loginHandler}>Войти</Button>
            <Button type="primary" onClick = {this.registerHandler}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
