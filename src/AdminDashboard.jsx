import AdminLayout from './AdminLayout';

function AdminDashboard() {
  return (
    <AdminLayout activePage="Dashboard" pageTitle="Dashboard">
      <div className="admin-cards">
        <div className="admin-card">
          <p className="admin-card-label">Current Stock</p>
          <p className="admin-card-value">[INSERT STOCK]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Pending Orders</p>
          <p className="admin-card-value">[INSERT ORDERS]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Monthly Sales</p>
          <p className="admin-card-value">[INSERT SALES]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Monthly Expenses</p>
          <p className="admin-card-value">[INSERT EXPENSES]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Monthly Profit</p>
          <p className="admin-card-value">[INSERT PROFIT]</p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
