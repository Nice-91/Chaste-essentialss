import "./styles/admin.css";

const AdminNavbar = () => {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      height: "70px",
      background: "#0f0f0f",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 30px",
      zIndex: 1000
    }}>
      <h3 style={{ color: "#c9a24d", fontFamily: "Montserrat" }}>
        Admin Panel
      </h3>

      <button className="admin-btn logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;
