import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postData, setPostData] = useState([]);
  const [posted, setPosted] = useState(false);

  const postContent = async () => {
    console.log(title);
    const URL = 'http://localhost:3001/v1/api/posts';
    axios
      .post(URL, {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setContent('');
    setTitle('');
    setPosted(true);
  };

  if (posted) {
    return (
      <>
        <div className="container text-center">
          <h3 className="text-center p-4" data-testid="Deleted Post">
            {' '}
            Your Post Has Been{' '}
            <span className="text-success fw-bold">Uploaded</span>{' '}
          </h3>
          <Link to={`/posts`}>
            <button type="button" className="btn btn-primary btn-lg">
              Return to Home
            </button>
          </Link>
        </div>
      </>
    );
  }
  if (!posted) {
    return (
      <>
        <h2 className="p-4 display-4 fw-bolder" data-testid="create post">
          Create Post
        </h2>
        <form className="flabel py-3">
          <div className="container">
            <label
              className="flabel px-3 fs-3"
              data-testid="Title"
              htmlfor="titleInput"
            >
              <h3> Title </h3>
            </label>

            <div className="">
              <input
                className="flabel"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-testid="titleInput"
              />
            </div>
          </div>
          <div className="container pt-4 text-start">
            <label
              className="flabel fs-3"
              data-testid="Content"
              htmlfor="contentInput"
            >
              <h3> Content </h3>
            </label>

            <div>
              <textarea
                className="flabel"
                data-testid="contentInput"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="postContent"
              />
            </div>
          </div>
          {/* <button onClick={postContent}>Submit</button> */}{' '}
          {/* Does not play nice with postContent for some reason :/ */}
        </form>

        <div className="container text-center ">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={postContent}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
};

export default Create;
