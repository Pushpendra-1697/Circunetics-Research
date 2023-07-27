import React, { useState } from 'react';

const SliderComponent = ({ onChange }) => {
  const [value, setValue] = useState(50);
  
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={handleChange}
      />
      <p>Slider Value: {value}</p>
    </div>
  );
}

export default SliderComponent;