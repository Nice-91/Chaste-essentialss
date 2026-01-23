import React, { useEffect, useState } from "react";
import api from "../../../utils/api";  // Adjust this path if needed
import ProductCard from "../../../Components/ProductCard/ProductCard";
import "./Men.css";

const Men = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    api.get("/api/products/", { params: { category: "men" } })
      .then((res) => {
        setMenProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching men products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="men-page">
        <div className="loading-spinner">Loading products...</div>
      </div>
    );
  }

  const productsToShow = showAll ? menProducts : menProducts.slice(0, 8);

  return (
    <div className="men-page">
      <div className="page-header">
        <h2>MEN'S COLLECTION</h2>
        <p className="intro">
          Sharp tailoring and versatile essentials for the modern man. Discover pieces that help you look and feel your best.
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

      {menProducts.length > 8 && (
        <div className="button-container">
          <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All Products"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Men;
