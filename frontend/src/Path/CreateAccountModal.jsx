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
      await API.post("/users/register", {
        name,
        email,
        password,
      });

      toast.success("Account created successfully");
      onClose();
      onLogin(); // switch to login modal
    } catch (err) {
      toast.error(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div className="fixed top-0 right-0 h-full w-[380px] bg-white z-50 p-6">
        <div className="flex justify-between mb-6">
          <p className="text-xs tracking-widest">CREATE ACCOUNT</p>
          <button onClick={onClose}>✕</button>
        </div>

        <input
          placeholder="Name"
          className="w-full border px-3 py-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full border px-3 py-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-[#d7a99a] text-white py-3 text-sm"
        >
          CREATE ACCOUNT
        </button>

        <p className="text-center text-xs mt-4 cursor-pointer">
          Already have an account?{" "}
          <span className="underline" onClick={onLogin}>
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default CreateAccountModal;
