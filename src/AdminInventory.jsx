import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminInventory() {
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState('');
  const [bagSize, setBagSize] = useState('');
  const [numberOfBags, setNumberOfBags] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');

  async function fetchData() {
    const { data } = await supabase.from('inventory').select('*');
    if (data) setItems(data);
  }

  useEffect(() => { fetchData(); }, []);

  async function handleAdd() {
    if (!product.trim()) return;
    await supabase.from('inventory').insert({
      product, bag_size: bagSize,
      number_of_bags: Number(numberOfBags),
      total_quantity: Number(totalQuantity),
    });
    setProduct(''); setBagSize(''); setNumberOfBags(''); setTotalQuantity('');
    fetchData();
  }

  return (
    <AdminLayout activePage="Inventory" pageTitle="Inventory">
      <div className="admin-add-form">
        <input placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} />
        <input placeholder="Bag Size" value={bagSize} onChange={(e) => setBagSize(e.target.value)} />
        <input placeholder="Number of Bags" type="number" value={numberOfBags} onChange={(e) => setNumberOfBags(e.target.value)} />
        <input placeholder="Total Quantity" type="number" value={totalQuantity} onChange={(e) => setTotalQuantity(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Product</th><th>Bag Size</th><th>Number of Bags</th><th>Total Quantity</th></tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr><td colSpan="4" className="admin-table-empty">No inventory recorded yet.</td></tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td><td>{item.bag_size}</td><td>{item.number_of_bags}</td><td>{item.total_quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminInventory;
