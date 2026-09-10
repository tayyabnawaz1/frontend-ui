export default function AdminPanel() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Admin Panel</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            👤 Manage Users
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Add, edit, or remove system users and control access.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            ⚙️ Settings
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Configure application settings and preferences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2 dark:text-white">📊 Reports</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            View system analytics and performance reports.
          </p>
        </div>
      </div>
    </div>
  );
}
