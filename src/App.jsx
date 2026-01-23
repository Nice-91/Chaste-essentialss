import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./pages/MainPage";

/* Shop category pages */
import Men from "./pages/Shop/Men/Men";
import Women from "./pages/Shop/Women/Women";
import Beauty from "./pages/Shop/Beauty/Beauty";
import Accessories from "./pages/Shop/Accessories/Accessories";

/* Admin */
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

/* Protection */
import AdminRoute from "./utils/AdminRoute";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* Main homepage */}
        <Route path="/" element={<MainPage />} />

        {/* Shop category pages */}
        <Route path="/shop/men" element={<Men />} />
        <Route path="/shop/women" element={<Women />} />
        <Route path="/shop/beauty" element={<Beauty />} />
        <Route path="/shop/accessories" element={<Accessories />} />

        {/* Redirect /shop, /values, /contact to homepage with hash scroll */}
        <Route path="/shop" element={<Navigate to="/#shop" replace />} />
        <Route path="/values" element={<Navigate to="/#values" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
