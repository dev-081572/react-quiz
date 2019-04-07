import React, {Component} from 'react';
import styles from './Layout.module.scss';
import MenuToggle from '../../components/navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/navigation/Drawer/Drawer';
class Layout extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <div className = {styles.Layout}>
        <MenuToggle
          isOpen = {this.state.menuOpen}
          onToggle = {this.toggleMenu}
        />

        <Drawer
          isOpen = {this.state.menuOpen}
          onClose = {this.closeMenu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
