import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ _id, comment, auth, deleteComment }) => {
  return (
    <div className='post comment'>
      <div className='postAuthor'>
        <Link to={`/profile/${comment.user}`}>
          <img src={comment.avatar} alt='' className='round avatar' />
          <h5 className='primary-font break-name'>{comment.name}</h5>
        </Link>
      </div>
      <p className='postText'>{comment.text}</p>

      <div className='postActions'>
        <h6 className='grey-font'>
          Posted on <Moment format='YYYY/MM/DD'>{comment.date}</Moment>
        </h6>
        {!auth.loading && comment.user === auth.user._id && (
          <button
            onClick={(e) => deleteComment(_id, comment._id)}
            type='button'
            className='btn btn-danger'
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  _id: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
