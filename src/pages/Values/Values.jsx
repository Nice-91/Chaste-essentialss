import React from "react";
import "./Values.css";

const CoreValues = () => {
  return (
    <section className="core-values" id="values">
      <h2 className="section-title">Our Core Values</h2>

      <div className="values-grid">
        <div className="value-card">
          <span className="icon">🏆</span>
          <h3>Curated Excellence</h3>
          <p>
            Every product in our collection is handpicked for its exceptional
            quality, style, and ability to enhance your lifestyle. We believe in
            offering fewer, better things that truly matter.
          </p>
        </div>

        <div className="value-card">
          <span className="icon">🎨</span>
          <h3>Authentic Expression</h3>
          <p>
            Whether it's a bold lipstick shade, a statement bag, or a classic
            du-rag, we celebrate individuality. Our diverse product range
            empowers you to express your unique style with confidence.
          </p>
        </div>

        <div className="value-card">
          <span className="icon">💎</span>
          <h3>Inclusive Luxury</h3>
          <p>
            Premium doesn’t mean exclusive. From beauty essentials to fashion
            accessories, we make luxury accessible to everyone who values
            quality and style.
          </p>
        </div>

        <div className="value-card">
          <span className="icon">💡</span>
          <h3>Lifestyle Innovation</h3>
          <p>
            We stay ahead of trends while honoring timeless style. From classic
            footwear to modern fragrances, we bring you what’s next in everyday
            essentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
