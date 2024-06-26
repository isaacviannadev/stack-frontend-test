import { useStore } from '@/store/cartStore';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { SearchContainer } from './styled';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { toggleDrawer } = useStore();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchContainer>
      <TextField
        label='Search Products'
        variant='outlined'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant='contained' onClick={handleSearch}>
        Search
      </Button>
      <Button variant='contained' onClick={toggleDrawer}>
        Open Cart
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;
