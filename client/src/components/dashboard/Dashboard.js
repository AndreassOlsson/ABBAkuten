import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardProfile from './DashboardProfile';
import DashboardLatestPosts from './DashboardLatestPosts';
import DashboardLatestProfiles from './DashboardLatestProfiles';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='whole-screen abstract-background center-x light-font'>
        <div className='dashboard-container'>
          <div>
            {profile !== null ? (
              <div className='dashboard-content'>
                <DashboardProfile
                  key={profile._id}
                  profile={profile}
                  hasProfile={true}
                />
              </div>
            ) : (
              <div className='dashboard-content'>
                <h3>Välkommen</h3>
                <Link to='/create-profile' className='btn btn-primary'>
                  <i className='fas fa-user-circle'></i>Skapa Profil
                </Link>
              </div>
            )}
            <div className='dashboard-content'>
              <DashboardLatestProfiles />
            </div>
          </div>
          <div className='dashboard-content'>
            <DashboardLatestPosts />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
})(Dashboard);
