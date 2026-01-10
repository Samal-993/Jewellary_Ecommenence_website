import React, { useState } from "react";
import API from "../api/axios";

const CreateAccountModal = ({ open, onClose, onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  const handleRegister = async () => {
    try {
      await API.post("/users/register", {
        name,
        email,
        password,
      });

      alert("Account created successfully");
      onClose();
      onLogin(); // go to login
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div className="fixed top-0 right-0 h-full w-[380px] bg-white z-50 p-6">
        <h2 className="text-xs mb-6">CREATE ACCOUNT</h2>

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
          className="w-full bg-[#d7a99a] py-3 text-sm"
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
