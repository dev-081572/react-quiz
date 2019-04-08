import React, {Component} from 'react';
import styles from './QuizList.module.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

class QuizList extends Component {
  state = {
    quizes: []
  }

  renderQuizes() {
    return this.state.quizes.map(quiz => {
      return (
        <li key = {quiz.id}>
          <Link to = {`quiz/${quiz.id}`}>
            {quiz.name}
          </Link>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://react-quiz-a1732.firebaseio.com/quizes.json')

      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        })
      })

      this.setState({
        quizes
      });

    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className = {styles.QuizList}>
        <div className = {styles.QuizListWrapper}>
          <h1>Список тестов</h1>

          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
