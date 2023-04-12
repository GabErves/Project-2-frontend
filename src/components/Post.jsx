import React from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
const Post = () => {
  const params = useParams(); //gets object with id from path in <Route>

  console.log(params['id']); //gets id

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;

    try {
      const response = await axios.get(URL);
      setPostData(response.data);
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
          <div className="row">
            <div className="col-sm-6 py-3">
              <div className="card width-m py-2">
                <div className="card-body">
                  <h3 key={postData.id} className="font-bold card-title">
                    {postData.title}
                  </h3>
                  <h6 className="card-subtitle mb-2 text-muted">(@User)</h6>
                  <p className="card-text">{postData.content}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Post;
