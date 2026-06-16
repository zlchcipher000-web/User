import { useState } from 'react';
import { Calendar, List, Monitor, Video, ChevronRight } from 'lucide-react';
import { sessions } from '@/data/mock';

const filters = ['Upcoming', 'Completed', 'Cancelled'];

const statusStyles: Record<string, { bg: string; text: string }> = {
  'Confirmed': { bg: 'bg-green-50', text: 'text-green-700' },
  'Pending': { bg: 'bg-yellow-50', text: 'text-yellow-700' },
  'Scheduled': { bg: 'bg-blue-50', text: 'text-blue-700' },
  'Completed': { bg: 'bg-gray-50', text: 'text-gray-700' },
  'Cancelled': { bg: 'bg-red-50', text: 'text-red-700' },
};

export default function MySessions() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [activeFilter, setActiveFilter] = useState('Upcoming');

  const filtered = sessions.filter(s => {
    if (activeFilter === 'Upcoming') return ['Confirmed', 'Pending', 'Scheduled'].includes(s.status);
    if (activeFilter === 'Completed') return s.status === 'Completed';
    if (activeFilter === 'Cancelled') return s.status === 'Cancelled';
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">My Sessions</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('calendar')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              viewMode === 'calendar' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Calendar View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <List className="w-4 h-4" />
            List View
          </button>
        </div>
      </header>

      <div className="p-6 max-w-[1200px]">
        {/* Filters */}
        <div className="flex gap-2 mb-6">
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

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {filtered.map((session) => {
              const style = statusStyles[session.status] || statusStyles['Scheduled'];
              return (
                <div
                  key={session.id}
                  className="bg-white rounded-xl shadow-card p-5 hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={session.tutorAvatar}
                      alt={session.tutorName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900">{session.tutorName}</h3>
                      <p className="text-sm text-gray-500">{session.subject}</p>
                    </div>
                    <div className="hidden sm:block text-center min-w-[120px]">
                      <p className="text-sm font-medium text-gray-900">{session.date}</p>
                      <p className="text-xs text-gray-500">{session.timeRange}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full whitespace-nowrap">
                      {session.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full whitespace-nowrap">
                      <Monitor className="w-3 h-3" />
                      {session.mode}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${style.bg} ${style.text}`}>
                      {session.status}
                    </span>
                    <div className="flex items-center gap-2">
                      {session.status === 'Confirmed' && (
                        <button className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors">
                          <Video className="w-4 h-4" />
                          Join Session
                        </button>
                      )}
                      <button className="px-3 py-2 text-sm text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500">No sessions found.</div>
            )}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500 text-center">
                  {day}
                </div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                const hasSession = day === 22 || day === 24 || day === 25 || day === 28;
                return (
                  <div
                    key={day}
                    className={`bg-white min-h-[80px] p-2 ${hasSession ? 'bg-primary/5' : ''}`}
                  >
                    <span className="text-sm text-gray-700">{day}</span>
                    {day === 22 && (
                      <div className="mt-1 px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] rounded truncate">
                        Algebra - 4PM
                      </div>
                    )}
                    {day === 24 && (
                      <div className="mt-1 px-1.5 py-0.5 bg-purple-100 text-purple-600 text-[10px] rounded truncate">
                        Physics - 2PM
                      </div>
                    )}
                    {day === 25 && (
                      <div className="mt-1 px-1.5 py-0.5 bg-orange-100 text-orange-600 text-[10px] rounded truncate">
                        English - 10AM
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex justify-center">
              <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                View All Sessions <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
