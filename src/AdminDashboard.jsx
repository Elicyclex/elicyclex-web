function AdminDashboard() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ELICYCLEX</h2>
        <nav className="admin-nav">
          <a href="#dashboard" className="admin-nav-link active">Dashboard</a>
          <a href="#production" className="admin-nav-link">Production</a>
          <a href="#inventory" className="admin-nav-link">Inventory</a>
          <a href="#orders" className="admin-nav-link">Orders</a>
          <a href="#customers" className="admin-nav-link">Customers</a>
          <a href="#deliveries" className="admin-nav-link">Deliveries</a>
          <a href="#sales" className="admin-nav-link">Sales</a>
          <a href="#expenses" className="admin-nav-link">Expenses</a>
          <a href="#profit" className="admin-nav-link">Profit</a>
          <a href="#settings" className="admin-nav-link">Settings</a>
        </nav>
      </aside>

      <main className="admin-main">
        <h1 className="admin-page-title">Dashboard</h1>

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
      </main>
    </div>
  );
}

export default AdminDashboard;
