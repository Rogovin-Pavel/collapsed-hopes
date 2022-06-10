import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

test('renders label\'s text', () => {
  render(<Label>test</Label>);
  const labelNode = screen.getByText(/test/i);

  expect(labelNode.innerHTML).toBe('test');
});
