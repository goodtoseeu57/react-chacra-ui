import React from 'react';
import { render, screen } from '@testing-library/react';
import Item, { GithubIssue } from './item';

test('renders learn react link', () => {
  const {repo}  = {repo:  {created_at: '', number: '5', state:"45", title: 'hi'}}
  render(<Item repo={repo}/>);
  const linkElement = screen.getByText(/hi/i)
  expect(linkElement).toBeInTheDocument()
});
