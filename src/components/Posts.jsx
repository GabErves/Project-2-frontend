import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import Header from './Header';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = 'http://localhost:3001/v1/api/posts';

    try {
      const response = await axios.get(URL);
      setPostData(response.data);

      console.log(JSON.stringify(response));
    } catch (e) {
      setError('Error: ' + e.message);
    } finally {
      setLoading(false);
    }

    // const data_received = await axios.get('http://localhost:3001/v1/api/posts');

    // setLoading(false);
    // setPostData(data_received.data);

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

  //JSX:
  return (
    <>
      {!loading && (
        <>
          <h2 className="p-4 font-bold display-4" data-testid="all posts">
            All Posts
          </h2>
          <div className="container align-center">
            {postData.map((post) => {
              return (
                <>
                  <div className="row top">
                    <div className="col-sm-6 py-3 top">
                      <div className="card width-m py-2 top" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                          <div className="card-body" data-testid="postsData">
                            <h3 className="font-bold card-title top">
                              {post.title}
                            </h3>
                            <h6 className="card-subtitle mb-2 text-muted top">
                              (@User)
                            </h6>
                            <p className="card-text">{post.content}</p>
                            <img
                              className="size"
                              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                            ></img>
                            <p>
                              Last Updated:{' '}
                              {format(
                                new Date(post.last_updated),
                                'dd/mm/yyyy'
                              )}{' '}
                              {new Date(post.last_updated).toLocaleTimeString(
                                [],
                                {
                                  hour12: false,
                                }
                              )}
                            </p>

                            <p>
                              Originally Published:{' '}
                              {format(
                                new Date(post.originally_published),
                                'dd/mm/yyyy'
                              )}{' '}
                              {new Date(
                                post.originally_published
                              ).toLocaleTimeString([], {
                                hour12: false,
                              })}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}

      {loading && (
        <>
          <p>Data Here: {JSON.stringify(postData)}</p>
          <h3 className="text-center p-4" data-testid="loading">
            {' '}
            Loading...{' '}
          </h3>
        </>
      )}

      {error && (
        <div className="text-center p-4">
          <h3>Error: {error}</h3>
        </div>
      )}
    </>
  ); //End of return
}; //End of function

export default Posts;
