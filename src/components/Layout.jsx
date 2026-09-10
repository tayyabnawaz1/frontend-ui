import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-secondary text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-4">
          <li className="hover:text-accent cursor-pointer">Dashboard</li>
          <li className="hover:text-accent cursor-pointer">Users</li>
          <li className="hover:text-accent cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-background min-h-screen">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}