import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <h2 className={styles['header__title']}>HEADER</h2>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__items']}>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={'/pre-junior'}>
              pre junior
            </NavLink>
          </li>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={'/junior'}>
              junior
            </NavLink>
          </li>
          <li className={styles['header__item']}>
            <NavLink
              activeClassName={styles['header__link--active']}
              className={styles['header__link']}
              to={'/junior-plus'}>
              junior plus
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
