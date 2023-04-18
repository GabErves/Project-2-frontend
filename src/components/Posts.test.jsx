import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Posts from './Posts';

describe('Posts Component renders correctly', () => {
  beforeEach(() => {
    render(<Posts />);
  });

  test('The text "All Posts" appears when loading is false', async () => {
    await waitFor(() => {
      expect(screen.queryAllByText(`All Posts`));
    });
  });
});

//Components that rely on ids (Post and Delete) are being wonky :(

/**
 * The Button.test.jsx isn't that helpful because Button is a very simple component that also passes props.
 * Since each of our components already make api requests, they don't really need data or supplemental functions as props.
 * Button.test.jsx also only renders a single piece of html, while our components can return multiple pieces of html depending on what is pressed.
 * Most of my errors came from the specific text I was looking for not being found (even with await to wait until loading was false).
 * When I try to filter by tag name and content, the entire criteria is returned as the target string, despite not being highlighted orange.
 *
 */
