import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
  it('renders search input and button', () => {
    render(<SearchBar onSearch={() => {}} />);

    const searchInput = screen.getByLabelText('Buscar Produtos');
    const searchButton = screen.getByRole('button', { name: /search/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('calls onSearch callback when search button is clicked', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const searchButton = screen.getByRole('button', { name: /search/i });

    fireEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalled();
  });

  it('calls onSearch callback when Enter key is pressed', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = screen.getByLabelText('Buscar Produtos');

    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(onSearchMock).toHaveBeenCalled();
  });
});
