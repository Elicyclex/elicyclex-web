import AdminLayout from './AdminLayout';

function AdminProfit() {
  return (
    <AdminLayout activePage="Profit" pageTitle="Profit">
      <div className="admin-cards">
        <div className="admin-card">
          <p className="admin-card-label">Total Revenue</p>
          <p className="admin-card-value">[INSERT REVENUE]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Total Expenses</p>
          <p className="admin-card-value">[INSERT EXPENSES]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Total Profit</p>
          <p className="admin-card-value">[INSERT PROFIT]</p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminProfit;
