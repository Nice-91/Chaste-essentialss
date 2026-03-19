import axios from "axios";

const api = axios.create({
  baseURL: "https://chaste-essentials.onrender.com/api/",
 
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  // ✅ Only attach token for non-GET requests
  if (token && config.method !== "get") {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default api;
