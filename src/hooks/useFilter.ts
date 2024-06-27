interface UseFilterProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onFilter: (selectedCategories: string[], sortOrder: string) => void;
}

export const useFilter = ({
  selectedCategories,
  setSelectedCategories,
  sortOrder,
  setSortOrder,
  onFilter,
}: UseFilterProps) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
  };

  const handleFilter = () => {
    onFilter(selectedCategories, sortOrder);
  };

  return {
    selectedCategories,
    sortOrder,
    handleCategoryChange,
    handleSortOrderChange,
    handleFilter,
  };
};

export default useFilter;
