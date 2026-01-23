import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="image"
      />

      <h3>{product.name}</h3>

      <p className="price">RWF {product.price}</p>

      {product.description && (
        <p className="description">{product.description}</p>
      )}

      <a
        href={`https://wa.me/250787444606?text=Hello, I'm interested in ${product.name}`}
        className="whatsappButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order on WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
