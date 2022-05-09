import React from 'react';

const Infobubble = ({ info }) => {
  return (
    <div className='infoBubble'>
      <div className='triangle'></div>
      <p>{info}</p>
    </div>
  );
};

export default Infobubble;
