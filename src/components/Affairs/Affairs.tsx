import React, { FC } from 'react';

import close from '../../images/close.svg';
import { AffairType, defaultAffairsType, FilterType } from '../../homeworks/h2';
import { Button } from '../Button';

import styles from './style.module.scss';

type AffairsPropsType = {
  data: defaultAffairsType[];
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (id: number) => void;
};

interface AffairPropsType {
  affair: defaultAffairsType;
  deleteAffairCallback: (id: number) => void;
}

export const Affairs: FC<AffairsPropsType> = ({ data, setFilter, deleteAffairCallback }) => {
  const setAll = () => {
    setFilter('all');
  };
  const setHigh = () => {
    setFilter('high');
  };
  const setMiddle = () => {
    setFilter('middle');
  };
  const setLow = () => {
    setFilter('low');
  };

  return (
    <div className={styles['todolist']}>
      <ul className={styles['todolist__items']}>
        {data.map((obj: AffairType) => (
          <Affair key={obj._id} affair={obj} deleteAffairCallback={deleteAffairCallback} />
        ))}
      </ul>

      <div className={styles['todolist__buttons']}>
        <Button onClick={setAll}>All</Button>
        <Button onClick={setHigh}>High</Button>
        <Button onClick={setMiddle}>Middle</Button>
        <Button onClick={setLow}>Low</Button>
      </div>
    </div>
  );
};

const Affair: FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
  const deleteCallback = () => {
    deleteAffairCallback(affair._id);
  };

  return (
    <li className={styles['todolist__item']}>
      <span style={{ fontSize: '25px' }}>{affair.name}</span>
      <Button onClick={deleteCallback} addClass={styles['button__close']}>
        <img src={close} alt="" />
      </Button>
    </li>
  );
};
