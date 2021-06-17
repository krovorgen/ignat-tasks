import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';

import styles from './style.module.scss';

export type UserType = {
    _id: string;
    name: string;
};

function HW3() {
    const [users, setUsers] = useState<UserType[]>([]);

    const addUserCallback = (name: string) => {
        setUsers([{ _id: v1(), name }, ...users]);
    };
    console.log(users);
    return (
        <div>
            <hr />
            <h2>homeworks 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
            <ul className={styles['users']}>
                {users.map((item) => {
                    return (
                        <li className={styles['users__item']}>
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
            <hr />
            <hr />
        </div>
    );
}

export default HW3;
