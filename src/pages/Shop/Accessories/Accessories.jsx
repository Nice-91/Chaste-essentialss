import "./Accessories.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import api from "../../../utils/api";

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("products/", { params: { category: "accessories" } }) 
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Accessories fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="category-page">
      <h1 className="category-title">Accessories</h1>
      <p className="category-intro">
      Timeless finishing touches designed to complement your style and complete every look with intention.
      </p>

      {loading ? (
        <p className="loading-spinner">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="no-products">No accessories available yet.</p>
      ) : (
        <>
          <div className="products-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length > 8 && (
            <button
              className="show-all-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show All Products"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Accessories;
