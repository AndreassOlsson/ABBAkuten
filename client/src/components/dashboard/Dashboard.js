import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import ProfileTop from '../profile/ProfileTop';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className={profile === null ? '' : 'whole-screen'}>
        <div className='profile-container center-x'>
          {profile !== null ? (
            <Fragment>
              <ProfileTop profile={profile} />
              <div className='btns '>
                <DashboardActions />
                <button
                  className='btn btn-danger added-margin'
                  onClick={() => deleteAccount()}
                >
                  <i className='fas fa-user-minus'></i>
                  {''}
                  Radera konto
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='noProfilePage'>
                <div className='bruh'>
                  <p className='lead light-font'>
                    Du har inte skapat en profil än :/ :(
                  </p>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Skapa profil
                  </Link>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
