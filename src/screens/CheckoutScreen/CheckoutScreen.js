import React from 'react';
import { defaultUserInfoState } from './helpers';
import * as STEPS from '../../components/CheckoutSteps';

const CheckoutScreen = () => {
  const [step, setStep] = React.useState('DETAILS');
  const [formData, setFormData] = React.useState(defaultUserInfoState);

  const renderContent = () => {
    switch (step) {
      case 'DETAILS':
        return (
          <STEPS.UserInfo
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 'PAYMENT':
        return <STEPS.PaymentInfo setStep={setStep} />;
      case 'CONFIRM':
        return <STEPS.ConfirmDetails setStep={setStep} />;
      case 'SUCCESS':
        return <STEPS.OrderSuccess />;
      default:
        return null;
    }
  };
  return <div className='checkout-screen'>{renderContent()}</div>;
};

export default CheckoutScreen;
