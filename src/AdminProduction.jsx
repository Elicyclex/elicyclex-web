import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminProduction() {
  const [batches, setBatches] = useState([]);
  const [batchNumber, setBatchNumber] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [dryingStatus, setDryingStatus] = useState('');
  const [qtyHarvested, setQtyHarvested] = useState('');
  const [qtyDried, setQtyDried] = useState('');
  const [qtyPackaged, setQtyPackaged] = useState('');
  const [qtyAvailable, setQtyAvailable] = useState('');

  async function fetchData() {
    const { data } = await supabase.from('production_batches').select('*');
    if (data) setBatches(data);
  }

  useEffect(() => { fetchData(); }, []);

  async function handleAdd() {
    if (!batchNumber.trim()) return;
    await supabase.from('production_batches').insert({
      batch_number: batchNumber,
      production_date: productionDate || null,
      harvest_date: harvestDate || null,
      drying_status: dryingStatus,
      qty_harvested: Number(qtyHarvested) || 0,
      qty_dried: Number(qtyDried) || 0,
      qty_packaged: Number(qtyPackaged) || 0,
      qty_available: Number(qtyAvailable) || 0,
    });
    setBatchNumber(''); setProductionDate(''); setHarvestDate(''); setDryingStatus('');
    setQtyHarvested(''); setQtyDried(''); setQtyPackaged(''); setQtyAvailable('');
    fetchData();
  }

  return (
    <AdminLayout activePage="Production" pageTitle="Production">
      <div className="admin-add-form">
        <input placeholder="Batch #" value={batchNumber} onChange={(e) => setBatchNumber(e.target.value)} />
        <input placeholder="Production Date" type="date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} />
        <input placeholder="Harvest Date" type="date" value={harvestDate} onChange={(e) => setHarvestDate(e.target.value)} />
        <input placeholder="Drying Status" value={dryingStatus} onChange={(e) => setDryingStatus(e.target.value)} />
        <input placeholder="Qty Harvested" type="number" value={qtyHarvested} onChange={(e) => setQtyHarvested(e.target.value)} />
        <input placeholder="Qty Dried" type="number" value={qtyDried} onChange={(e) => setQtyDried(e.target.value)} />
        <input placeholder="Qty Packaged" type="number" value={qtyPackaged} onChange={(e) => setQtyPackaged(e.target.value)} />
        <input placeholder="Qty Available" type="number" value={qtyAvailable} onChange={(e) => setQtyAvailable(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Batch #</th><th>Production Date</th><th>Harvest Date</th><th>Drying Status</th><th>Qty Harvested</th><th>Qty Dried</th><th>Qty Packaged</th><th>Qty Available</th></tr>
        </thead>
        <tbody>
          {batches.length === 0 ? (
            <tr><td colSpan="8" className="admin-table-empty">No production batches recorded yet.</td></tr>
          ) : (
            batches.map((b) => (
              <tr key={b.id}>
                <td>{b.batch_number}</td><td>{b.production_date}</td><td>{b.harvest_date}</td><td>{b.drying_status}</td>
                <td>{b.qty_harvested}</td><td>{b.qty_dried}</td><td>{b.qty_packaged}</td><td>{b.qty_available}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminProduction;
