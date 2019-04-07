import React, {Component} from 'react';
import styles from './QuizCreator.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import {createFormControls} from '../../form/formFunctions';

class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls()
  }

  addQuestionHandler = () => {

  }

  addQuizHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: ${event.target.value}`);
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key = {index}>
          <Input
            type = {control.type}
            label = {control.label}
            value = {control.value}
            errorMessage = {control.errorMessage}
            valid = {control.valid}
            touched = {control.touched}
            shouldValidate = {!!control.validation}
            onChange = {event => this.onChangeHandler(event, controlName)}
          />

          {index === 0 ? <hr /> : null}
        </React.Fragment>
      )
    })
  }

  render() {
    return (
      <div className = {styles.QuizCreator}>
        <div className = {styles.QuizCreatorWrapper}>
          <h1>Создать тест</h1>

          <form onSubmit = {this.submitHandler}>
            {this.renderControls()}

            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <Button
              type = 'success'
              onClick = {this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>

            <Button
              type = 'primary'
              onClick = {this.addQuizHandler}
            >
              Добавить тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
