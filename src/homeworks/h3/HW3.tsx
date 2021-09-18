import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Greeting } from '../../components/Greeting';

import styles from './style.module.scss';

export type UserType = {
  _id: string;
  name: string;
};

export const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUserCallback = (name: string) => {
    setUsers([{ _id: v1(), name }, ...users]);
  };

  return (
    <div className={'box'}>
      <h2>homeworks 3</h2>

      <Greeting users={users} addUserCallback={addUserCallback} />
      <ul className={styles['users']}>
        {users.map((item) => {
          return (
            <li key={item._id} className={styles['users__item']}>
              <p className={styles['users__text']}>
                user: <span>{item.name}</span>
              </p>
              <p className={styles['users__text']}>
                id: <span>{item._id}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
