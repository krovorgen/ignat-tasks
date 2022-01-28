import React, { useState } from 'react';

import { homeWorkReducer } from './bll/homeWorkReducer';
import { Button } from '../../components/Button';

import styles from './style.module.scss';

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: UserType[] = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

export type SortPeoplePayload = 'up' | 'down' | 'majority';

export type SortPeopleActionType = { type: 'sort'; payload: SortPeoplePayload };

export const HW8 = () => {
  const [people, setPeople] = useState<UserType[]>(initialPeople);

  const SortPeopleAC = (payload: SortPeoplePayload): SortPeopleActionType => ({
    type: 'sort',
    payload,
  });

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortPeopleAC('up')));
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortPeopleAC('down')));
  const sortMajority = () => setPeople(homeWorkReducer(initialPeople, SortPeopleAC('majority')));

  return (
    <div className="box">
      <h2>homeworks 8</h2>
      <div className={styles['people-sort']}>
        <ul className={styles['people-sort__peoples']}>
          {people.map((p: UserType) => (
            <li className={styles['people-sort__people']} key={p._id}>
              <span>{p.name}</span>
              <span>{p.age}</span>
            </li>
          ))}
        </ul>
        <ul className={styles['people-sort__navigations']}>
          <li className={styles['people-sort__navigation']}>
            <Button onClick={sortUp}>sort up</Button>
          </li>
          <li className={styles['people-sort__navigation']}>
            <Button onClick={sortDown}>sort down</Button>
          </li>
          <li className={styles['people-sort__navigation']}>
            <Button onClick={sortMajority}>check 18</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
