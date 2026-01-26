import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const categories = [
  {
    id: "men",
    name: "Men",
    description: "Shoes, Jeans, trousers & many more",
    img: "/images/men.jpeg",
    itemCount: "120+ Items",
  },
  {
    id: "women",
    name: "Women",
    description: "Shoes, Jackets & coats, Handbags & more",
    img: "/images/women.jpeg",
    itemCount: "200+ Items",
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Makeup, Skincare, Perfumes & more",
    img: "/images/beauty.jpeg",
    itemCount: "150+ Items",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Watches, Phone cases, Sunglasses & more",
    img: "/images/accessories.jpeg",
    itemCount: "90+ Items",
  },
];

const Shop = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="shop-category-page">
      <section className="category-hero">
        <div className="hero-glow"></div>
        <div className="hero-text">
          <h1 className="hero-title">
            Shop by <span className="gold-text">Category</span>
          </h1>
          <p className="hero-description">
            Explore our premium collections for men, women, beauty, and accessories.
          </p>
        </div>
      </section>

      <section className="categories-showcase">
        <div className="showcase-grid">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop/${category.id}`}
              className={`showcase-card ${hoveredCard === index ? "active" : ""}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-image-container">
                <img src={category.img} alt={category.name} />
                <div className="card-gradient"></div>
              </div>

              <div className="card-content">
                <h2>{category.name}</h2>
                <p>{category.description}</p>

                <span className="explore-btn">
                  Explore All Products →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
