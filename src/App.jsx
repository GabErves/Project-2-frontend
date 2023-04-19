import { Routes, Route } from 'react-router-dom';

import React from 'react';

import Create from './components/Create';

import Footer from './components/Footer';

import Header from './components/Header';

import Home from './components/Home';

import Post from './components/Post';

import Posts from './components/Posts';

import NotFound from './components/NotFound';

import Edit from './components/Edit';

import Delete from './components/Delete';

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="/posts/:id/edit" element={<Edit />}></Route>
        <Route path="/posts/:id/delete" element={<Delete />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
