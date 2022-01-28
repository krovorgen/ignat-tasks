import React from 'react';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../homeworks/h5/Routes';

import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h2 className={styles['header__title']}>HEADER</h2>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__items']}>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={PATH.PRE_JUNIOR}>
              {PATH.PRE_JUNIOR}
            </NavLink>
          </li>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={PATH.JUNIOR}>
              {PATH.JUNIOR}
            </NavLink>
          </li>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={PATH.JUNIOR_PLUS}>
              {PATH.JUNIOR_PLUS}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
