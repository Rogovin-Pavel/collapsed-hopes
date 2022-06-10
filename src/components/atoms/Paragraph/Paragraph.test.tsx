import React from 'react';
import { render, screen } from '@testing-library/react';

import { Paragraph } from './Paragraph';

test('renders paragraph\'s text', () => {
  render(<Paragraph>test</Paragraph>);
  const paragraphNode = screen.getByText(/test/i);

  expect(paragraphNode.tagName).toBe('P');
  expect(paragraphNode.innerHTML).toBe('test');
  expect(paragraphNode.className).toBe('root');
});
