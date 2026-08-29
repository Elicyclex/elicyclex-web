import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
      if (data) setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <AdminLayout activePage="Orders" pageTitle="Orders">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Contact</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="5" className="admin-table-empty">No orders recorded yet.</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.customer_contact}</td>
                <td>{order.quantity}kg</td>
                <td>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminOrders;
