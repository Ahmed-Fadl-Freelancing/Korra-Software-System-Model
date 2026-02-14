import Link from 'next/link';

export default function SalesDepartmentPage() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <h1>Sales Department</h1>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/technical-office">Technical Office</Link>
          </div>
        </div>
      </nav>

      <main className="container">
        <div style={{ marginBottom: '40px' }}>
          <h2>Sales Department Dashboard</h2>
          <p>Manage sales operations, customer relationships, and revenue tracking</p>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3>Customer Management</h3>
            <p>Manage Customers</p>
            <Link href="/sales/customers">View customers →</Link>
          </div>

          <div className="card">
            <h3>Orders & Quotations</h3>
            <p>Track Orders</p>
            <Link href="/sales/orders">View orders →</Link>
          </div>

          <div className="card">
            <h3>Revenue Tracking</h3>
            <p>Financial Reports</p>
            <Link href="/sales/reports">View reports →</Link>
          </div>
        </div>

        <div className="card" style={{ marginTop: '30px' }}>
          <h3>Sales Department Features</h3>
          <ul className="feature-list">
            <li>Customer relationship management (CRM)</li>
            <li>Order processing and quotation management</li>
            <li>Sales pipeline and forecasting</li>
            <li>Revenue and performance tracking</li>
            <li>Integration with technical office for project coordination</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
