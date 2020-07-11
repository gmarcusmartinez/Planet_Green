import React from 'react';
import Alert from '../../components/Alert';
import SigninForm from '../../components/SigninForm/SigninForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const AuthScreen = () => {
  return (
    <>
      <Alert />
      <div className='auth-screen'>
        <SigninForm />
        <span className='auth-screen__span'>or</span>
        <RegisterForm />
      </div>
    </>
  );
};

export default AuthScreen;
