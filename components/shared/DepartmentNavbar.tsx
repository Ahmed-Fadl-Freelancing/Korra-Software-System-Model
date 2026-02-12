import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

interface DepartmentNavbarProps {
  departmentName: string;
  items: NavItem[];
}

export default function DepartmentNavbar({ departmentName, items }: DepartmentNavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">{departmentName}</h1>
          </div>
          <div className="flex items-center space-x-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
