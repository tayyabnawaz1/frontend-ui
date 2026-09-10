import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6 text-text">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-text">Users</h3>
          <p className="text-sm text-gray-500 mt-2">Manage system users</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-text">Reports</h3>
          <p className="text-sm text-gray-500 mt-2">View analytics reports</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold text-text">Settings</h3>
          <p className="text-sm text-gray-500 mt-2">Configure application</p>
        </div>
      </div>
    </Layout>
  );
}
