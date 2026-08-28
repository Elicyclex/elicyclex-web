import AdminLayout from './AdminLayout';

function AdminDeliveries() {
  return (
    <AdminLayout activePage="Deliveries" pageTitle="Deliveries">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Delivery Status</th>
            <th>Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="admin-table-empty">
              No deliveries scheduled yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminDeliveries;
