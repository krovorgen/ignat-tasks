import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import Button from '../h4/common/Button/Button';
import { restoreState, saveState } from './localStorage/localStorage';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    // setValue()
  };

  return (
    <div>
      <hr />
      homeworks 6{/*should work (должно работать)*/}
      <div>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : 'enter text...' }}
        />
      </div>
      <Button onClick={save}>save</Button>
      <Button onClick={restore}>restore</Button>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr />
    </div>
  );
}

export default HW6;
