import React, { ChangeEvent, useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import s from './HW4.module.css';
import Button from './common/Button/Button';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';

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
        <SuperInputText value={text} onChangeText={setText} onEnter={showAlert} error={error} />

        <SuperInputText className={s.blue} />

        {/*----------------------------------------------------*/}

        <Button>default</Button>

        <Button red onClick={showAlert}>
          delete
        </Button>

        <Button disabled>disabled</Button>

        {/*----------------------------------------------------*/}

        <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
          some text
        </SuperCheckbox>

        {/*// onChange тоже должен работать*/}
        <SuperCheckbox checked={checked} onChange={testOnChange} />
      </div>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperInputText/>*/}
      {/*<AlternativeSuperButton/>*/}
      {/*<AlternativeSuperCheckbox/>*/}
    </div>
  );
}

export default HW4;
