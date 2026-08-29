import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminSales() {
  const [sales, setSales] = useState([]);
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [saleDate, setSaleDate] = useState('');

  async function fetchData() {
    const { data } = await supabase.from('sales').select('*');
    if (data) setSales(data);
  }

  useEffect(() => { fetchData(); }, []);

  async function handleAdd() {
    if (!customer.trim()) return;
    const qty = Number(quantity) || 0;
    const prc = Number(price) || 0;
    await supabase.from('sales').insert({
      customer, product, quantity: qty, price: prc,
      revenue: qty * prc,
      sale_date: saleDate || null,
    });
    setCustomer(''); setProduct(''); setQuantity(''); setPrice(''); setSaleDate('');
    fetchData();
  }

  return (
    <AdminLayout activePage="Sales" pageTitle="Sales">
      <div className="admin-add-form">
        <input placeholder="Customer" value={customer} onChange={(e) => setCustomer(e.target.value)} />
        <input placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} />
        <input placeholder="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="Date" type="date" value={saleDate} onChange={(e) => setSaleDate(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Customer</th><th>Product</th><th>Quantity</th><th>Price</th><th>Date</th><th>Revenue</th></tr>
        </thead>
        <tbody>
          {sales.length === 0 ? (
            <tr><td colSpan="6" className="admin-table-empty">No sales recorded yet.</td></tr>
          ) : (
            sales.map((s) => (
              <tr key={s.id}>
                <td>{s.customer}</td><td>{s.product}</td><td>{s.quantity}</td><td>{s.price}</td><td>{s.sale_date}</td><td>{s.revenue}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminSales;
