import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Content } from '../../../src/components/contents/Content';

describe('Content', () => {
    test('renders Home at /home', () => {
      render(
        <MemoryRouter initialEntries={['/home']}>
          <Content />
        </MemoryRouter>
      );
      expect(screen.getByText('START')).toBeInTheDocument();
    });
  });