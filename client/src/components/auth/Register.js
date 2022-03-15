import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const { name, email, password, password_confirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirm) {
      setAlert('Passwords do not match', 'danger', 5000);
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='whole-screen center-content abstract-background'>
        <div className='content-card shadow'>
          <h1 className='large'>Registrera</h1>
          <p className='lead black'>
            <i className='fas fa-user'></i>Skapa ditt konto
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Namn'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
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
            <div className='form-group'>
              <input
                type='password'
                placeholder='Bekräfta Lösenord'
                name='password_confirm'
                value={password_confirm}
                onChange={(e) => onChange(e)}
                minLength='6'
                required
              />
            </div>
            <input
              type='submit'
              className='my-2 btn btn-primary'
              value='Registera'
            />
          </form>
          <p className='black'>
            Har du redan ett konto?{' '}
            <Link to='/login' className='link-primary'>
              Logga in
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
