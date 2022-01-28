import React, { useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { AppStoreType } from '../h10/bll/store';

import s from './HW12.module.scss';
import { Select } from '../../components/Select';
import { changeThemeAC } from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

export const HW12 = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: AppStoreType) => state.theme.theme);
  const changeTheme = useCallback(
    (currentTheme) => {
      dispatch(changeThemeAC(currentTheme));
    },
    [dispatch, theme],
  );

  return (
    <div className={cn('box', s[theme])}>
      <h2 className={s[theme + '-text']}>homeworks 12</h2>

      <Select onChangeOption={changeTheme} options={themes} />
    </div>
  );
};
