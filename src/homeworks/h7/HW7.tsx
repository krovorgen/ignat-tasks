import React, { useState } from 'react';

import { Select } from '../../components/Select';
import { Radio } from '../../components/Radio';

const arr: string[] = ['x', 'y', 'z'];

export const HW7 = () => {
  const [value, onChangeOption] = useState(arr[1]);

  return (
    <div className={'box'}>
      <h2>homeworks 7</h2>
      <Select options={arr} value={value} onChangeOption={onChangeOption} />
      <Radio name={'radio'} options={arr} value={value} onChangeOption={onChangeOption} />
    </div>
  );
};
