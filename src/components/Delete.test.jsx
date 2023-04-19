import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Delete from './Delete';

describe('Delete Component renders correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <Delete />
      </Router>
    );
  });

  test('The text "Delete Post" appears', async () => {
    await waitFor(() => {
      expect(screen.queryAllByText(`Delete Post`)).toBeTruthy();
    });
  });
});
