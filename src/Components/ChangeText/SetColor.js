import React from 'react';

const SetColor = ({ execCommand }) => {
  return (
    <div>
      <span style={{ paddingRight: '10px' }}>Text color:</span>
      <input type='color' onChange={(e) => execCommand('foreColor', e.target.value)} />
    </div>
  );
};

export default SetColor;
