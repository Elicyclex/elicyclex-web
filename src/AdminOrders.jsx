import AdminLayout from './AdminLayout';

function AdminOrders() {
  return (
    <AdminLayout activePage="Orders" pageTitle="Orders">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="admin-table-empty">
              No orders recorded yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminOrders;
