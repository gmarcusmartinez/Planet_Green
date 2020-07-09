import React from 'react';
import SigninForm from '../../components/SigninForm/SigninForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const AuthScreen = () => {
  return (
    <div className='auth-screen'>
      <SigninForm />
      <span className='auth-screen__span'>or</span>
      <RegisterForm />
    </div>
  );
};

export default AuthScreen;
