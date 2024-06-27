import React from 'react';
import '@testing-library/jest-dom';

import { ResponsiveFilterBar } from '@/components/ResponsiveFilterBar';
import { fireEvent, render } from '@testing-library/react';

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');

  return {
    ...originalModule,
    useMediaQuery: jest.fn(),
  };
});

describe('ResponsiveFilterBar', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const selectedCategories = ['Category 1'];
  const setSelectedCategories = jest.fn();
  const sortOrder = 'asc';
  const setSortOrder = jest.fn();
  const onFilter = jest.fn();

  it('renders FilterDrawer when in mobile view', () => {
    const { useMediaQuery } = require('@mui/material');
    useMediaQuery.mockReturnValue(true);

    const { getByLabelText } = render(
      <ResponsiveFilterBar
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onFilter={onFilter}
      />
    );
    const drawerToggleButton = getByLabelText('drawer-toggle-button');
    fireEvent.click(drawerToggleButton);
    const filterDrawer = getByLabelText('filter-drawer');
    expect(filterDrawer).toBeInTheDocument();
  });

  it('renders FilterBar when not in mobile view', () => {
    const { useMediaQuery } = require('@mui/material');
    useMediaQuery.mockReturnValue(false);

    const { getByLabelText } = render(
      <ResponsiveFilterBar
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onFilter={onFilter}
      />
    );

    const filterBar = getByLabelText('filter-bar');
    expect(filterBar).toBeInTheDocument();
  });
});
