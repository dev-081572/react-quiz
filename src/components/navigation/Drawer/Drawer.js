import React, {Component} from 'react';
import styles from './Drawer.module.scss';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const links = [
  {
    label: 'Список',
    to: '/',
    exact: true
  },
  {
    label: 'Авторизация',
    to: '/auth',
    exact: false
  },
  {
    label: 'Создать тест',
    to: '/quiz-creator',
    exact: false
  }
];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key = {index}>
          <NavLink
            to = {link.to}
            exact = {link.exact}
            activeClassName = {styles.active}
            onClick = {this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [styles.Drawer];

    if (this.props.isOpen) {
      cls.push(styles.open);
    }

    return (
      <React.Fragment>
        <nav className = {cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick = {this.props.onClose} /> : null}
      </React.Fragment>
    )
  }
}

export default Drawer;
