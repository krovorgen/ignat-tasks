import React, { useState } from 'react';
import moment from 'moment';

import { Button } from '../Button';

import styles from './style.module.scss';
export const Clock = () => {
  moment().local(true);
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<string>(moment().format('MMMM Do YYYY, h:mm:ss a'));
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };

  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(!show);
  };
  const onMouseLeave = () => {
    setShow(!show);
  };
  const stringTime = moment().format('LTS');

  return (
    <div className={styles['clock']}>
      <p
        className={`${styles['clock__text']} ${styles['clock__text--time']}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {stringTime}
      </p>
      <p className={`${styles['clock__text']} ${styles['clock__text--date']}`}>{show && date}</p>

      <Button onClick={start}>start</Button>
      <Button onClick={stop}>stop</Button>
    </div>
  );
};
