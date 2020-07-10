import React from 'react';
import Card from './Card';
import FormInput from '../../FormCommon/FormInput';
import CheckoutStepsBtn from '../CheckoutStepsBtn';

const PaymentInfo = ({ setStep }) => {
  const [formData, setFormData] = React.useState({
    cardNumber: '',
    cardName: '',
    expiration: '',
    securityCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { cardNumber, cardName, expiration, securityCode } = formData;

  const renderNextStepBtn = (text, step) =>
    cardNumber && cardName && expiration && securityCode ? (
      <CheckoutStepsBtn text={text} setStep={setStep} step={step} />
    ) : null;
  return (
    <div className='payment-info'>
      <Card formData={formData} />
      <div className='payment-info__container'>
        <FormInput
          label='Card Number'
          type='text'
          name='cardNumber'
          value={cardNumber}
          handleChange={handleChange}
        />
        <FormInput
          label='Card Name'
          type='text'
          name='cardName'
          value={cardName}
          handleChange={handleChange}
        />
        <FormInput
          label='Expiration'
          type='text'
          name='expiration'
          value={expiration}
          handleChange={handleChange}
        />
        <FormInput
          label='Security Code'
          type='text'
          name='securityCode'
          value={securityCode}
          handleChange={handleChange}
        />
        <div className='payment-info__buttons'>
          <CheckoutStepsBtn
            setStep={setStep}
            step='DETAILS'
            text='&#10094; SHIPPING & BILLING'
          />
          {renderNextStepBtn('CONFIRM DETAILS', 'CONFIRM')}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
