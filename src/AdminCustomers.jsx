import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [totalOrders, setTotalOrders] = useState('');
  const [totalPurchases, setTotalPurchases] = useState('');
  const [outstandingOrders, setOutstandingOrders] = useState('');

  async function fetchData() {
    const { data } = await supabase.from('customers').select('*');
    if (data) setCustomers(data);
  }

  useEffect(() => { fetchData(); }, []);

  async function handleAdd() {
    if (!name.trim()) return;
    await supabase.from('customers').insert({
      name, contact,
      total_orders: Number(totalOrders) || 0,
      total_purchases: Number(totalPurchases) || 0,
      outstanding_orders: Number(outstandingOrders) || 0,
    });
    setName(''); setContact(''); setTotalOrders(''); setTotalPurchases(''); setOutstandingOrders('');
    fetchData();
  }

  return (
    <AdminLayout activePage="Customers" pageTitle="Customers">
      <div className="admin-add-form">
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        <input placeholder="Total Orders" type="number" value={totalOrders} onChange={(e) => setTotalOrders(e.target.value)} />
        <input placeholder="Total Purchases" type="number" value={totalPurchases} onChange={(e) => setTotalPurchases(e.target.value)} />
        <input placeholder="Outstanding Orders" type="number" value={outstandingOrders} onChange={(e) => setOutstandingOrders(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Name</th><th>Contact</th><th>Total Orders</th><th>Total Purchases</th><th>Outstanding Orders</th></tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr><td colSpan="5" className="admin-table-empty">No customers recorded yet.</td></tr>
          ) : (
            customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td><td>{c.contact}</td><td>{c.total_orders}</td><td>{c.total_purchases}</td><td>{c.outstanding_orders}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminCustomers;
