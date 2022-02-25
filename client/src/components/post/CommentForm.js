import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ _id, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form px-2'>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(_id, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Svara på inlägget'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='btn btn-primary my-1' value='Svara' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
