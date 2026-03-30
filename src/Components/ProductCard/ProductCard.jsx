import "./ProductCard.css";

const BASE_URL = "https://chaste-essentials.onrender.com";

const ProductCard = ({ product }) => {
  // ✅ Fix image URL (relative → absolute)
  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${BASE_URL}${product.image}`
    : "/placeholder.png";

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={product.name}
        className="image"
        onError={(e) => {
          e.target.src = "/placeholder.png";
        }}
      />

      <h3>{product.name}</h3>
      <p className="price">{product.price} RWF</p>

      {product.description && (
        <p className="description">{product.description}</p>
      )}

      <a
        href={`https://wa.me/2507887444606?text=${encodeURIComponent(
          `Hello, I want to order ${product.name} from Chaste Essentials`
        )}`}
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
