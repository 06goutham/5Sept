import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders landing page title', () => {
  render(<App />);
  const title = screen.getByRole('heading', { name: /Career Guidance & Counseling Platform/i });
  expect(title).toBeInTheDocument();
});
