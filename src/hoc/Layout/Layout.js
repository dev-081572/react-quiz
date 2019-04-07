import React, {Component} from 'react';
import styles from './Layout.module.scss';
import MenuToggle from '../../components/navigation/MenuToggle/MenuToggle';

class Layout extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className = {styles.Layout}>
        <MenuToggle
          isOpen = {this.state.menuOpen}
          onToggle = {this.toggleMenu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
