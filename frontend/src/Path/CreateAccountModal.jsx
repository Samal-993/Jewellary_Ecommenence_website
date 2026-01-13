import React, { useState } from "react";
import API from "../api/axios";
import { toast } from "react-toastify";

const CreateAccountModal = ({ open, onClose, onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleRegister = async () => {
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await API.post("/users/register", {
        name,
        email,
        password,
      });

      console.log("RESPONSE:", res.data); // ✅ Now res is defined
      toast.success("Account created successfully");
      onClose();
      onLogin(); // switch to login modal
    } catch (err) {
      console.log("ERROR:", err.response?.data); // ✅ Log error data
      toast.error(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">CREATE ACCOUNT</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            onClick={handleRegister}
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
          >
            CREATE ACCOUNT
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <span
              onClick={onLogin}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateAccountModal;