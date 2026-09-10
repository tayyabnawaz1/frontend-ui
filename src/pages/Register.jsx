import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Please fill all fields ❗");
      return;
    }

    // simulate success
    setError("");
    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-96">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-text">
          Create Account
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Name */}
        <input
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          type="email"
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>

        {/* Link to Login */}
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
