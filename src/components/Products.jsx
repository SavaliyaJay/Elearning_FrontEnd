import React from "react";
import { ApiTopPropduct } from "./../apifolder/ApiTopPropduct";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="flex flex-wrap p-5 items-center justify-center font-bold text-3xl mt-10">
        This are Best Prodact
      </div>
      <div className="flex flex-wrap p-5 items-center justify-center">
        {ApiTopPropduct.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
