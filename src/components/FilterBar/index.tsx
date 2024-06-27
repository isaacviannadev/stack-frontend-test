import React from 'react';

import { useFilter } from '@/hooks/useFilter';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

interface FilterBarProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onFilter: (selectedCategories: string[], sortOrder: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  sortOrder,
  setSortOrder,
  onFilter,
}) => {
  const { handleCategoryChange, handleSortOrderChange } = useFilter({
    selectedCategories,
    setSelectedCategories,
    sortOrder,
    setSortOrder,
    onFilter,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mb: 2,
        mt: 4,
        mr: 2,
        p: 2,
        borderRight: { xs: 'none', md: '1px solid #e3e3e3' },
        minWidth: 240,
      }}
      aria-label='filter-bar'
    >
      <Typography variant='h6'>Filtrar Categorias</Typography>
      <FormControl component='fieldset'>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  sx={{ padding: 1 }}
                  size='small'
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  name={category}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Typography variant='h6'>Ordenar por preço</Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ padding: 1 }}
              size='small'
              checked={sortOrder === 'asc'}
              onChange={() => handleSortOrderChange('asc')}
              name='asc'
            />
          }
          label='Menor para Maior'
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ padding: 1 }}
              size='small'
              checked={sortOrder === 'desc'}
              onChange={() => handleSortOrderChange('desc')}
              name='desc'
            />
          }
          label='Maior para Menor'
        />
      </FormGroup>
    </Box>
  );
};

export default FilterBar;
