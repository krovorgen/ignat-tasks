import React, { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
    users: UserType[];
    addUserCallback: (value: string) => void;
};

const GreetingContainer: FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setName(e.currentTarget.value);
    };

    const addUser = () => {
        if (name.trim() === '') {
            setName('');
            return setError('incorrect');
        }
        setError('');
        addUserCallback(name);
        setName('');
    };

    const totalUsers = users.length;

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser();

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyHandler={onKeyHandler}
        />
    );
};

export default GreetingContainer;
