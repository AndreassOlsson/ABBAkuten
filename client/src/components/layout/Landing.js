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
            <h1 className='x-large light-font'>BaitScore</h1>
            <p className='lead light-font'>
              BaitScore is a social network that brings all fishermen together
              and lets users share their favorite fishing stories, techniques
              and lures
            </p>
            <div className='btns'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='content-cluster bg-shark'>
        <Textbox
          header='Find the best lures'
          text='BaitScore hosts regular polls that allows members to vote on their favorite lures and thereby 
            sheds light on the lures that are the most effective'
        />
        <Imgcontainer />
        <Textbox
          header='Learn from others'
          text='BaitScore allows anglers to learn new fishing strategies from others by encouraging users to share their 
            knowledge and stories on active discussion threads'
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
