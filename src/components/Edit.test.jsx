import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edit from './Edit';

describe('Edit Component renders correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <Edit />
      </Router>
    );
  });

  test('The text "Edit Post" appears', async () => {
    await waitFor(() => {
      expect(screen.queryAllByText(`Edit Post`));
    });
  });
});
