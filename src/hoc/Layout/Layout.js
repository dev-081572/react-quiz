import React, {Component} from 'react';
import styles from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <div className = {styles.Layout}>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
