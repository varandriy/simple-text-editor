import React from 'react';

const SetFontSize = ({ execCommand }) => {
  return (
    <div>
      <span style={{ paddingRight: '10px' }}>Font size:</span>
      <select defaultValue={3} onChange={(e) => execCommand('fontSize', e.target.value)}>
        <option value='1'>x-small</option>
        <option value='2'>small</option>
        <option value='3'>medium</option>
        <option value='4'>large</option>
        <option value='5'>x-large</option>
        <option value='6'>xx-large</option>
        <option value='7'>xxx-large</option>
      </select>
    </div>
  );
};

export default SetFontSize;
