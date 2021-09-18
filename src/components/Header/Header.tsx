import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../homeworks/h5/Routes';

import styles from './style.module.scss';

export const Header = () => {
  let menuItems = [];

  for (let key in PATH) {
    menuItems.push(
      <li className={styles['header__item']}>
        <NavLink
          activeClassName={styles['header__link--active']}
          className={styles['header__link']}
          to={PATH[key]}>
          pre junior
        </NavLink>
      </li>,
    );
  }

  return (
    <header className={styles['header']}>
      <h2 className={styles['header__title']}>HEADER</h2>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__items']}>{menuItems}</ul>
      </nav>
    </header>
  );
};