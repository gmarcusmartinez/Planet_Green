import React from 'react';
import { Link } from 'react-router-dom';
import CartCountDisplay from './CartCountDisplay';

const UserDetails = ({ user }) => {
  return (
    <div className='user-details'>
      <div className='user-name'>{user.name}</div>
      <Link to='/cart' className='cart'>
        Cart <CartCountDisplay />
      </Link>
    </div>
  );
};

export default UserDetails;
