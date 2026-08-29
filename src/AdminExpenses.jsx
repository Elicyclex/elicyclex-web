import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { supabase } from './supabaseClient';

function AdminExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');

  async function fetchData() {
    const { data } = await supabase.from('expenses').select('*');
    if (data) setExpenses(data);
  }

  useEffect(() => { fetchData(); }, []);

  async function handleAdd() {
    if (!category.trim()) return;
    await supabase.from('expenses').insert({
      category, description,
      amount: Number(amount) || 0,
      expense_date: expenseDate || null,
    });
    setCategory(''); setDescription(''); setAmount(''); setExpenseDate('');
    fetchData();
  }

  return (
    <AdminLayout activePage="Expenses" pageTitle="Expenses">
      <div className="admin-add-form">
        <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input placeholder="Date" type="date" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} />
        <button className="btn-primary" onClick={handleAdd}>Add</button>
      </div>
      <table className="admin-table">
        <thead>
          <tr><th>Category</th><th>Description</th><th>Amount</th><th>Date</th></tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr><td colSpan="4" className="admin-table-empty">No expenses recorded yet.</td></tr>
          ) : (
            expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.category}</td><td>{e.description}</td><td>{e.amount}</td><td>{e.expense_date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminExpenses;
