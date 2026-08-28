import AdminLayout from './AdminLayout';

function AdminSales() {
  return (
    <AdminLayout activePage="Sales" pageTitle="Sales">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="admin-table-empty">
              No sales recorded yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminSales;
