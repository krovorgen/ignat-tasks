import React, { ChangeEvent, useState } from 'react';
import { Slider } from '@alfalab/core-components/slider';
import { SliderInput } from '@alfalab/core-components/slider-input';
import { AmountInput } from '@alfalab/core-components/amount-input';
import { SuperRange } from '../../components/SuperRange';

const min = 100000;
const max = 600000;

export const HW11 = () => {
  const [value1, setValue1] = useState<number | string>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>, payload: { value: number | '' }) =>
    setValue1(payload.value);

  const [value2, setValue2] = React.useState<number | string>('');
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    payload: { value: number | '' },
  ) => {
    setValue2(payload.value !== '' ? (+value2 / 100).toString() : '');
  };
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>, payload: { value: number }) => {
    setValue2(payload.value);
  };
  const handleBlur = () => {
    if (value2 !== '') {
      setValue2(Math.max(min, Math.min(max, +value2)));
    }
  };

  return (
    <div className="box">
      <h2>homeworks 11</h2>
      <div>
        <span>{value1}</span>
        <SuperRange onChangeRange={setValue1} />
        <Slider value={+value1} onChange={handleChange} />
        <SliderInput
          value={value2 !== '' ? +value2 * 100 : ''}
          sliderValue={+value2}
          onInputChange={handleInputChange}
          onSliderChange={handleSliderChange}
          onBlur={handleBlur}
          min={min}
          max={max}
          step={1000}
          Input={AmountInput}
          steps={['100 тыс.', '600 тыс.']}
          label="Сумма зарплаты"
        />
      </div>
    </div>
  );
};
