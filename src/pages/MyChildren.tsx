import { useNavigate } from 'react-router';
import { Plus, BookOpen, Calendar, Search } from 'lucide-react';
import { children } from '@/data/mock';

export default function MyChildren() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">My Children</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add Child
        </button>
      </header>

      <div className="p-6 max-w-[1200px]">
        <p className="text-sm text-gray-500 mb-6">Manage your children and their learning.</p>

        {/* Children Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-xl shadow-card p-5 hover:shadow-card-hover transition-all duration-200">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={child.avatar}
                  alt={child.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{child.name}</h3>
                  <p className="text-sm text-gray-500">{child.grade}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {child.subjects.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">{s}</span>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Active Sessions: <span className="font-medium text-gray-900">{child.activeSessions}</span></span>
                </div>
              </div>

              {child.nextSession && (
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div className="text-xs">
                    <p className="text-gray-500">Next Session</p>
                    <p className="text-gray-900 font-medium">{child.nextSession.date} with {child.nextSession.tutor}</p>
                  </div>
                </div>
              )}

              <button className="w-full py-2 text-sm text-primary font-medium border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                View Progress
              </button>
            </div>
          ))}
        </div>

        {/* Academic Progress */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Academic Progress Overview</h3>
            <button className="text-xs text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {['Mathematics', 'Physics', 'English'].map((subject) => {
              const progressData: Record<string, { pct: number; status: string; color: string }> = {
                'Mathematics': { pct: 80, status: 'Good', color: 'bg-green-500' },
                'Physics': { pct: 75, status: 'Improving', color: 'bg-blue-500' },
                'English': { pct: 70, status: 'Great', color: 'bg-purple-500' },
              };
              const data = progressData[subject];
              return (
                <div key={subject}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{subject}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{data.status}</span>
                      <span className="text-sm font-semibold text-gray-900">{data.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${data.color} rounded-full transition-all duration-800`}
                      style={{ width: `${data.pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Need help with something?</h3>
              <p className="text-sm text-gray-500">Find the right tutor to help your child reach their goals.</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/find-tutor')}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Find a Tutor
          </button>
        </div>
      </div>
    </div>
  );
}
