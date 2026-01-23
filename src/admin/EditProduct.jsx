import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    api.get(`products/${id}/`).then((res) => {
      setForm({
        name: res.data.name,
        price: res.data.price,
        category: res.data.category,
        image: null,
      });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("category", form.category);

    if (form.image) {
      data.append("image", form.image);
    }

    await api.patch(`products/${id}/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    navigate("/admin/products");
  };

  return (
    <form onSubmit={submit} className="admin-content">
      <h2>Edit Product</h2>

      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />

      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="beauty">Beauty</option>
        <option value="accessories">Accessories</option>
      </select>

      <input
        type="file"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default EditProduct;
