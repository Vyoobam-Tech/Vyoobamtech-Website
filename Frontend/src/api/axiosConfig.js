import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API || "http://localhost:5000",
  timeout: 10000,
});

// attach admin key automatically
instance.interceptors.request.use((config) => {
  const key = localStorage.getItem("adminKey");
  if (key) config.headers["x-admin-key"] = key;
  return config;
});

export default instance;
