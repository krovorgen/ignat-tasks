import React, { ChangeEvent } from 'react';

import styles from './style.module.scss';

type GreetingPropsType = {
    name: string;
    setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string | null;
    totalUsers: string | number;
};

const Greeting: React.FC<GreetingPropsType> = ({
    name,
    setNameCallback,
    addUser,
    error,
    totalUsers,
}) => {
    return (
        <div>
            <span>Users count: {totalUsers}</span>
            <div className={styles['form']}>
                <label className={styles['form__label']}>
                    <input
                        className={`${styles['form__input']} ${error ? styles['form__error'] : ''}`}
                        value={name}
                        onChange={setNameCallback}
                        placeholder={`${error ? 'error' : 'Enter text'}`}
                    />
                </label>
                <button className={styles['form__button']} onClick={addUser}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Greeting;
