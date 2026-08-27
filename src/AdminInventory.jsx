import AdminLayout from './AdminLayout';

function AdminInventory() {
  return (
    <AdminLayout activePage="Inventory" pageTitle="Inventory">
      <div className="admin-cards">
        <div className="admin-card">
          <p className="admin-card-label">Total Stock</p>
          <p className="admin-card-value">[INSERT STOCK]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Reserved Stock</p>
          <p className="admin-card-value">[INSERT RESERVED]</p>
        </div>
        <div className="admin-card">
          <p className="admin-card-label">Available Stock</p>
          <p className="admin-card-value">[INSERT AVAILABLE]</p>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Bag Size</th>
            <th>Number of Bags</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="admin-table-empty">
              No inventory recorded yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminInventory;
