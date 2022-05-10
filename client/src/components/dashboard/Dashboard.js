import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardProfile from './DashboardProfile';
import DashboardLatestPosts from './DashboardLatestPosts';
import DashboardLatestProfiles from './DashboardLatestProfiles';
import { deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const handleClassName = () => {
    if (auth && auth.user !== null) {
      if (auth.user.avatar !== null) {
        return auth.user.avatar;
      }
    } else {
      return '';
    }
  };

  return loading ? (
    <section className='whole-screen abstract-background center-x light-font'>
      <Spinner />
    </section>
  ) : (
    <Fragment>
      <section
        className={
          'whole-screen abstract-background center-x light-font ' +
          handleClassName(auth)
        }
      >
        <div className='dashboard-container'>
          <div className='dashboard-divider'>
            <div className='dashboard-content'>
              {profile !== null ? (
                <DashboardProfile
                  key={profile._id}
                  profile={profile}
                  hasProfile={true}
                />
              ) : (
                <Fragment>
                  <h3>Välkommen</h3>
                  <Link
                    to='/create-profile'
                    className='btn btn-primary btn-adjusted-margin'
                  >
                    <i className='fas fa-user-circle'></i>Skapa Profil
                  </Link>
                  <h5
                    className='grey-font interactive'
                    onClick={() => deleteAccount()}
                  >
                    Radera Kontot
                  </h5>
                </Fragment>
              )}
            </div>

            <div className='dashboard-content'>
              <DashboardLatestProfiles />
            </div>
          </div>

          <div className='dashboard-content dashboard-posts-parent'>
            <DashboardLatestPosts />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
