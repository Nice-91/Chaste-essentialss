import axios from "axios";

const api = axios.create({
  baseURL: "https://chaste-essentials.onrender.com/api/",
  // DO NOT set default Content-Type here!
});

// Add token automatically if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;
