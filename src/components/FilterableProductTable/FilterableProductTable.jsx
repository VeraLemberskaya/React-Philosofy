import React from "react";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";

const FilterableProductTable = ({ items }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState(false);

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filteredItems = React.useMemo(() => {
    return items.filter((item) => {
      const suitsSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      if (suitsSearch) {
        return filterValue ? item.stocked : true;
      }
      return false;
    });
  }, [searchValue, filterValue]);

  return (
    <div className="search-product-table">
      <SearchBar
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />
      {filteredItems.length ? (
        <ProductTable items={filteredItems} />
      ) : (
        <p className="search-product-table__text">Nothing found</p>
      )}
    </div>
  );
};

export default FilterableProductTable;
