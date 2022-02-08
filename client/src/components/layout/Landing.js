import React from 'react';
import { Fragment } from 'react';
import Textbox from '../components-within-components/Textbox';
import Imgcontainer from '../components-within-components/Imgcontainer';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='landing dark-overlay'>
        <div>
          <div className='landing-content'>
            <h1 className='x-large light-font'>Välkommen till ABB-Akuten</h1>
            <p className='lead light-font'>
              ABB-Akuten är ett läxhjälpsforum för och av eleverna på
              ABBgymnasiet i Västerås. Här kan du få hjälp med dina läxor av
              både lärare och elever förutsatt att du själv hjälper andra elever
              när du kan!
            </p>
            <div className='btns'>
              <Link to='/register' className='btn btn-primary'>
                Skapa Konto
              </Link>
              <Link to='/login' className='btn btn-light'>
                Logga in
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='content-cluster'>
        <Textbox
          header='Personlig läxhjälp'
          text='ABB Akuten hjäpler elever på ABB Gymnasiet med sina läxor genom att låta både lärare och andra elever svara på frågor!'
        />
        <Imgcontainer />
        <Textbox
          header='För elever av elever'
          text='ABB Akuten är skapad av elever för elever. Det är ett mer personligt och lokalt verktyg för en skräddarsydd upplevelse.'
        />
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
