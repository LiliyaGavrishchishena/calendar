import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './AppNav.module.css';

const AppNav = ({ items = [] }) => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      {items.map(({ name, path }) => (
        <li key={name} className={styles.link}>
          <NavLink
            exact
            to={path}
            activeClassName={styles.active}
            className={styles.linkNav}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
