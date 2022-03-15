import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    grade,
  },
}) => {
  const history = useHistory();

  function navigate() {
    history.push(`/profile/${_id}`);
  }

  return (
    <div className='profileItem' onClick={navigate}>
      <img src={avatar} alt='' className='round avatar' />
      <h5>{name}</h5>
      <h5 className='primary-font'>{grade}</h5>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
