import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Korra Software System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Shifting system from file based & hard human work to automated software
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Login
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Sales Department
            </h2>
            <p className="text-gray-600">
              Manage sales operations, customer relationships, and revenue tracking.
            </p>
            <Link
              href="/sales"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Go to Sales →
            </Link>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Technical Office
            </h2>
            <p className="text-gray-600">
              Handle technical projects, documentation, and engineering tasks.
            </p>
            <Link
              href="/technical-office"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Go to Technical Office →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
