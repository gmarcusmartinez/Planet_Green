import React from 'react';
import { defaultUserInfoState } from './helpers';
import * as STEPS from '../../components/CheckoutSteps';

const CheckoutScreen = () => {
  const [step, setStep] = React.useState('DETAILS');
  const [userInfo, setUserInfo] = React.useState(defaultUserInfoState);

  const renderContent = () => {
    switch (step) {
      case 'DETAILS':
        return (
          <STEPS.UserInfo
            setStep={setStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        );
      case 'PAYMENT':
        return <STEPS.PaymentInfo setStep={setStep} />;
      case 'CONFIRM':
        return <STEPS.ConfirmDetails setStep={setStep} />;
      case 'SUCCESS':
        return <STEPS.OrderSuccess />;
    }
  };
  return <div className='checkout-screen'>{renderContent()}</div>;
};

export default CheckoutScreen;
