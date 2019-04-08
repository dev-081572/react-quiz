import React, {Component} from 'react';
import styles from './QuizCreator.module.scss';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import {createFormControls, validateControl, validateForm} from '../../form/formFunctions';
import axios from '../../axios/axios-quiz';

class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls(),
    rightAnswerId: 1,
    formValid: false
  }

  addQuestionHandler = event => {
    event.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;
    const {question, option1, option2, option3, option4} = this.state.formControls;

    const quizItem = {
      questionText: question.value,
      questionId: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          answerText: option1.value,
          answerId: option1.optionId
        },
        {
          answerText: option2.value,
          answerId: option2.optionId
        },
        {
          answerText: option3.value,
          answerId: option3.optionId
        },
        {
          answerText: option4.value,
          answerId: option4.optionId
        }
      ]
    };

    quiz.push(quizItem);

    this.setState({
      quiz,
      formControls: createFormControls(),
      rightAnswerId: 1,
      formValid: false
    });
  }

  addQuizHandler = async event => {
    event.preventDefault();

    try {
      await axios.post('/quizes.json', this.state.quiz);

      this.setState({
        quiz: [],
        formControls: createFormControls(),
        rightAnswerId: 1,
        formValid: false
      })
    } catch(e) {
      console.log(e);
    }
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
      formControls,
      formValid: validateForm(formControls)
    });
  }

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <React.Fragment key = {index}>
          <Input
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
    const select = (
      <Select
        label = 'Выберите правильный ответ'
        value = {this.state.rightAnswerId}
        onChange = {this.selectChangeHandler}
        options = {
          [
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4}
          ]
        }
      />
    );

    return (
      <div className = {styles.QuizCreator}>
        <div className = {styles.QuizCreatorWrapper}>
          <h1>Создать тест</h1>

          <form onSubmit = {this.submitHandler}>
            {this.renderControls()}

            {select}

            <Button
              type = 'success'
              onClick = {this.addQuestionHandler}
              disabled = {!this.state.formValid}
            >
              Добавить вопрос
            </Button>

            <Button
              type = 'primary'
              onClick = {this.addQuizHandler}
              disabled = {this.state.quiz.length === 0}
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
