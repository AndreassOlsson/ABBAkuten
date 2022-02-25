import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
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
          <section className='whole-screen abstract-background center-x light-font'>
            <div className='post-form-container profiles-form-container'>
              <h1 className='x-large'>Elever</h1>
            </div>

            <div className='profiles'>
              {profiles !== undefined ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>Inga elever hittade...</h4>
              )}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
