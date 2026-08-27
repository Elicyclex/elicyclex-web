function AdminProduction() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ELICYCLEX</h2>
        <nav className="admin-nav">
          <a href="/admin" className="admin-nav-link">Dashboard</a>
          <a href="#production" className="admin-nav-link active">Production</a>
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
        <h1 className="admin-page-title">Production</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Batch #</th>
              <th>Production Date</th>
              <th>Harvest Date</th>
              <th>Drying Status</th>
              <th>Qty Harvested</th>
              <th>Qty Dried</th>
              <th>Qty Packaged</th>
              <th>Qty Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="admin-table-empty">
                No production batches recorded yet.
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminProduction;
