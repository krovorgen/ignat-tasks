import React, { FC } from 'react';

import styles from './style.module.scss';

interface IMessageProps {
    avatar: string;
    name: string;
    message: string;
    time: string;
    type?: 'GET' | 'POST';
}

const Message: FC<IMessageProps> = ({ avatar, name, message, time, type }) => {
    return (
        <div className={styles['message']}>
            <div className={styles['message__inner']}>
                {type === 'GET' && (
                    <>
                        <div className={styles['message__img-wrap']}>
                            <img className={styles['message__img']} src={avatar} alt="" />
                        </div>
                        <div
                            className={`${styles['message__info']} ${styles['message__info--get']}`}>
                            <p className={styles['message__author']}>{name}</p>
                            <p className={styles['message__text']}>{message}</p>
                            <span className={styles['message__time']}>{time}</span>
                        </div>
                    </>
                )}
                {type === 'POST' && (
                    <>
                        <div
                            className={`${styles['message__info']} ${styles['message__info--post']}`}>
                            <p className={styles['message__author']}>{name}</p>
                            <p className={styles['message__text']}>{message}</p>
                            <span className={styles['message__time']}>{time}</span>
                        </div>
                        <div className={styles['message__img-wrap']}>
                            <img className={styles['message__img']} src={avatar} alt="" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Message;
