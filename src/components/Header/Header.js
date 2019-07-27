import React from 'react';
// components
import Logo from '../Logo/Logo';
// styles
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Logo />
    <div className={styles.header} />
  </div>
);

export default Header;
