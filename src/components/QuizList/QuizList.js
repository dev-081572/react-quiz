import React, {Component} from 'react';
import styles from './QuizList.module.scss';
import {Link} from 'react-router-dom';
import Loader from '../../UI/Loader/Loader';
import {connect} from 'react-redux';
import {fetchQuizes} from '../../redux/actions/quiz.js';

class QuizList extends Component {

  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li key = {quiz.id}>
          <Link to = {`quiz/${quiz.id}`}>
            {quiz.name}
          </Link>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
    return (
      <div className = {styles.QuizList}>
        <div className = {styles.QuizListWrapper}>
          <h1>Список тестов</h1>

          {
            this.props.loading && this.props.quizes.length !== 0
            ? <Loader />
            : <ul>
                {this.renderQuizes()}
              </ul>
          }

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
