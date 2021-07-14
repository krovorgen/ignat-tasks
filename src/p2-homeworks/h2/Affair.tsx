import React, { FC } from 'react';
import { defaultAffairsType } from './HW2';
import Button from '../h4/common/Button/Button';

interface AffairPropsType {
  affair: defaultAffairsType;
  deleteAffairCallback: (id: number) => void;
}

const Affair: FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
  const deleteCallback = () => {
    deleteAffairCallback(affair._id);
  };

  return (
    <div>
      {affair.name}
      <Button onClick={deleteCallback}>X</Button>
    </div>
  );
};

export default Affair;
