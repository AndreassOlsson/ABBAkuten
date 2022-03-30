import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost, tag }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text, tag });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Vad har du på hjärtat? - Dela med dig!'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
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
