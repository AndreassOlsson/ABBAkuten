import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentItem from '../post/CommentItem';
import CommentForm from '../post/CommentForm';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='top-left'>
        <Link to='/posts' className='btn btn-light'>
          Tillbaka
        </Link>
      </div>

      <section className='whole-screen abstract-background center-x light-font posts'>
        <PostItem post={post} showActions={false} isComment={true} />
        <CommentForm _id={post._id} />
        <div className=''>
          {post.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} _id={post._id} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
