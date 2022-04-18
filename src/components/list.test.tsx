import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './list';
import { renderWithClient } from "./utils";

test('renders learn react link', () => {
  renderWithClient(<List />);
  const linkElement = screen.getAllByText(/isLoading/i);
  expect(linkElement).toBeTruthy();
});

