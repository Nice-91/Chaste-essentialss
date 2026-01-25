import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Beauty.css";

const Beauty = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api
      .get("products/", { params: { category: "beauty" } }) // ✅ FIXED
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Beauty fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 8);

  if (loading) {
    return <div className="beauty-page">Loading products...</div>;
  }

  return (
    <div className="beauty-page">
      <div className="page-header">
        <h2>BEAUTY ESSENTIALS</h2>
        <p className="intro">
        Thoughtfully selected beauty essentials that enhance your natural glow and elevate your daily routine.
        </p>
      </div>

      <div className="products-grid">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products">No products available in this category yet.</p>
        )}
      </div>

      {products.length > 8 && (
        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All Products"}
        </button>
      )}
    </div>
  );
};

export default Beauty;
