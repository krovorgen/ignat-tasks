import React, { ChangeEvent, useState } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';

export const HW4 = () => {
  const [text, setText] = useState<string>('');
  const error = text ? '' : 'error';

  const showAlert = () => {
    if (error) {
      alert('введите текст...');
    } else {
      alert(text);
    }
  };

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

  return (
    <div className={'box'}>
      <h2>homeworks 4</h2>
      <Input value={text} onChangeText={setText} onEnter={showAlert} error={error} />
      <Input />

      <Button>default</Button>
      <Button red onClick={showAlert}>
        delete
      </Button>
      <Button disabled>disabled</Button>

      <Checkbox checked={checked} onChangeChecked={setChecked}>
        some text
      </Checkbox>
      <Checkbox checked={checked} onChange={testOnChange} />
    </div>
  );
};
