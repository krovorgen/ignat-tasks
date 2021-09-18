import React from 'react';

import { Button } from '../../components/Button';

function HW10() {
  // useSelector, useDispatch
  const loading = false;

  const setLoading = () => {
    // dispatch
    // setTimeout
    console.log('loading...');
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading ? (
        <div>крутилка...</div>
      ) : (
        <div>
          <Button onClick={setLoading}>set loading...</Button>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
