import "./ProductCard.css";

const ProductCard = ({ product }) => {
  console.log("PRODUCT IMAGE:", product.image);

  return (
    <div className="card">
     <img
  src={product.image ? product.image : "/placeholder.png"}
  alt={product.name}
  className="image"
/>


      <h3>{product.name}</h3>
      <p className="price">RWF {product.price}</p>

      {product.description && (
        <p className="description">{product.description}</p>
      )}

      <a
        href={`https://wa.me/250787444606?text=${encodeURIComponent(`Hello, Hi, I want to order ${product.name} from chaste essentials`)}`}

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
