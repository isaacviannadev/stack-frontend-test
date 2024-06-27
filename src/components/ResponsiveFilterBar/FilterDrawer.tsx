import FilterBar from '@/components/FilterBar';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { X } from 'lucide-react';
import React from 'react';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onFilter: (selectedCategories: string[], sortOrder: string) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  onClose,
  categories,
  selectedCategories,
  setSelectedCategories,
  sortOrder,
  setSortOrder,
  onFilter,
}) => {
  return (
    <Drawer
      anchor='top'
      open={open}
      onClose={onClose}
      aria-label='filter-drawer'
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Typography variant='h6'>Filtros</Typography>
        <IconButton onClick={onClose} aria-label='close filter drawer'>
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
          onClose();
        }}
      />
    </Drawer>
  );
};

export default FilterDrawer;
