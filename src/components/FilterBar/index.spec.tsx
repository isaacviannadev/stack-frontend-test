import { fireEvent, render, screen } from '@testing-library/react';
import { FilterBar } from './index';
import React from 'react';

describe('FilterBar', () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const selectedCategories = ['Category 1'];
  const setSelectedCategories = jest.fn();
  const sortOrder = 'asc';
  const setSortOrder = jest.fn();
  const onFilter = jest.fn();

  beforeEach(() => {
    render(
      <FilterBar
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onFilter={onFilter}
      />,
    );
  });

  it('renders the category checkboxes', () => {
    const categoryCheckboxes = screen.getAllByRole('checkbox', {
      name: /Category \d/,
    });
    expect(categoryCheckboxes).toHaveLength(categories.length);
  });

  it('renders the sort order checkboxes', () => {
    const sortOrderCheckboxes = screen.getAllByRole('checkbox', {
      name: /Menor para Maior|Maior para Menor/,
    });
    expect(sortOrderCheckboxes).toHaveLength(2);
  });

  it('calls handleSortOrderChange when a sort order checkbox is clicked', () => {
    const sortOrderCheckbox = screen.getByRole('checkbox', {
      name: 'Maior para Menor',
    });
    fireEvent.click(sortOrderCheckbox);
    expect(setSortOrder).toHaveBeenCalledWith('desc');
  });
});
