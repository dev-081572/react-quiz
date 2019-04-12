import React, {Component} from 'react';
import styles from './Layout.module.scss';
import MenuToggle from '../../components/navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/navigation/Drawer/Drawer';
import {connect} from 'react-redux';

class Layout extends Component {
  state = {
    menuOpen: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  closeMenuHandler = () => {
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <div className = {styles.Layout}>
        <MenuToggle
          isOpen = {this.state.menuOpen}
          onToggle = {this.toggleMenuHandler}
        />

        <Drawer
          isOpen = {this.state.menuOpen}
          onClose = {this.closeMenuHandler}
          isAuthenticated = {this.props.isAuthenticated}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token
  }
}

export default connect(mapStateToProps)(Layout);
