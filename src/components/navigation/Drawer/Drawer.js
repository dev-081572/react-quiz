import React, {Component} from 'react';
import styles from './Drawer.module.scss';
import Backdrop from '../../../UI/Backdrop/Backdrop';

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
      <React.Fragment>
        <div className = {cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </div>
        {this.props.isOpen ? <Backdrop onClick = {this.props.onClose} /> : null}
      </React.Fragment>
    )
  }
}

export default Drawer;
