import { useStore } from '@/store/cartStore';
import { Badge, IconButton, TextField } from '@mui/material';
import { Search, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { SearchArea, SearchContainer } from './styled';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { totalItems, toggleDrawer } = useStore();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <SearchArea>
        <TextField
          label='Buscar Produtos'
          variant='outlined'
          size='small'
          sx={{ width: '50%' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton color='primary' onClick={handleSearch}>
          <Search size={24} />
        </IconButton>
      </SearchArea>

      <Badge badgeContent={totalItems} color='secondary'>
        <IconButton color='primary' onClick={toggleDrawer}>
          <ShoppingCart size={24} />
        </IconButton>
      </Badge>
    </SearchContainer>
  );
};

export default SearchBar;
