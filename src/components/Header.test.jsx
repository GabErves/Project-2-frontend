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
    expect(screen.queryByText(`Home`)).toBeTruthy();
  });

  test('The section "Create" appears', async () => {
    expect(screen.queryByText(`Create`)).toBeTruthy();
  });

  test('The section "About" appears', async () => {
    expect(screen.queryByText(`About`)).toBeTruthy();
  });
});
