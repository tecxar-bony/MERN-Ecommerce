import React from "react";
import ProductDetails from "../features/Products/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </div>
  );
};

export default ProductDetailsPage;
