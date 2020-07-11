import React from 'react';

const CheckoutStepsBtn = ({ setStep, step, text }) => {
  return (
    <div className='checkout-steps-btn' onClick={() => setStep(step)}>
      {text}
    </div>
  );
};

export default CheckoutStepsBtn;
