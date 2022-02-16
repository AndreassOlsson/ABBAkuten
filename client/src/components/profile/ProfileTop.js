import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    user: { _id, name, avatar },
    status,
    age,
    city,
    species,
    pbs,
    favoriteLure,
    bio,
  },
}) => {
  return (
    <Fragment>
      <div className='hero light-font'>
        <div className='bg-blur'>
          <h1 className='large'>{name}</h1>
          <p
            className={
              status
                ? status.toString().replace(/ /, '-').toLowerCase() +
                  ' heavy-font'
                : ''
            }
          >
            {status}
          </p>
          <img
            src={avatar}
            alt=''
            className='round medium-avatar overlapping'
          />
        </div>
      </div>
      <div className='center-x'>
        <div className='profile-content dark-font heavy-font'>
          <div className='profile-content-info'>
            {age && city ? (
              <h6>
                {age}, {city}
              </h6>
            ) : (
              <h6>
                {age} {city}
              </h6>
            )}
            {favoriteLure ? (
              <p className='div5 miniFont'>
                <span className='hide-sm'>Favoritämne:</span>
                <p
                  className={
                    status
                      ? status.toString().replace(/ /, '-').toLowerCase() +
                        ' miniHeader no-wordwrap'
                      : 'miniHeader'
                  }
                >
                  {favoriteLure}
                </p>
              </p>
            ) : (
              ''
            )}
          </div>
          <div className='bottom'>
            <ul className='x-list'>
              {species.slice(0, 3).map((specie, index) => (
                <li key={index}>{specie}</li>
              ))}
            </ul>
            <ul className='x-list'>
              {pbs.slice(0, 3).map((pb, index) => (
                <li key={index}>
                  <i className='fas fa-medal'></i>
                  {pb}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className='lower added-margin italic bio'>{bio}</p>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
