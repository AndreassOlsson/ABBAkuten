import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navlist'>
      <li>
        <Link to='/posts' className='light-font'>
          <i className='fas fa-mail-bulk'></i>
          {''}
          <span className='hide-sm'>Inlägg</span>
        </Link>
      </li>
      <li>
        <Link to='/profiles' className='light-font'>
          <i className='fas fa-users'></i>
          {''}
          <span className='hide-sm'>Elever</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard' className='light-font'>
          <i className='fas fa-home'></i>
          {''}
          <span className='hide-sm'>Hem</span>
        </Link>
      </li>
      <li>
        <a className='light-font' onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          {''}
          <span className='hide-sm'>Logga ut</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register' className='light-font'>
          Registrera
        </Link>
      </li>
      <li>
        <Link to='/login' className='light-font'>
          Logga in
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <div className='logo'></div>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
