import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-text">Dashboard</h1>

      <button
        onClick={() => setDark(!dark)}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
