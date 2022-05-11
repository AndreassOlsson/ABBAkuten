import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';
import { updateAvatar } from '../../actions/auth';

const CreateProfile = ({
  createProfile,
  updateAvatar,
  auth: { user },
  history,
}) => {
  const [formData, setFormData] = useState({
    grade: '',
    focus: '',
    favoriteSubject: '',
    helpingSubjects: '',
    bio: '',
    snapchat: '',
    instagram: '',
    twitter: '',
    facebook: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const {
    grade,
    focus,
    favoriteSubject,
    helpingSubjects,
    bio,
    snapchat,
    instagram,
    twitter,
    facebook,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeClass = (e) => {
    let input = e.target.value;
    if (input.toLowerCase() === 'lärare') {
      setIsTeacher(true);
    } else {
      setIsTeacher(false);
    }
    onChange(e);
  };

  const isDisabled = () => {
    if (isTeacher || formData.grade === 'Lärare') {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    if (isTeacher) {
      updateAvatar({
        avatar: 'teacher',
        id: user._id,
      });
    } else {
      updateAvatar({
        avatar: formData.focus,
        id: user._id,
      });
    }
    confirm(e);
  };

  const confirm = (e) => {
    if (isTeacher) {
      updateAvatar({
        avatar: 'teacher',
        id: user._id,
      });
    } else {
      updateAvatar({
        avatar: formData.focus,
        id: user._id,
      });
    }
    e.preventDefault();
    createProfile(formData, history, true);
  };

  const handleClassName = () => {
    if (user !== null) {
      if (user.avatar !== null) {
        return 'theme-' + user.avatar;
      }
    } else {
      return '';
    }
  };

  return (
    <Fragment>
      <section
        className={
          'whole-screen center-content dark-font ' + handleClassName(user)
        }
      >
        <div className='bg-gray'>
          <div className='content-card shadow'>
            <h1 className='large'>Skapa din profil</h1>
            <p className='lead'>
              <i className='fas fa-user'></i>
              Lägg till information som får din profil att stå ut!
            </p>
            <small>* Krävs</small>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='* Klass'
                  name='grade'
                  value={grade}
                  onChange={(e) => onChangeClass(e)}
                />
                <small className='form-text'>
                  OBS: Om du är lärare skriv 'Lärare'
                </small>
              </div>
              <div className='form-group'>
                <select
                  name='focus'
                  onChange={(e) => onChange(e)}
                  disabled={isDisabled()}
                >
                  <option value=''>{focus}</option>
                  <option value='nofocus'>Inte valt ännu</option>
                  <option value='teknisk-design'>Teknisk Design</option>
                  <option value='natur'>Natur</option>
                  <option value='internationell'>Internationell</option>
                </select>
                <small className='form-text'>Vilken inriktning går du?</small>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='* Favoritämne'
                  name='favoriteSubject'
                  value={favoriteSubject}
                  onChange={(e) => onChange(e)}
                />
                <small className='form-text'>Vilket är ditt favoritämne?</small>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='* Jag kan hjälpa till med...'
                  name='helpingSubjects'
                  value={helpingSubjects}
                  onChange={(e) => onChange(e)}
                />
                <small className='form-text'>
                  Ex: Matematik, Engelska, Historia
                </small>
              </div>
              <div className='form-group'>
                <textarea
                  placeholder='En kort beskrivning av dig själv eller ett favoritcitat'
                  name='bio'
                  value={bio}
                  onChange={(e) => onChange(e)}
                ></textarea>
                <small className='form-text'>
                  Berätta något roligt om dig själv!
                </small>
              </div>
              <div className='my-2 added-margin'>
                <button
                  onClick={() => toggleSocialInputs(!displaySocialInputs)}
                  type='button'
                  className='btn btn-light'
                >
                  Visa sociala nätverk
                </button>
              </div>

              {displaySocialInputs && (
                <Fragment>
                  <div className='form-group social-input'>
                    <i className='fab fa-snapchat fa-2x'></i>
                    <input
                      type='text'
                      placeholder='Snapchat användarnamn'
                      name='snapchat'
                      value={snapchat}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className='form-group social-input'>
                    <i className='fab fa-instagram fa-2x'></i>
                    <input
                      type='text'
                      placeholder='Instagram användarnamn'
                      name='instagram'
                      value={instagram}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className='form-group social-input'>
                    <i className='fab fa-twitter fa-2x'></i>
                    <input
                      type='text'
                      placeholder='Twitter användarnamn'
                      name='twitter'
                      value={twitter}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className='form-group social-input'>
                    <i className='fab fa-facebook fa-2x'></i>
                    <input
                      type='text'
                      placeholder='Facebook användarnamn'
                      name='facebook'
                      value={facebook}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </Fragment>
              )}

              <input type='submit' className='btn btn-primary my-1' />
              <Link to='/dashboard' className='btn btn-light my-1'>
                Tillbaka
              </Link>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile, updateAvatar })(
  withRouter(CreateProfile)
);
