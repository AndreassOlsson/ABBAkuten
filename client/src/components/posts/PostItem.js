import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className='post'>
      <div className='postAuthor'>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt='' className='round avatar' />
          <h5 className='primary-font'>{name}</h5>
        </Link>
      </div>

      <p className='postText'>{text}</p>

      <div className='postActions'>
        <h6 className='grey-font'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </h6>

        {showActions && (
          <Fragment>
            <button className='btn' onClick={(e) => addLike(_id)}>
              <i className='fas fa-thumbs-up'></i>
              <span>{likes.length > 0 ? likes.length : ''}</span>
            </button>
            <button className='btn' onClick={(e) => removeLike(_id)}>
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/post/${_id}`} className='smallerFont btn btn-primary '>
              Disucss <span>{comments.length > 0 ? comments.length : ''}</span>
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                className='btn btn-danger'
                onClick={(e) => deletePost(_id)}
              >
                X
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
