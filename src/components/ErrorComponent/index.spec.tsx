import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { ErrorComponent } from './index';

describe('ErrorComponent', () => {
  it('should render the error message', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(<ErrorComponent message={errorMessage} />);
    const errorText = getByText(errorMessage);
    expect(errorText).toBeInTheDocument();
  });
});