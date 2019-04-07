import React, {Component} from 'react';
import styles from './Quiz.module.scss';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        questionText: 'Кто сыграл капитана Жеглова?',
        questionId: 1,
        answers: [
          {
            answerText: 'Станислав Говорухин',
            answerId: 1
          },
          {
            answerText: 'Владимир Высоцкий',
            answerId: 2
          },
          {
            answerText: 'Александр Белявский',
            answerId: 3
          },
          {
            answerText: 'Евгений Евстигнеев',
            answerId: 4
          }
        ],
        rightAnswerId: 2
      },
      {
        questionText: 'Какое прозвище было у персонажа Леонида Куравлева?',
        questionId: 2,
        answers: [
          {
            answerText: 'Фокс',
            answerId: 1
          },
          {
            answerText: 'Ручечник',
            answerId: 2
          },
          {
            answerText: 'Кирпич',
            answerId: 3
          },
          {
            answerText: 'Копченый',
            answerId: 4
          }
        ],
        rightAnswerId: 4
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    const quizItem = this.state.quiz[this.state.activeQuestion];

    if (quizItem.rightAnswerId === answerId) {
      const timeout = setTimeout(() => {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1
        });
        clearTimeout(timeout);
      }, 1000);
    }
  }

  render() {
    return (
      <div className = {styles.Quiz}>
        <div className = {styles.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            question = {this.state.quiz[this.state.activeQuestion].questionText}
            questionNumber = {this.state.activeQuestion + 1}
            quizLength = {this.state.quiz.length}
            answers = {this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick = {this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
