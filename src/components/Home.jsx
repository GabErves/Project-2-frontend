import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import food from './food.jpg';
import travel from './travel.jpg'
import lifestyle from './lifestyle.jpeg'


const Home = () => {
  
  return (
    <div>
      {/* <h2 className="text-center">Homepage</h2> */}
      {/* <p className="text-center">Welcome to our blogging site! We are thrilled to have you here. Our site is all about sharing and discovering interesting ideas, stories, and insights. Whether you are a seasoned writer or just starting out, we invite you to join our community of passionate bloggers.</p>

<p className="text-center">Explore our site to discover a wide range of topics, including technology, lifestyle, culture, health, and more. We believe that everyone has a unique perspective to share, and we encourage our writers to express themselves freely and authentically.</p>

<p className="text-center">As a member of our community, you can create your own blog, share your thoughts and ideas, and engage with other bloggers through comments and discussions. We also offer resources and tips to help you improve your writing skills and build your audience.</p>

<p  className="text-center">So what are you waiting for? Start exploring our site and become a part of our vibrant community of bloggers. We can't wait to see what you create!</p> */}

      <h2 className="p-4 display-4 fw-bolder" data-testid="create post">
        Welcome to Bulletin Social!
      </h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={lifestyle}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text">Lifestyle Blogging</h3>
            <p className="text">Host your lifestyle blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text">Food Blogging</h3>
            <p className="text">Host your food blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={travel}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text">Travel Blogging</h3>
            <p className="text">Host your travel blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class="container">
      <div class="rectangle">
      <h3 className='blob'>"Bulletin Social is a vibrant and engaging platform for bloggers to share their unique perspectives and connect with readers from all over the world. Whether you're a seasoned writer or just starting out, Bulletin Social provides a user-friendly interface and a supportive community of fellow bloggers to help you achieve your goals. From personal essays to informative how-to guides, Bulletin Social is the perfect place to showcase your writing skills and build your online presence."</h3>
    </div>
    </div>

  
   

   
    

    </div>)}


    
   
 


export default Home;
