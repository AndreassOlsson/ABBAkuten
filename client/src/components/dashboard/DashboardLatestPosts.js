import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import PostForm from '../posts/PostForm';
import { getPosts } from '../../actions/post';

const DashboardLatestPosts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='light-font'>
        <h3>Senaste Inläggen</h3>
      </Link>

      <div className='dashboard-latest-posts'>
        {posts.splice(0, 3).map((post) => (
          <PostItem key={post._id} post={post} showActions={false} />
        ))}
      </div>
    </Fragment>
  );
};

DashboardLatestPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(DashboardLatestPosts);
