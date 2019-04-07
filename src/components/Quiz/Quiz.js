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
    ],
    answerState: null
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const quizItem = this.state.quiz[this.state.activeQuestion];

    if (quizItem.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      });

      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Quiz Finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
          clearTimeout(timeout);
        }
      }, 1000);
    } else {
      this.setState({
        answerState: {[answerId]: 'fail'}
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
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
            answerState = {this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
