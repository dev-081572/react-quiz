import React, {Component} from 'react';
import styles from './Drawer.module.scss';

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key = {index}>
          <a>Links {link}</a>
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
      <div className = {cls.join(' ')}>
        <ul>
          {this.renderLinks()}
        </ul>
      </div>
    )
  }
}

export default Drawer;
