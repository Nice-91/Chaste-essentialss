import React, { useEffect, useState } from "react";
import api from "../../../utils/api";  // Adjust path if needed
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Women.css";

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api.get("/api/products/", { params: { category: "women" } })
      .then((res) => {
        setWomenProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching women products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="women-page">
        <div className="loading-spinner">Loading products...</div>
      </div>
    );
  }

  const productsToShow = showAll ? womenProducts : womenProducts.slice(0, 8);

  return (
    <div className="women-page">
      <div className="page-header">
        <h2>WOMEN'S COLLECTION</h2>
        <p className="intro">
          Elegant styles for every moment. Explore fashion that celebrates your unique style and confidence.
        </p>
      </div>

      <div className="products-grid">
        {productsToShow.length > 0 ? (
          productsToShow.map((product) => (
            <div key={product.id} className="product-grid-item">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>No products available in this category yet.</p>
          </div>
        )}
      </div>

      {womenProducts.length > 8 && (
        <div className="button-container">
          <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Women;
