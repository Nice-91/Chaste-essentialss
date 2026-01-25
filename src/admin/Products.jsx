import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get("products/");  // calls /api/products/
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await api.delete(`products/${id}/`);  // calls /api/products/{id}/
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-content">
      <h2>Products</h2>
      <Link to="/admin/products/add">➕ Add Product</Link>

      {products.map((p) => (
        <div key={p.id} className="product-row">
          <img src={p.image} alt={p.name} />
          <div>
            <h4>{p.name}</h4>
            <p>{p.price} Rwf</p>
          </div>
          <Link to={`/admin/products/edit/${p.id}`}>Edit</Link>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
