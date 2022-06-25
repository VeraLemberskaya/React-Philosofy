import React from "react";
import { FilterableProductTable } from "./components";
import products from "../src/products.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <FilterableProductTable items={products} />
      </div>
    </div>
  );
}

export default App;
