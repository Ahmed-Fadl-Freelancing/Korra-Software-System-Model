import Link from 'next/link';

export default function TechnicalOfficePage() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <h1>Technical Office</h1>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/sales">Sales Department</Link>
          </div>
        </div>
      </nav>

      <main className="container">
        <div style={{ marginBottom: '40px' }}>
          <h2>Technical Office Dashboard</h2>
          <p>Handle technical projects, documentation, and engineering tasks</p>
        </div>

        <div className="grid grid-3">
          <div className="card">
            <h3>Project Management</h3>
            <p>Manage Projects</p>
            <Link href="/technical-office/projects">View projects →</Link>
          </div>

          <div className="card">
            <h3>Documentation</h3>
            <p>Technical Docs</p>
            <Link href="/technical-office/documentation">View documentation →</Link>
          </div>

          <div className="card">
            <h3>Engineering Tasks</h3>
            <p>Task Management</p>
            <Link href="/technical-office/tasks">View tasks →</Link>
          </div>
        </div>

        <div className="card" style={{ marginTop: '30px' }}>
          <h3>Technical Office Features</h3>
          <ul className="feature-list">
            <li>Project planning and execution tracking</li>
            <li>Technical documentation management</li>
            <li>Engineering task assignment and monitoring</li>
            <li>Resource allocation and capacity planning</li>
            <li>Integration with sales department for project coordination</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
