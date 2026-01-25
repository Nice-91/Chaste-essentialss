import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Women.css";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api
      .get("products/", { params: { category: "women" } }) // ✅ FIXED
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Women fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 8);

  if (loading) {
    return <div className="women-page">Loading products...</div>;
  }

  return (
    <div className="women-page">
      <div className="page-header">
        <h2>WOMEN'S COLLECTION</h2>
        <p className="intro">
        Effortless elegance and modern styles crafted to celebrate confidence, beauty, and individuality.
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

export default Women;
