import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts';

describe('Posts Component renders correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <Posts />
      </Router>
    );
  });

  test('The loading text "Loading" appears', async () => {
    expect(screen.getByText(`Loading...`)).toBeTruthy();
  });

  test('The text "All Posts" appears after loading', async () => {
    await waitFor(() => {
      expect(screen.getByText(`All Posts`)).toBeTruthy();
    });
  });
});
