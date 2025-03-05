import { render } from '@testing-library/react';

import Comps from './comps';

describe('Comps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Comps />);
    expect(baseElement).toBeTruthy();
  });
});
