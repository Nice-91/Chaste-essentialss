import React, { useEffect, useState } from "react";
import api from "../../../utils/api"; // Adjust path if needed
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Beauty.css";

const Beauty = () => {
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api.get("/api/products/", { params: { category: "beauty" } })
      .then((res) => {
        setBeautyProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching beauty products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="beauty-page">
        <div className="loading-spinner">Loading products...</div>
      </div>
    );
  }

  const productsToShow = showAll ? beautyProducts : beautyProducts.slice(0, 8);

  return (
    <div className="beauty-page">
      <div className="page-header">
        <h2>BEAUTY ESSENTIALS</h2>
        <p className="intro">
          Elevate your glow with premium beauty essentials. Carefully selected products to help you feel confident and radiant every day.
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

      {beautyProducts.length > 8 && (
        <div className="button-container">
          <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Beauty;
