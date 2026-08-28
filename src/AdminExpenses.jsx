import AdminLayout from './AdminLayout';

function AdminExpenses() {
  return (
    <AdminLayout activePage="Expenses" pageTitle="Expenses">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="admin-table-empty">
              No expenses recorded yet.
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminExpenses;
