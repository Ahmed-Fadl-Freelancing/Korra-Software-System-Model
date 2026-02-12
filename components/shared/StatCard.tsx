interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'indigo';
  link?: {
    href: string;
    text: string;
  };
}

const colorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
  purple: 'text-purple-600',
  red: 'text-red-600',
  indigo: 'text-indigo-600',
};

export default function StatCard({ title, value, icon, color, link }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={colorClasses[color]}>{icon}</div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
      {link && (
        <div className="bg-gray-50 px-5 py-3">
          <a href={link.href} className="text-sm text-blue-600 hover:text-blue-900">
            {link.text} →
          </a>
        </div>
      )}
    </div>
  );
}
