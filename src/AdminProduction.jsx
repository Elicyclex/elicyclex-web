import AdminLayout from './AdminLayout';

function AdminProduction() {
  return (
    <AdminLayout activePage="Production" pageTitle="Production">
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
    </AdminLayout>
  );
}

export default AdminProduction;
