import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../store/actions/auth';
import UserDetails from './UserDetails';

const Header = ({ currentUser, signout }) => {
  const renderSigninBtn = () =>
    currentUser ? (
      <>
        <UserDetails user={currentUser} />
        <div className='app-theme-link' onClick={() => signout()}>
          Signout
        </div>
      </>
    ) : (
      <Link to='/signin' className='app-theme-link auth-link'>
        Signin
      </Link>
    );

  return (
    <div className='header'>
      <Link to='/' className='app-theme-link'>
        <h1 className='title'>Planet Green</h1>
      </Link>
      {renderSigninBtn()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps, { signout })(Header);
