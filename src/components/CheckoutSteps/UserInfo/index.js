import React from 'react';
import CheckoutStepsBtn from '../CheckoutStepsBtn';
import FormInput from '../../FormCommon/FormInput';

const UserInfo = ({ setFormData, formData, setStep }) => {
  const [hideBillingAddress, setHideBillingAddress] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const renderNextStepBtn = (text, step) => {
    for (const [, value] of Object.entries(formData))
      if (value !== '')
        return <CheckoutStepsBtn text={text} setStep={setStep} step={step} />;
      else return null;
  };
  return (
    <div className='user-info'>
      <h2 className='user-info__title'>Shipping Address</h2>
      <FormInput
        label='Full Name'
        type='text'
        name='fullname'
        value={formData.fullname}
        handleChange={handleChange}
      />
      <FormInput
        type='text'
        label='Address'
        name='shippingAddress'
        value={formData.shippingAddress}
        handleChange={handleChange}
      />
      <FormInput
        type='text'
        label='City'
        name='shippingCity'
        value={formData.shippingCity}
        handleChange={handleChange}
      />
      <FormInput
        type='text'
        label='Postal Code'
        name='shippingPostalCode'
        value={formData.shippingPostalCode}
        handleChange={handleChange}
      />
      <h2 className='user-info__title'>Billing Address</h2>
      <div className='billing-checkbox'>
        <input
          type='checkbox'
          onChange={() => setHideBillingAddress(!hideBillingAddress)}
        />
        <label>Same As Shipping Address</label>
      </div>
      {!hideBillingAddress ? (
        <span className='billing-address'>
          <FormInput
            label='Full Name'
            type='text'
            name='billingFullname'
            value={formData.billingFullName}
            handleChange={handleChange}
          />
          <FormInput
            type='text'
            label='Address'
            name='billingAddress'
            value={formData.billingAddress}
            handleChange={handleChange}
          />
          <FormInput
            type='text'
            label='City'
            name='billingCity'
            value={formData.billingCity}
            handleChange={handleChange}
          />
          <FormInput
            type='text'
            label='Postal Code'
            name='billingPostalCode'
            value={formData.billingPostalCode}
            handleChange={handleChange}
          />
        </span>
      ) : null}
      {renderNextStepBtn('PAYMENT DETAILS', 'PAYMENT')}
    </div>
  );
};

export default UserInfo;
