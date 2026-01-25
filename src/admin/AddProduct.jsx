import React, { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "men",
    image: null,
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle file selection & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Form submit handler
  const submit = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Image is required");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("price", Number(form.price));
      data.append("category", form.category);
      data.append("image", form.image);
      data.append("description", form.description || "");

      // Send form data without overriding headers (let axios set multipart/form-data)
      await api.post("products/", data);

      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error("ERROR DATA:", err.response?.data);
      alert(`Add failed: ${JSON.stringify(err.response?.data)}`);
    }
  };

  const isSubmitDisabled = !form.name || !form.price || !form.image;

  return (
    <div className="add-product-container">
      <div className="add-product-card">
        <div className="add-product-header">
          <div className="add-product-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <h2>Add New Product</h2>
          <p>Fill in the details below to add a product to your catalog</p>
        </div>

        <form onSubmit={submit} className="admin-content">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <div className="price-input-wrapper">
              <input
                type="number"
                placeholder="0.00"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <div className="select-wrapper">
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
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Enter product description (optional)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Product Image</label>
            {imagePreview ? (
              <div className="image-preview-wrapper">
                <img src={imagePreview} alt="Preview" />
                <button
                  type="button"
                  className="image-preview-change"
                  onClick={() => {
                    setImagePreview(null);
                    setForm((prev) => ({ ...prev, image: null }));
                  }}
                >
                  Change
                </button>
              </div>
            ) : (
              <label className="file-upload-area">
                <svg
                  className="file-upload-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="file-upload-text">Click to upload image</span>
                <span className="file-upload-subtext">PNG, JPG or GIF (MAX. 5MB)</span>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </label>
            )}
          </div>

          <button type="submit" disabled={isSubmitDisabled}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
