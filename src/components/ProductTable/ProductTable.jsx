import React from "react";

import ProductRow from "../ProductRow";
import CategoryRow from "../CategoryRow";

const ProductTable = ({ items }) => {
  const rows = [];
  let lastCategory = null;

  items.forEach((item) => {
    if (item.category != lastCategory) {
      rows.push(
        <CategoryRow key={item.category} categoryName={item.category} />
      );
    }
    rows.push(<ProductRow key={item.name} {...item} />);
    lastCategory = item.category;
  });

  return (
    <div className="table">
      <div className="table__row table__row_disabled">
        <p>Name</p>
        <p>Price</p>
      </div>
      <ul>{rows}</ul>
    </div>
  );
};

export default ProductTable;
