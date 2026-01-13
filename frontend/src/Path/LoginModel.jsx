import React, { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginModal = ({ open, onClose, onCreateAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    try {
      const res = await API.post("/users/login", { email, password });
      console.log("RESPONSE:", res.data); // ✅ Correct placement
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      toast.success("Login successful!");
      onClose();
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      console.log("ERROR:", err.response?.data); // ✅ Log error data instead
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">CUSTOMER LOGIN</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 mb-4"
          >
            LOGIN
          </button>

          <button
            onClick={onCreateAccount}
            className="w-full border border-black text-black py-3 rounded hover:bg-gray-100"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;