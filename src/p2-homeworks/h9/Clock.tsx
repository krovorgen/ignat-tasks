import React, { useState } from 'react';
import Button from '../h4/common/Button';

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    // stop
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      // setDate
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    // show
  };
  const onMouseLeave = () => {
    // close
  };

  const stringTime = 'Time'; // fix with date
  const stringDate = 'Date'; // fix with date

  return (
    <div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {stringTime}
      </div>

      {show && <div>{stringDate}</div>}

      <Button onClick={start}>start</Button>
      <Button onClick={stop}>stop</Button>
    </div>
  );
}

export default Clock;
