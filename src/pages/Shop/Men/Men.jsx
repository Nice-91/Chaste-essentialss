import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Men.css";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api
      .get("products/", { params: { category: "men" } }) // ✅ FIXED
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Men fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="men-page">Loading products...</div>;
  }

  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="men-page">
      <div className="page-header">
        <h2>MEN'S COLLECTION</h2>
        <p className="intro">
        Sharp tailoring and versatile essentials designed for confidence, comfort, and everyday refinement.
        </p>
      </div>

      <div className="products-grid">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available in this category yet.</p>
        )}
      </div>

      {products.length > 8 && (
  <button
    className="toggle-btn"
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? "Show Less" : "Show All Products"}
  </button>
)}

    </div>
  );
};

export default Men;
