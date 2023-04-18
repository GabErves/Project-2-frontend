import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Edit from './Edit';
import axios from 'axios';

describe('Edit renders properly', () => {
  beforeEach(() => {
    render(<Edit />);
  });

  test('Header of Edit Page is rendered', () => {
    
  });

  test('Header of Edit Post page is rendered', () => {
    
  });
});
