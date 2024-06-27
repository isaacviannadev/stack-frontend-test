import FilterBar from '@/components/FilterBar';
import React, { useState } from 'react';

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Filter, X } from 'lucide-react';

interface ResponsiveFilterBarProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onFilter: (selectedCategories: string[], sortOrder: string) => void;
}

const ResponsiveFilterBar: React.FC<ResponsiveFilterBarProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  sortOrder,
  setSortOrder,
  onFilter,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Button
            variant='contained'
            size='large'
            color='primary'
            onClick={toggleDrawer}
            aria-label='open filter drawer'
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
          <Drawer anchor='top' open={isDrawerOpen} onClose={toggleDrawer}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant='h6' sx={{ ml: 2, mt: 2 }}>
                Filtros
              </Typography>
              <IconButton
                onClick={toggleDrawer}
                aria-label='close filter drawer'
              >
                <X size={24} />
              </IconButton>
            </Box>
            <FilterBar
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              onFilter={(selectedCategories, sortOrder) => {
                onFilter(selectedCategories, sortOrder);
                toggleDrawer();
              }}
            />
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <FilterBar
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onFilter={onFilter}
          />
        </Box>
      )}
    </>
  );
};

export default ResponsiveFilterBar;
