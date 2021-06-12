import React, { FC } from 'react';

import Affair from './Affair';
import {  AffairType, defaultAffairsType, FilterType } from './HW2';

type AffairsPropsType = {
    data: defaultAffairsType[];
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id : number) => void;
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

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    );
};

export default Affairs;
