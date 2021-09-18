import React, { useState } from 'react';

import { restoreState, saveState } from './localStorage/localStorage';
import { Button } from '../../components/Button';
import { EditableSpan } from '../../components/EditableSpan';

export const HW6 = () => {
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
      <EditableSpan
        value={value}
        onChangeText={setValue}
        spanProps={{ children: value ? undefined : 'enter text...' }}
      />
      <Button onClick={save}>save</Button>
      <Button onClick={restore}>restore</Button>
    </div>
  );
};
