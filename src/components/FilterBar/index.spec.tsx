import { fireEvent, render, screen } from '@testing-library/react';
import FilterBar from './index';

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

  it.skip('calls handleCategoryChange when a category checkbox is clicked', () => {
    const categoryCheckbox = screen.getByRole('checkbox', {
      name: 'Category 2',
    });
    fireEvent.click(categoryCheckbox);
    expect(setSelectedCategories).toHaveBeenCalledWith([
      'Category 1',
      'Category 2',
    ]);
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

  it.skip('calls onFilter when a category or sort order checkbox is clicked', () => {
    const categoryCheckbox = screen.getByRole('checkbox', {
      name: 'Category 3',
    });
    fireEvent.click(categoryCheckbox);
    expect(onFilter).toHaveBeenCalledWith(['Category 1', 'Category 3'], 'asc');

    const sortOrderCheckbox = screen.getByRole('checkbox', {
      name: 'Menor para Maior',
    });
    fireEvent.click(sortOrderCheckbox);
    expect(onFilter).toHaveBeenCalledWith(['Category 1', 'Category 3'], 'asc');
  });
});
