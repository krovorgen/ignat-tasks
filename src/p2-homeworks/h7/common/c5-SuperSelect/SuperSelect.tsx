import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

import styles from './style.module.scss';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[];
  onChangeOption?: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: string[] = options || []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select className={styles['select']} onChange={onChangeCallback} {...restProps}>
      {mappedOptions.map((item, index) => (
        <option className={styles['select__option']} key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SuperSelect;
