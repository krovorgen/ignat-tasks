import React, { ChangeEvent, useState } from 'react';
import s from './HW4.module.css';
import Input from './common/Input';
import Button from './common/Button';
import Checkbox from './common/Checkbox';

function HW4() {
  const [text, setText] = useState<string>('');
  const error = text ? '' : 'error';

  const showAlert = () => {
    if (error) {
      alert('введите текст...');
    } else {
      alert(text); // если нет ошибки показать текст
    }
  };

  const [checked, setChecked] = useState<boolean>(false);
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

  return (
    <div className={'box'}>
      <h2>homeworks 4</h2>
      <div className={s.column}>
        <Input value={text} onChangeText={setText} onEnter={showAlert} error={error} />

        <Input className={s.blue} />

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
    </div>
  );
}

export default HW4;
