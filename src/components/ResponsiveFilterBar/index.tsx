import FilterBar from '@/components/FilterBar';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import FilterDrawer from './FilterDrawer';

interface ResponsiveFilterBarProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onFilter: (selectedCategories: string[], sortOrder: string) => void;
}

export const ResponsiveFilterBar: React.FC<ResponsiveFilterBarProps> = ({
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
          <DrawerToggleButton onClick={toggleDrawer} />
          <FilterDrawer
            open={isDrawerOpen}
            onClose={toggleDrawer}
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            onFilter={onFilter}
          />
        </>
      ) : (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
