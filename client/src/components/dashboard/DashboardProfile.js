import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';

const DashboardProfile = ({
  profile: {
    user: { _id, name, avatar },
    grade,
  },
  deleteAccount,
}) => {
  const history = useHistory();

  function navigate() {
    history.push(`/profile/${_id}`);
  }

  return (
    <div className='dashboard-profile'>
      <Fragment>
        <img
          src={process.env.PUBLIC_URL + `/img/${avatar}.jpg`}
          alt={`Profile Picture - ${avatar}`}
          className='round avatar interactive'
          onClick={navigate}
        />
        <h3 className='interactive' onClick={navigate}>
          {name}
        </h3>
        <h5>{grade}</h5>
        <div className='dashboard-profile-actions'>
          <Link to='/edit-profile' className='primary-font'>
            <i className='fas fa-pen'></i>
          </Link>
          <h5 className='grey-font interactive' onClick={() => deleteAccount()}>
            Radera Kontot
          </h5>
        </div>
      </Fragment>
    </div>
  );
};

DashboardProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

export default DashboardProfile;
