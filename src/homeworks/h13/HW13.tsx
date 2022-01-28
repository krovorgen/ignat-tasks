import React, { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../api';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

export const HW13 = () => {
  return (
    <div className="box">
      <h2>homeworks 13</h2>
      <Request />
    </div>
  );
};
const Request = () => {
  const [requestResponse, setRequestResponse] = useState('');

  const [checked, setChecked] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useState('');

  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    setCheckboxValue(e.currentTarget.value);
  };

  const postData = (body?: string) => {
    api
      .auth(body)
      .then((res) => {
        setRequestResponse(JSON.stringify(res.data));
      })
      .catch(({ response, message }) => {
        // setRequestResponse(response);
        setRequestResponse(response ? response.data.errorText : message);
      });
  };

  const postValueCheckbox = () => {
    postData(checkboxValue);
  };

  useEffect(() => {
    postData();
  }, []);
  return (
    <>
      <Checkbox checked={checked} onChange={testOnChange} value="text" />
      <Button onClick={postValueCheckbox}>POST</Button>
      {requestResponse}
    </>
  );
};
