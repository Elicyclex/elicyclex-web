import { Link } from 'react-router-dom';

function AdminLayout({ activePage, pageTitle, children }) {
  const navItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Production', path: '/admin/production' },
    { label: 'Inventory', path: '/admin/inventory' },
    { label: 'Orders', path: '/admin/orders' },
    { label: 'Customers', path: '/admin/customers' },
    { label: 'Deliveries', path: '/admin/deliveries' },
    { label: 'Sales', path: '/admin/sales' },
    { label: 'Expenses', path: '/admin/expenses' },
    { label: 'Profit', path: '/admin/profit' },
    { label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ELICYCLEX</h2>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`admin-nav-link ${activePage === item.label ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <h1 className="admin-page-title">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
