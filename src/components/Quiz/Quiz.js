import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        questionText: 'Вопрос 1',
        questionId: 1,
        answers: [
          {
            answerText: 'Ответ 1',
            answerId: 1
          },
          {
            answerText: 'Ответ 2',
            answerId: 2
          },
          {
            answerText: 'Ответ 3',
            answerId: 3
          },
          {
            answerText: 'Ответ 4',
            answerId: 4
          }
        ],
        rightAnswerId: 4
      },
      {
        questionText: 'Вопрос 2',
        questionId: 2,
        answers: [
          {
            answerText: 'Ответ 1',
            answerId: 1
          },
          {
            answerText: 'Ответ 2',
            answerId: 2
          },
          {
            answerText: 'Ответ 3',
            answerId: 3
          },
          {
            answerText: 'Ответ 4',
            answerId: 4
          }
        ],
        rightAnswerId: 4
      }
    ]
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            question = {this.state.quiz[0].questionText}
            questionNumber = {this.state.quiz[0].questionId}
            quizLength = {this.state.quiz.length}
            answers = {this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
