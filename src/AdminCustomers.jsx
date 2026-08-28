import AdminLayout from './AdminLayout';

function AdminCustomers() {
  return (
    <AdminLayout activePage="Customers" pageTitle="Customers">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Total Orders</th>
            <th>Total Purchases</th>
            <th>Outstanding Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="admin-table-empty">
              No customers recorded yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminCustomers;
