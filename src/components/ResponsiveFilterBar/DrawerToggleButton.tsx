import { Button } from '@mui/material';
import { Filter } from 'lucide-react';
import React from 'react';

type DrawerToggleButtonProps = Pick<
  React.ComponentProps<typeof Button>,
  'onClick'
>;

export const DrawerToggleButton: React.FC<DrawerToggleButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      variant='contained'
      size='large'
      color='primary'
      onClick={onClick}
      aria-label='drawer-toggle-button'
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        borderRadius: '50%',
        width: 60,
        height: 60,
        padding: 0,
      }}
    >
      <Filter size={24} />
    </Button>
  );
};

export default DrawerToggleButton;
