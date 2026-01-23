import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    recentProducts: []
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const productsRes = await api.get("products/");
      const products = productsRes.data;
      
      setStats({
        totalProducts: products.length,
        recentProducts: products.slice(0, 6)
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <p>Welcome to Chaste Essentials Admin Panel</p>
        </div>
        <div className="header-icon">
         
        </div>
      </div>

      <div className="stats-overview">
        <div className="stat-card-large">
          <div className="stat-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          </div>
          <div className="stat-info-large">
            <h3>Total Products in Store</h3>
            <p className="stat-number-large">{stats.totalProducts}</p>
            <Link to="/admin/products" className="view-all-link">View All Products →</Link>
          </div>
        </div>
      </div>

      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/admin/products/add" className="action-card">
            <div className="action-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <h3>Add New Product</h3>
            <p>Create a new product listing</p>
          </Link>

          <Link to="/admin/products" className="action-card">
            <div className="action-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </div>
            <h3>Manage Products</h3>
            <p>Edit or delete existing products</p>
          </Link>
        </div>
      </div>

      <div className="recent-products-section">
        <div className="section-header">
          <h2>Recent Products</h2>
          <Link to="/admin/products" className="see-all-link">See All</Link>
        </div>
        
        {stats.recentProducts.length > 0 ? (
          <div className="products-grid">
            {stats.recentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-price">{product.price} Rwf</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            <h3>No Products Yet</h3>
            <p>Start by adding your first product to the store</p>
            <Link to="/admin/products/add" className="empty-action-btn">Add Product</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;