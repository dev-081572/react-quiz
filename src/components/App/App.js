import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../../hoc/Layout/Layout';
import QuizList from '../QuizList/QuizList';
import Auth from '../Auth/Auth';
import QuizCreator from '../QuizCreator/QuizCreator';
import Quiz from '../Quiz/Quiz';
import Logout from '../Logout/Logout';
import {autoLogin} from '../../redux/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path = "/auth" component = {Auth} />
        <Route path = "/quiz/:id" component = {Quiz} />
        <Route path = "/" exact component = {QuizList} />
        <Redirect to = "/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path = "/quiz-creator" component = {QuizCreator} />
          <Route path = "/quiz/:id" component = {Quiz} />
          <Route path = "/logout" component = {Logout} />
          <Route path = "/" exact component = {QuizList} />
          <Redirect to = "/" />
        </Switch>
      );
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
