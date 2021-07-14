import React, { FC } from 'react';

import Affair from './Affair';
import { AffairType, defaultAffairsType, FilterType } from './HW2';
import Button from '../h4/common/Button/Button';

type AffairsPropsType = {
  data: defaultAffairsType[];
  setFilter: (filter: FilterType) => void;
  deleteAffairCallback: (id: number) => void;
};

const Affairs: FC<AffairsPropsType> = ({ data, setFilter, deleteAffairCallback }) => {
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
    <div>
      {data.map((obj: AffairType) => (
        <Affair key={obj._id} affair={obj} deleteAffairCallback={deleteAffairCallback} />
      ))}

      <div>
        <Button onClick={setAll}>All</Button>
        <Button onClick={setHigh}>High</Button>
        <Button onClick={setMiddle}>Middle</Button>
        <Button onClick={setLow}>Low</Button>
      </div>
    </div>
  );
};

export default Affairs;
