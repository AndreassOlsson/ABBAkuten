import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './SocialIcons';

const ProfileTop = ({
  profile: {
    user: { _id, name, avatar },
    grade,
    focus,
    favoriteSubject,
    helpingSubjects,
    bio,
    social,
  },
}) => {
  return (
    <Fragment>
      <div className='curtains'>
        <div className={'hero light-font ' + avatar}>
          <div className='bg-blur'>
            <h1 className='large'>{name}</h1>
            <p className='heavy-font'>
              {focus}
              <br />
              {grade}
            </p>
            <img
              src={process.env.PUBLIC_URL + `/img/${avatar}.jpg`}
              alt={`Profile Picture - ${avatar}`}
              className='round medium-avatar overlapping'
            />
          </div>
        </div>
      </div>
      <div className='center-x'>
        <div className='profile-content light-font'>
          <div className='profile-content-info'>
            <p className='grey-font italic'>Favoritämne:</p>
            <p className='heavy-font'>{favoriteSubject}</p>
          </div>
          <div className='profile-content-info'>
            <p className='grey-font italic' id='adjust-helpingSubjects-header'>
              Jag är bra på:
            </p>
            <ul className='flex-list'>
              {helpingSubjects.slice(0, 3).map((subject, index) => (
                <li key={index} className='heavy-font'>
                  {subject}
                  <i className='fas fa-check'></i>
                </li>
              ))}
            </ul>
          </div>
          <div className='profile-content-info'>
            <p className='grey-font italic'>Visdomsord:</p>
            <p className='italic bio'>"{bio}"</p>
          </div>
        </div>
        <div className='social-icons light-font'>
          {social !== undefined && <SocialIcons social={social} />}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
