import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../store/actions/auth';
import FormInput from '../FormInput/FormInput';

const SigninForm = ({ signin }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(formData);
    setFormData({ email: '', password: '' });
  };
  const { email, password } = formData;
  return (
    <div className='signin'>
      <h2 className='signin__title'>Signin to your account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
        />
        <button className='auth-btn'>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { signin })(SigninForm);
