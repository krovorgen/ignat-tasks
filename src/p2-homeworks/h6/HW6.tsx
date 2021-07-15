import React, { useState } from 'react';
import EditableSpan from './common/EditableSpan/EditableSpan';
import { restoreState, saveState } from './localStorage/localStorage';
import Button from '../h4/common/Button';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    setValue(restoreState('editable-span-value', value));
  };

  return (
    <div className={'box'}>
      <h2>homeworks 6</h2>
      <div>
        <EditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : 'enter text...' }}
        />
      </div>
      <Button onClick={save}>save</Button>
      <Button onClick={restore}>restore</Button>
    </div>
  );
}

export default HW6;
