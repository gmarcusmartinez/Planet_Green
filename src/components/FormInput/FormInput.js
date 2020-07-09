import React from 'react';

const FormInput = ({ type, label, value, name, handleChange }) => {
  return (
    <div className='form-input'>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default FormInput;
