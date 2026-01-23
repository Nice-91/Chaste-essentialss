import "./Accessories.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import api from "../../../utils/api";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/products/", { params: { category: "accessories" } })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching accessories:", err))
      .finally(() => setLoading(false));
  }, []);

  // Show first 8 products or all depending on showAll state
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="category-page">
      <h1 className="category-title">Accessories</h1>
      <p className="category-intro">
        Discover our exclusive collection of accessories designed to complete your look.
      </p>

      {loading ? (
        <p className="loading-spinner">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="no-products">No accessories available at the moment.</p>
      ) : (
        <>
          <div className="products-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id || product._id} 
                product={product}
                className="product-grid-item"
              />
            ))}
          </div>

          {products.length > 8 && (
            <div className="show-all-wrapper">
              <button
                className="show-all-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show All Products"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Accessories;
