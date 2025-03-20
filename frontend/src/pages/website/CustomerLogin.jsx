import React, { useState } from "react";
import Header from "./../../components/website/Header";
import axios from "axios"; // ❌ Removed { } ✅ Correct import
import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleCustomerLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4002/read/customer", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.error) {
          alert("incorrect email and password");
        } else {
          alert("success login");
          Navigate("/");
          localStorage.setItem("customer", JSON.stringify(res.data));
        }
      });
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Login
          </h2>
          <form className="mt-6">
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              onClick={handleCustomerLogin}
              className="w-full bg-blue-500 text-white font-semibold p-3 mt-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default CustomerLogin;
