import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    user: { _id, name, avatar },
    grade,
    focus,
    favoriteSubject,
    helpingSubjects,
    bio,
  },
}) => {
  return (
    <Fragment>
      <div className='curtains'>
        <div className='hero light-font'>
          <div className='bg-blur'>
            <h1 className='large'>{name}</h1>
            <p
              className={
                focus
                  ? focus.toString().replace(/ /, '-').toLowerCase() +
                    ' heavy-font'
                  : ''
              }
            >
              {focus}
              <br />
              {grade}
            </p>
            <img
              src={avatar}
              alt=''
              className='round medium-avatar overlapping'
            />
          </div>
        </div>
      </div>
      <div className='center-x'>
        <div className='profile-content light-font'>
          <div className='profile-content-info'>
            <p className='grey-font italic'>Favoritämne:</p>
            <p
              className={
                focus
                  ? focus.toString().replace(/ /, '-').toLowerCase() +
                    ' heavy-font'
                  : ''
              }
            >
              {favoriteSubject}
            </p>
          </div>
          <div className='profile-content-info'>
            <p className='grey-font italic' id='adjust-helpingSubjects-header'>
              Jag är bra på:
            </p>
            <ul className='flex-list'>
              {helpingSubjects.slice(0, 3).map((subject, index) => (
                <li key={index} className='heavy-font'>
                  {subject}
                  <i
                    className={
                      focus
                        ? focus.toString().replace(/ /, '-').toLowerCase() +
                          ' fas fa-check'
                        : ' fas fa-check'
                    }
                  ></i>
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
          <i class='fa fa-snapchat'></i>
          <i class='fa fa-instagram'></i>
          <i class='fa fa-twitter'></i>
          <i class='fa fa-facebook'></i>
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
