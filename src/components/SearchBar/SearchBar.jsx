import React from "react";

import { ReactComponent as SearchSvg } from "../../assets/icons/SearchVector.svg";

const SearchBar = ({ onSearchChange, onFilterChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.checked);
  };

  return (
    <div className="search-bar">
      <div className="search-input search-bar__search-input">
        <SearchSvg className="search-input__icon" />
        <div className="search-input__input">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="checkbox search-bar__checkbox">
        <input
          className="checkbox__input"
          id="stocked-only"
          type="checkbox"
          onChange={handleFilterChange}
        />
        <label className="checkbox__label" htmlFor="stocked-only">
          Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
