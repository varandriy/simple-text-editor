import React from 'react';

const SetBackground = ({ execCommand }) => {
  return (
    <div>
      <span style={{ paddingRight: '10px' }}>Background color:</span>
      <input type='color' onChange={(e) => execCommand('hiliteColor', e.target.value)} />
    </div>
  );
};

export default SetBackground;
