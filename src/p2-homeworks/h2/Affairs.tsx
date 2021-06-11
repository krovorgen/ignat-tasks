import React, { FC } from 'react';
import Affair from './Affair';
import { AffairType } from './HW2';

type AffairsPropsType = {
    data: any;
    setFilter: any;
    deleteAffairCallback: any;
};

const Affairs: FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback}) =>  {
    const mappedAffairs = data.map((obj: AffairType) => (
        <Affair key={obj._id} affair={obj} deleteAffairCallback={deleteAffairCallback} />
    ));

    const setAll = () => {}; // need to fix
    const setHigh = () => {};
    const setMiddle = () => {};
    const setLow = () => {};

    return (
        <div>
            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
