import React, { FC } from 'react';
import { defaultAffairsType } from './HW2';

interface AffairPropsType {
    affair: defaultAffairsType;
    deleteAffairCallback: (id : number) => void;
}

const Affair: FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    };

    return (
        <div>
            {affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    );
};

export default Affair;
