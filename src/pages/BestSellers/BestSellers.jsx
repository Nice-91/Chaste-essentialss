import React, { useState } from "react";
import "./BestSellers.css";

const bestSellers = [
  {
    id: 1,
    name: "Luxury Perfume",
    price: "4500 frw",
    image: "/src/assets/perfume.jpeg",
    tag: "Trending"
  },
  {
    id: 2,
    name: "Silk Durag",
    price: "5000 frw",
    image: "/src/assets/durag.jpeg",
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Elegant Handbag",
    price: "20000 frw",
    image: "/src/assets/bag.jpeg",
    tag: "Popular"
  },
  {
    id: 4,
    name: "Matte Lipstick",
    price: "6000 frw",
    image: "/src/assets/lipstick.jpeg",
    tag: "Hot Item"
  },
];

const BestSellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="best-sellers-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-content">
            {/* <span className="section-label">Customer Favorites</span> */}
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">
              Customer favorites products that keep flying off the shelves
            </p>
          </div>
          {/* <a href="#all-products" className="view-all-link">
            View All
            <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> */}
        </div>

        {/* Products Grid */}
        <div className="products-showcase">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className={`product-item ${hoveredProduct === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
                <div className="image-overlay"></div>
                <span className="product-tag">{product.tag}</span>
                
                {/* <button className="quick-view-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Quick View
                </button> */}
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  {/* <button className="add-cart-btn">
                    <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button> */}
                </div>
              </div>

              <div className="product-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;