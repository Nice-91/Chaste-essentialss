import axios from "axios";

const api = axios.create({
  baseURL: "https://chaste-essentials.onrender.com/api/",
 
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token && config.url !== "login/") {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export default api;
