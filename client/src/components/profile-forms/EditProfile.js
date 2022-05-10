import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { updateAvatar } from '../../actions/auth';

const EditProfile = ({
  profile: { profile, loading },
  auth: { user },
  createProfile,
  updateAvatar,
  getCurrentProfile,
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      grade: loading || !profile.grade ? '' : profile.grade,
      focus: loading || !profile.focus ? '' : profile.focus,
      favoriteSubject:
        loading || !profile.favoriteSubject ? '' : profile.favoriteSubject,
      helpingSubjects:
        loading || !profile.helpingSubjects
          ? ''
          : profile.helpingSubjects.join(','),
      bio: loading || !profile.bio ? '' : profile.bio,
      snapchat: loading || !profile.social ? '' : profile.social.snapchat,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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

  return (
    <Fragment>
      <section className='whole-screen center-content abstract-background'>
        <div className='content-card shadow'>
          <h1 className='large'>Redigera din profil</h1>
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
                <option value='' selected disabled hidden>
                  {focus === 'nofocus' && 'Inte valt ännu'}
                  {focus === 'teknisk-design' && 'Teknisk Design'}
                  {focus === 'natur' && 'Naturvetenskap'}
                  {focus === 'internationell' && 'Internationell'}
                </option>
                <option value='nofocus'>Inte valt ännu</option>
                <option value='teknisk-design'>Teknisk Design</option>
                <option value='natur'>Naturvetenskap</option>
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
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
  updateAvatar,
})(withRouter(EditProfile));
