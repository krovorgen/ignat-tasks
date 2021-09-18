import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState } from 'react';

import { Input } from '../Input';

import styles from './style.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperEditableSpanType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;

  spanProps?: DefaultSpanPropsType;
};

export const EditableSpan: React.FC<SuperEditableSpanType> = ({
  autoFocus, // игнорировать изменение этого пропса
  onBlur,
  onEnter,
  spanProps,
  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = () => {
    setEditMode(!editMode);
    onEnter && onEnter();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(!editMode);
    onBlur && onBlur(e);
  };
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditMode(!editMode);
    onDoubleClick && onDoubleClick(e);
  };

  return (
    <>
      {editMode ? (
        <Input
          autoFocus
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          onDoubleClick={onDoubleClickCallBack}
          {...restProps}
        />
      ) : (
        <span
          onDoubleClick={onDoubleClickCallBack}
          className={styles['editable-span__span']}
          {...restSpanProps}>
          {children || restProps.value}
        </span>
      )}
    </>
  );
};
