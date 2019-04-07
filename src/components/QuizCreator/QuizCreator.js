import React, {Component} from 'react';
import styles from './QuizCreator.module.scss';
import Button from '../../UI/Button/Button';

class QuizCreator extends Component {
  addQuestionHandler = () => {

  }

  addQuizHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className = {styles.QuizCreator}>
        <div className = {styles.QuizCreatorWrapper}>
          <h1>Создать тест</h1>

          <form onSubmit = {this.submitHandler}>
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

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
