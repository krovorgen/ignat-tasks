import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = {
  red?: boolean;
  addClass?: string;
};

export const Button: FC<ButtonPropsType & DefaultButtonPropsType> = ({
  red,
  className,
  addClass,
  ...restProps
}) => {
  const appearances = {
    [styles['button--red']]: red,
  };

  return <button className={classNames(styles['button'], addClass, appearances)} {...restProps} />;
};
