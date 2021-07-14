import React, { FC } from 'react';
import { defaultAffairsType } from './HW2';
import close from '../../images/close.svg';
import Button from '../h4/common/Button';

import styles from './style.module.scss';

interface AffairPropsType {
  affair: defaultAffairsType;
  deleteAffairCallback: (id: number) => void;
}

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

export default Affair;
