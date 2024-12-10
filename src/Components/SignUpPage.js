import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up successful!");
      // Redirect to another page or clear the form
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg w-96 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Sign Up<span className="text-blue-500"></span>
        </h1>
        <form onSubmit={handleSignUp}>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center bg-white/20 p-2 rounded-md">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-transparent w-full outline-none text-white px-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center bg-white/20 p-2 rounded-md">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-transparent w-full outline-none text-white px-2"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="flex items-center bg-white/20 p-2 rounded-md">
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="bg-transparent w-full outline-none text-white px-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
