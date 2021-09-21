import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import loader from './loader.svg';

import styles from './style.module.scss';

export const HW10 = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppStoreType) => state.loading);

  const setLoading = () => {
    setTimeout(() => {
      dispatch(loadingAC());
    }, 1000);
    dispatch(loadingAC());
  };

  return (
    <div className={`box ${styles['loading-page']}`}>
      <h2>homeworks 10</h2>
      {loading ? (
        <img className={styles['loading-page__loader']} src={loader} alt="Loader" />
      ) : (
        <Button onClick={setLoading}>set loading...</Button>
      )}
    </div>
  );
};
