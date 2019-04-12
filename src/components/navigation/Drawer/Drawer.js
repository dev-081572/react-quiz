import React, {Component} from 'react';
import styles from './Drawer.module.scss';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../../UI/Backdrop/Backdrop';

class Drawer extends Component {
  renderLinks(links) {
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

    const links = [
      {
        label: 'Список',
        to: '/',
        exact: true
      }
    ];

    if (this.props.isAuthenticated) {
      links.push(
        {
          label: 'Создать тест',
          to: '/quiz-creator',
          exact: false
        }
      );
      links.push(
        {
          label: 'Выйти',
          to: '/logout',
          exact: false
        }
      );
    } else {
      links.push(
        {
          label: 'Авторизация',
          to: '/auth',
          exact: false
        }
      );
    }

    return (
      <React.Fragment>
        <nav className = {cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>

        {this.props.isOpen ? <Backdrop onClick = {this.props.onClose} /> : null}
      </React.Fragment>
    )
  }
}

export default Drawer;
