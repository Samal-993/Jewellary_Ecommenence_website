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
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      onClose();
      toast.success("Login successful!");
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-[380px] bg-white z-50 p-6">
        <div className="flex justify-between mb-6">
          <p className="text-xs tracking-widest">CUSTOMER LOGIN</p>
          <button onClick={onClose}>✕</button>
        </div>
        <input
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#d7a99a] text-white py-3 text-sm mb-4"
        >
          LOGIN
        </button>
        <button
          onClick={onCreateAccount}
          className="w-full bg-[#d7a99a] text-white py-3 text-sm"
        >
          CREATE AN ACCOUNT
        </button>
      </div>
    </>
  );
};

export default LoginModal;