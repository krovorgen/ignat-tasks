import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import styles from './style.module.scss';
import classNames from 'classnames';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsType = {
  red?: boolean;
  addClass?: string;
};

const Button: FC<ButtonPropsType & DefaultButtonPropsType> = ({
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

export default Button;
