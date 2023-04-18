import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import Create from './Create';
// import Footer from './Footer';
import Header from './Header';
// import Home from './Home';
// import Post from './Post';
// import Posts from './Posts';
// import NotFound from './NotFound';
// import Edit from './Edit';
// import Delete from './Delete';
import { render, screen, waitFor } from '@testing-library/react';
describe('Header Component renders correctly', () => {
  beforeEach(() => {
    render(
      <>
        <Router>
          <Header></Header>
        </Router>
      </>
    );
  });

  test('The section "Home" appears', async () => {
    expect(screen.queryAllByText(`Home`));
  });

  test('The section "Create" appears', async () => {
    expect(screen.queryAllByText(`Create`));
  });

  test('The section "All Posts" appears', async () => {
    expect(screen.queryAllByText(`All Posts`));
  });
});
