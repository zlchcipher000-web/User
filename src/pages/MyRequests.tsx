import { useState } from 'react';
import { ClipboardList, ChevronRight } from 'lucide-react';
import { requests } from '@/data/mock';

const filters = ['All', 'Pending Review', 'Awaiting Tutor', 'Approved', 'Declined', 'Completed'];

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  'Approved': { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  'Pending Review': { bg: 'bg-yellow-50', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  'Awaiting Tutor': { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  'Declined': { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
  'Completed': { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
};

export default function MyRequests() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? requests
    : requests.filter(r => r.status === activeFilter);

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">My Requests</h1>
      </header>

      <div className="p-6 max-w-[1200px]">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-4 py-3 text-left">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tutor / University</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((req) => {
                  const style = statusStyles[req.status] || statusStyles['Pending Review'];
                  return (
                    <tr key={req.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <ClipboardList className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{req.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{req.student}</td>
                      <td className="px-4 py-3">
                        <p className="text-sm text-gray-900">{req.tutor || 'Pending Assignment'}</p>
                        <p className="text-xs text-gray-400">{req.university}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{req.subject}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>
                          {req.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{req.date}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">No requests found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
