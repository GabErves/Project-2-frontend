import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Header from './Header';
const Post = () => {
  const params = useParams(); //gets object with id from path in <Route>

  console.log(params['id']); //gets id

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const [datePosted, setDatePosted] = useState(new Date());
  const [timePosted, setTimePosted] = useState('');

  const [dateUpdated, setDateUpdated] = useState(new Date());
  const [timeUpdated, setTimeUpdated] = useState('');

  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;

    try {
      const response = await axios.get(URL);
      setPostData(response.data);

      setDatePosted(new Date(response.data.originally_published));
      setTimePosted(datePosted.toLocaleTimeString([], { hour12: false }));

      setDateUpdated(new Date(response.data.last_updated));
      setTimeUpdated(dateUpdated.toLocaleTimeString([], { hour12: false }));

      console.log(JSON.stringify(response));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (loading) {
    return (
      <>
        <h3 className="text-center p-4"> Loading... </h3>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center">Specific Post</h2>
      <div className="container align-center">
        <>
          <div className="row top">
            <div className="col-sm-6 py-3">
              <div className="card width-m py-2">
                <div className="card-body">
                  <h3 key={postData.id} className="font-bold card-title">
                    {postData.title}
                  </h3>
                  <h6 className="card-subtitle mb-2 text-muted">(@User)</h6>
                  <p className="card-text">{postData.content}</p>
                  <img
                    className="size"
                    src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                  ></img>

                  <p>
                    Last Updated: {format(dateUpdated, 'dd/mm/yyyy')}{' '}
                    {timeUpdated}{' '}
                  </p>

                  <p>
                    Originally Published: {format(datePosted, 'dd/mm/yyyy')}{' '}
                    {timePosted}
                    {}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      <div className="container text-center ">
        <Link to={`/posts/${postData.id}/edit`}>
          <button type="button" className="btn btn-primary btn-lg mx-3">
            Edit Post
          </button>
        </Link>

        <Link to={`/posts/${postData.id}/delete`}>
          <button type="button" className="btn btn-danger btn-lg mx-3">
            Delete Post
          </button>
        </Link>
      </div>
    </>
  );
};

export default Post;
