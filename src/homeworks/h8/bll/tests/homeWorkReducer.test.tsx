import React from 'react';

import { homeWorkReducer } from '../homeWorkReducer';
import { UserType } from '../../HW8';

let initialState: UserType[];

beforeEach(() => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ];
});

test('sort name up', () => {
  const newState: UserType[] = homeWorkReducer(initialState, { type: 'sort', payload: 'up' });

  const result = [1, 5, 3, 4, 2, 0].filter((item, index) => item === newState[index]._id);
  expect(result.length).toBe(newState.length);

  expect(newState[0].age).toBe(66);
  expect(newState.length).toBe(6);
  expect(newState[newState.length - 1].age).toBe(3);
});

test('sort name down', () => {
  const newState: UserType[] = homeWorkReducer(initialState, { type: 'sort', payload: 'down' });

  const result = [0, 2, 4, 3, 5, 1].filter((item, index) => item === newState[index]._id);
  expect(result.length).toBe(newState.length);

  expect(newState[0].age).toBe(3);
  expect(newState.length).toBe(6);
  expect(newState[newState.length - 1].age).toBe(66);
});

test('check age 18', () => {
  const newState: UserType[] = homeWorkReducer(initialState, {
    type: 'sort',
    payload: 'majority',
  });

  expect(newState.length).toBe(4);
});
