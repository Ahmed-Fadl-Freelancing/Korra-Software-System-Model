import Link from "next/link";

export default function Home() {
  return (
    <div className="page-center">
      <div className="container text-center">
        <h1>Korra Software System</h1>
        <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
          Shifting system from file based & hard human work to automated software
        </p>
        
        <div style={{ marginBottom: '50px' }}>
          <Link href="/signup" className="btn">Sign Up</Link>
          <Link href="/login" className="btn btn-secondary">Login</Link>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <h2>Sales Department</h2>
            <p>
              Manage sales operations, customer relationships, and revenue tracking.
            </p>
            <Link href="/sales">Go to Sales →</Link>
          </div>

          <div className="card">
            <h2>Technical Office</h2>
            <p>
              Handle technical projects, documentation, and engineering tasks.
            </p>
            <Link href="/technical-office">Go to Technical Office →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
