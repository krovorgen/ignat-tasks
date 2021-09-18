import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { UserType } from '../../homeworks/h3';

import styles from './style.module.scss';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (value: string) => void;
};

export const Greeting: FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setName(e.currentTarget.value);
  };

  const addUser = () => {
    if (name.trim() === '') {
      setName('');
      return setError('incorrect');
    }
    setError('');
    addUserCallback(name);
    setName('');
  };

  const totalUsers = users.length;

  const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser();

  return (
    <div>
      <span>Users count: {totalUsers}</span>
      <div className={styles['form']}>
        <label className={styles['form__label']}>
          <input
            className={`${styles['form__input']} ${error ? styles['form__error'] : ''}`}
            value={name}
            onKeyDown={onKeyHandler}
            onChange={setNameCallback}
            placeholder={`${error ? error : 'Enter text'}`}
          />
        </label>
        <button className={styles['form__button']} onClick={addUser}>
          +
        </button>
      </div>
    </div>
  );
};
