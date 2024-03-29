import React from 'react';
import styles from './Loader.module.css';

const Loader = props => (
  <div className = {styles.LoaderWrapper}>
    <div className = {styles.Loader}>
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
