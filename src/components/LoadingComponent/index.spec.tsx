import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import LoadingComponent from './index';

describe('LoadingComponent', () => {
  it('should render the loading component', () => {
    const { getByLabelText } = render(<LoadingComponent />);
    const loadingComponent = getByLabelText('loading-component');
    expect(loadingComponent).toBeInTheDocument();
  });
});