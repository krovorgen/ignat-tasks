import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

const Checkbox: React.FC<SuperCheckboxPropsType> = ({
  type,
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.checked);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
    onChange && onChange(e);
  };

  return (
    <label className={styles['checkbox']}>
      <input
        className={`${styles['checkbox__input']} visually-hidden`}
        type={'checkbox'}
        onChange={onChangeCallback}
        {...restProps}
      />
      {children && <span className={styles['checkbox__text']}>{children}</span>}
    </label>
  );
};

export default Checkbox;
