import { useNavigate } from 'react-router';
import {
  Bell, Clock, CalendarDays, Wallet, Users,
  TrendingUp, Search
} from 'lucide-react';
import { currentUser, spendingData, scheduleData } from '@/data/mock';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Upcoming Sessions', value: '2', subtext: 'Today', iconColor: 'bg-blue-100 text-blue-600', icon: CalendarDays },
  { label: 'Active Students', value: '2', subtext: 'This Month', iconColor: 'bg-green-100 text-green-600', icon: Users },
  { label: 'Total Spent', value: 'P4,500', subtext: 'This Month', iconColor: 'bg-purple-100 text-purple-600', icon: Wallet },
  { label: 'Total Sessions', value: '8', subtext: 'This Month', iconColor: 'bg-orange-100 text-orange-600', icon: TrendingUp },
];

const recentActivities = [
  { text: 'Payment of P2,500', date: 'May 30, 2026', status: 'Successful', statusColor: 'text-green-600' },
  { text: 'Session completed with Maria Santos', date: 'May 30, 2026', status: 'Done', statusColor: 'text-blue-600' },
  { text: 'New session booked with Mark Tuzon', date: 'May 29, 2026', status: 'New', statusColor: 'text-purple-600' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Top Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="w-4 h-4" />
            {dateStr}
          </div>
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            onClick={() => navigate('/settings')}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={currentUser.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
          </button>
        </div>
      </header>

      <div className="p-6 space-y-6 max-w-[1400px]">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Good morning, {currentUser.name.split(' ')[0]}!</h2>
          <p className="text-gray-500 mt-1">Here's an overview of your tutoring activity.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5">
              <div className={`w-10 h-10 rounded-lg ${stat.iconColor} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xs text-gray-400">{stat.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Today's Schedule</h3>
              <button className="text-xs text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {scheduleData.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <img src={item.tutorAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{item.time}</p>
                    <p className="text-xs text-gray-500">{item.subject} <span className="text-gray-400">{item.grade}</span></p>
                    <p className="text-xs text-gray-500">with {item.tutor}</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">{item.in}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 py-2 text-sm text-primary font-medium border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
              View Full Schedule
            </button>
          </div>

          {/* Spending Overview */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Spending Overview</h3>
              <span className="text-xs text-gray-400">(This Month)</span>
            </div>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-44 h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={spendingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {spendingData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xs text-gray-400">Total Spent</p>
                  <p className="text-xl font-bold text-gray-900">P4,500</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {spendingData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900">P{item.value.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 ml-1">({Math.round((item.value / 4500) * 100)}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-xs text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {recentActivities.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{item.text}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                  <span className={`text-xs font-medium ${item.statusColor}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Need help choosing a tutor?</h3>
              <p className="text-sm text-gray-500">Let us recommend the best tutor for your child.</p>
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
