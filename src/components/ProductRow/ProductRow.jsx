import React from "react";
import classNames from "classnames";

const ProductRow = ({ name, price, stocked }) => {
  const classes = classNames("table__row-item", {
    "table__row-item_stocked": !stocked,
  });

  return (
    <div className="table__row">
      <p className={classes}>{name}</p>
      <p className="table__row-item">{price}</p>
    </div>
  );
};

export default ProductRow;
