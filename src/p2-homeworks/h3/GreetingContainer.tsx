import React, { ChangeEvent, FC, useState } from 'react';
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
            return setError('ERROR');
        }
        setError('');
        console.log(`Hello  !`);
        addUserCallback(name);
        setName('');
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
};

export default GreetingContainer;
