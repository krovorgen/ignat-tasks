import React, { ChangeEvent, KeyboardEvent } from 'react';

import styles from './style.module.scss';

type GreetingPropsType = {
    name: string;
    setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    error: string | null;
    totalUsers: string | number;
    onKeyHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const Greeting: React.FC<GreetingPropsType> = ({
    name,
    setNameCallback,
    addUser,
    error,
    totalUsers,
    onKeyHandler,
}) => {
    return (
        <div>
            <span>Users count: {totalUsers}</span>
            <div className={styles['form']}>
                <label className={styles['form__label']}>
                    <input
                        className={`${styles['form__input']} ${error ? styles['form__error'] : ''}`}
                        value={name}
                        onKeyDown={onKeyHandler}
                        onChange={setNameCallback}
                        placeholder={`${error ? error : 'Enter text'}`}
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
