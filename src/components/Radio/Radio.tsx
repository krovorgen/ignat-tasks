import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './style.module.scss';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: string[];
  onChangeOption?: (option: string) => void;
};

export const Radio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <>
      {options
        ? options.map((item, index) => (
            <label className={styles['radio']} key={name + '-' + index}>
              <input
                className={styles['radio__input']}
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                value={item}
                checked={item === value}
                {...restProps}
              />
              <span className={styles['radio__text']}>{item}</span>
            </label>
          ))
        : []}
    </>
  );
};
