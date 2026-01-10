import axios from "axios";

const API = axios.create({
  baseURL: "https://jewellary-ecommenence-website.vercel.app/api",
  withCredentials: true, // future-safe
});

export default API;
