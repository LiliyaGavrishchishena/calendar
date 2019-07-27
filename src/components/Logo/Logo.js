import React from 'react';
import { Link } from 'react-router-dom';
// configs
import routes from '../../configs/routes';
// styles
import styles from './Logo.module.css';

const Logo = () => (
  <Link to={routes.HOME} className={styles.logo}>
    Impekable
  </Link>
);

export default Logo;
