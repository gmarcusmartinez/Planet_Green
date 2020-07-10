import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/actions/auth';
import FormInput from '../FormCommon/FormInput';

const RegisterForm = ({ register }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) alert('Passwords must match');
    register(formData);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };
  const { name, email, password, confirmPassword } = formData;
  return (
    <div className='register'>
      <h2 className='register__title'>Register for a new account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          name='name'
          value={name}
          handleChange={handleChange}
        />
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
        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
        />
        <button className='auth-btn'>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { register })(RegisterForm);
