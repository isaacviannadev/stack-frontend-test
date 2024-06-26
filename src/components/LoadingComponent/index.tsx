import React from 'react';

import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './styled';

const LoadingComponent: React.FC = () => (
  <LoadingContainer>
    <CircularProgress />
  </LoadingContainer>
);

export default LoadingComponent;
