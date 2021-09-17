import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState } from 'react';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: string[];
  onChangeOption?: (option: string) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value);
    setChecked(e.currentTarget.checked);
  };

  return (
    <>
      {options
        ? options.map((item, index) => (
            <label key={name + '-' + index}>
              <input
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                checked={checked}
                value={value}
                {...restProps}
              />
              {item}
            </label>
          ))
        : []}
    </>
  );
};

export default SuperRadio;
