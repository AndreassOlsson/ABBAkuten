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
  const handleClassName = () => {
    if (focus.toLowerCase() === 'teknisk design') {
      return ' td';
    } else if (focus.toLowerCase() === 'natur') {
      return ' na';
    } else if (focus.toLowerCase() === 'internationell') {
      return ' in dark-font';
    } else {
      return ' nofocus dark-font';
    }
  };

  return (
    <Fragment>
      <div className='curtains'>
        <div className={'hero light-font' + handleClassName()}>
          <div className='bg-blur'>
            <h1 className='large'>{name}</h1>
            <p
              className={
                focus
                  ? focus.toString().replace(/ /, '-').toLowerCase() +
                    ' heavy-font'
                  : ' nofocus npheavy-font'
              }
            >
              {focus}
              <br />
              {grade}
            </p>
            <img
              src={process.env.PUBLIC_URL + '/img/nofocus.jpg'}
              alt='Profile picture'
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
                  : 'nofocus heavy-font'
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
                        : ' nofocus fas fa-check'
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
