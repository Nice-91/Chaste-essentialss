import api from "../utils/api";

const DeleteProduct = ({ id, onDelete }) => {
  const handleDelete = async () => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`products/${id}/`);
      onDelete(id);
      alert("Product deleted");
    } catch (err) {
      alert("Delete failed");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProduct;
