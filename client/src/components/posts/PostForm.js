import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost, tag }) => {
  const [text, setText] = useState('');
  const [localTag, setLocalTag] = useState(tag);

  useEffect(() => {
    if (!tag) {
      setLocalTag('allmänt');
    } else {
      setLocalTag(tag);
    }
  }, [tag]);

  const handleChange = (e) => {
    setText(e.target.value);
    if (!tag) {
      setLocalTag('allmänt');
    } else {
      setLocalTag(tag);
    }
    console.log(localTag);
  };

  return (
    <div className='post-form'>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text, tag: localTag });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Vad har du på hjärtat? - Dela med dig!'
          value={text}
          onChange={handleChange}
          required
        ></textarea>
        <small className='form-text'>
          Ditt inlägg hamnar i kanalen{' '}
          <span className='link-standard'>{localTag}</span>
        </small>
        <input
          type='submit'
          className='btn btn-primary my-1'
          value='Skapa inlägg'
        />
      </form>
    </div>
  );
};

PostForm.propTypes = { addPost: PropTypes.func.isRequired };

export default connect(null, { addPost })(PostForm);
