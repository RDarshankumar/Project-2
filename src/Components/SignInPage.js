import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase"; // Adjust the path as per your file structure

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setError(""); // Clear any previous errors

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      alert("Login successful!"); // Add your own success logic here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg w-96 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Sign In<span className="text-blue-500"></span>
        </h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display error */}
        <form onSubmit={handleLogin}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.94 4.93A10.05 10.05 0 0110 3a10.05 10.05 0 017.06 1.93L10 11.06 2.94 4.93z" />
              </svg>
            </div>
          </div>
          <div className="mb-6">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 4a6 6 0 00-6 6v3a2 2 0 002 2h8a2 2 0 002-2v-3a6 6 0 00-6-6zm0 2a4 4 0 014 4v3H6v-3a4 4 0 014-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
