import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [tag, setTag] = useState('');

  return loading ? (
    <section className='whole-screen abstract-background center-x light-font'>
      <Spinner />
    </section>
  ) : (
    <Fragment>
      <section className='whole-screen abstract-background center-x light-font'>
        <div className='post-form-container'>
          <h1 className='x-large'>Inlägg</h1>
          <select name='tag' onChange={(e) => setTag(e.target.value)}>
            <option value=''>Alla inlägg</option>
            <option value='general'>Allmänt</option>
            <option value='engelska'>Engelska</option>
            <option value='internationell'>Internationell</option>
            <option value='matematik'>Matematik</option>
            <option value='naturvetenskap'>Naturvetenskap</option>
            <option value='svenska'>Svenska</option>
            <option value='teknik'>Teknik</option>
            <option value='thoughts'>
              Åsikter, Tankar {'&'} Förbättringsförslag
            </option>
          </select>
          <PostForm tag={tag} />
        </div>
        <div className='posts'>
          {!tag && posts.map((post) => <PostItem key={post._id} post={post} />)}
          {tag &&
            posts
              .filter((post) => post.tag === tag)
              .map((post) => <PostItem key={post._id} post={post} />)}
        </div>
      </section>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
