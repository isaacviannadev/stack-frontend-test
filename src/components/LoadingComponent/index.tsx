import React from 'react';

import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './styled';

const LoadingComponent: React.FC = () => (
  <LoadingContainer aria-label='loading-component'>
    <CircularProgress />
  </LoadingContainer>
);

export default LoadingComponent;
