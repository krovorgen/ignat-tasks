import React from 'react';

import { Message } from '../../components/Message';

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Some Name',
  message: 'some text',
  time: '22:00',
};

export const HW1 = () => {
  return (
    <div className="box">
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
        type="POST"
      />
      <br />
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
        type="GET"
      />
    </div>
  );
};
