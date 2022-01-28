import React, { useState } from 'react';

import { Affairs } from '../../components/Affairs';

export type AffairPriorityType = 'high' | 'low' | 'middle';
export type AffairType = defaultAffairsType;
export type FilterType = 'all' | AffairPriorityType;

export interface defaultAffairsType {
  _id: number;
  name: string;
  priority: FilterType;
}

const defaultAffairs: defaultAffairsType[] = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

export const filterAffairs = (
  affairs: defaultAffairsType[],
  filter: FilterType,
): defaultAffairsType[] => {
  if (filter === 'all') {
    return affairs;
  }
  return affairs.filter((item) => item.priority === filter);
};

export const deleteAffair = (affairs: defaultAffairsType[], _id: number): AffairType[] => {
  return affairs.filter((item) => item._id !== _id);
};

export const HW2 = () => {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

  return (
    <div className="box">
      <h2>homeworks 2</h2>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
    </div>
  );
};
