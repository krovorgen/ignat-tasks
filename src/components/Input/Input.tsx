import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import styles from './style.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const Input: FC<SuperInputTextPropsType> = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    onEnter && e.key === 'Enter' && onEnter();
  };

  return (
    <div className={styles['main-input']}>
      <input
        type={'text'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        placeholder={error ? error : ''}
        className={`${styles['main-input__input']} ${
          error ? styles['main-input__input--error'] : ''
        } `}
        {...restProps}
      />
    </div>
  );
};
