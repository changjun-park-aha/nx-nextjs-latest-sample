import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      await Page({
        searchParams: Promise.resolve({
          id: '1',
        }),
      })
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.innerHTML).toContain('1');
  });
});
