import { Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-nav">
        <h2>Chaste Essentials — Admin</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminLayout;
