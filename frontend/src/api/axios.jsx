import axios from "axios";

const API = axios.create({
  baseURL: "https://backendlink-mpzx.onrender.com/api", // 🔥 RENDER BACKEND
  withCredentials: true, // 🔥 ADD THIS
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
