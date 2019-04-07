import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import QuizList from '../QuizList/QuizList';
import Auth from '../Auth/Auth';
import QuizCreator from '../QuizCreator/QuizCreator';
import Quiz from '../Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path = "/auth" component = {Auth} />
          <Route path = "/quiz-creator" component = {QuizCreator} />
          <Route path = "/quiz/:id" component = {Quiz} />
          <Route path = "/" component = {QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
