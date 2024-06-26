import React from 'react';

import { Typography } from '@mui/material';
import { ErrorContainer } from './styled';

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <ErrorContainer>
    <Typography color='error'>{message}</Typography>
  </ErrorContainer>
);

export default ErrorComponent;
