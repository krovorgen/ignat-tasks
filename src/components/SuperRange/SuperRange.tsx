import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './SuperRange.module.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (value: number) => void;
};

export const SuperRange: React.FC<SuperRangePropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeRange,
  className,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e); // сохраняем старую функциональность

    onChangeRange && onChangeRange(+e.currentTarget.value);
  };

  return (
    <input
      type={'range'}
      onChange={onChangeCallback}
      className={cn(styles.rangeInput, className)}
      {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
    />
  );
};
