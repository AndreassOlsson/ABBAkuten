import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
//import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // REDIRECT IF LOGGED IN
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='whole-screen center-content abstract-background'>
        <div className='content-card shadow'>
          <h1 className='large'>Logga in</h1>
          <p className='lead black'>
            <i className='fas fa-user'></i>Logga in på ditt konto
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Adress'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Lösenord'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
                required
              />
            </div>
            <input
              type='submit'
              className='my-2 btn btn-primary'
              value='Logga in'
            />
          </form>
          <p className='black'>
            Har du inget konto?{' '}
            <Link to='/register' className='link-primary'>
              Registrera
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
