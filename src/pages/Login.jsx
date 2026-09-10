import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // validation
    if (!email || !password) {
      setError("Please fill all fields ❗");
      return;
    }

    // simple login
    login(email, password);

    // clear error
    setError("");

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-96">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-text">
          Welcome Back
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {/* Links */}
        <p className="mt-3 text-sm text-right">
          <Link to="/forgot" className="text-primary hover:underline">
            Forgot Password?
          </Link>
        </p>

        <p className="mt-3 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
