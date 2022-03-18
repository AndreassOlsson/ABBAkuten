import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from '../profiles/ProfileItem';
import { getProfiles } from '../../actions/profile';

const DashboardLatestProfiles = ({
  getProfiles,
  profile: { profiles, loading },
}) => {
  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='light-font'>
            <h3>Nya Elever</h3>
          </Link>

          <div className='dashboard-latest-profiles'>
            {profiles !== undefined ? (
              profiles
                .slice(0, 3)
                .map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
            ) : (
              <h4>Inga elever hittade...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

DashboardLatestProfiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(
  DashboardLatestProfiles
);
