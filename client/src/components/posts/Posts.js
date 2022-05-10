import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ location, getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [tag, setTag] = useState('');
  const [numberOfPosts, setNumberOfPosts] = useState(10);

  useEffect(() => {
    if (location.state !== undefined) {
      setTag(location.state.tag);
    }
  }, [location]);

  useEffect(() => {
    setNumberOfPosts(10);
  }, [tag, setTag]);

  return loading ? (
    <section className='whole-screen abstract-background center-x light-font'>
      <Spinner />
    </section>
  ) : (
    <Fragment>
      <section className='whole-screen abstract-background center-x light-font'>
        <div className='post-form-container'>
          <h1 className='x-large'>Elevfrågor</h1>
          <select
            className='thread-select light-font'
            name='tag'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option className='dark-font' value=''>
              Alla frågor
            </option>
            <option value='allmänt'>Allmänt</option>
            <option value='engelska'>Engelska</option>
            <option value='internationell'>Internationell</option>
            <option value='matematik'>Matematik</option>
            <option value='naturvetenskap'>Naturvetenskap</option>
            <option value='svenska'>Svenska</option>
            <option value='teknik'>Teknik</option>
            <option value='åsikter'>Åsikter</option>
            <option value='förbättringsförslag'>Förbättringsförslag</option>
          </select>
          <PostForm tag={tag} />
        </div>
        <div className='posts'>
          {!tag &&
            posts
              .slice(0, numberOfPosts)
              .map((post) => <PostItem key={post._id} post={post} />)}
          {tag &&
            posts
              .filter((post) => post.tag === tag)
              .slice(0, numberOfPosts)
              .map((post) => <PostItem key={post._id} post={post} />)}
          <div className='center-item'>
            {tag &&
              numberOfPosts <
                posts.filter((post) => post.tag === tag).length && (
                <button
                  className='btn btn-light'
                  onClick={() => setNumberOfPosts(numberOfPosts + 10)}
                >
                  Visa fler inlägg...
                </button>
              )}
            {tag &&
              numberOfPosts >=
                posts.filter((post) => post.tag === tag).length && (
                <p>Alla inlägg är visade</p>
              )}
            {!tag && numberOfPosts < posts.length && (
              <button
                className='btn btn-light'
                onClick={() => setNumberOfPosts(numberOfPosts + 10)}
              >
                Visa fler inlägg
              </button>
            )}
            {!tag && numberOfPosts >= posts.length && (
              <p>Alla inlägg är visade</p>
            )}
          </div>
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
