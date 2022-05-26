import React from 'react';
import DefaultComponentTitle from './DefaultComponentTitle';

function DefaultComponent() {
  const uiComponents = ['Text', 'Button', 'ComboBox', 'CheckBox', 'RadioButton'];

  return (
    <div>
      <DefaultComponentTitle></DefaultComponentTitle>
      <ul>
        {uiComponents.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DefaultComponent;