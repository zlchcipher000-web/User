import { useState } from 'react';
import {
  Wallet, TrendingUp, Clock, AlertCircle,
  Receipt, Download, Plus
} from 'lucide-react';
import { payments } from '@/data/mock';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const spendingData = [
  { name: 'Mathematics', value: 2500, color: '#4f46e5' },
  { name: 'Physics', value: 1500, color: '#8b5cf6' },
  { name: 'English', value: 1500, color: '#f59e0b' },
  { name: 'Others', value: 500, color: '#e2e8f0' },
];

const tabs = ['Payment History', 'Invoices'];

const statusStyles: Record<string, { bg: string; text: string }> = {
  'Paid': { bg: 'bg-green-50', text: 'text-green-700' },
  'Pending': { bg: 'bg-yellow-50', text: 'text-yellow-700' },
  'Failed': { bg: 'bg-red-50', text: 'text-red-700' },
};

export default function Payments() {
  const [activeTab, setActiveTab] = useState('Payment History');

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Payments</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          Add Funds
        </button>
      </header>

      <div className="p-6 max-w-[1200px]">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Spent (This Month)', value: 'P4,500', icon: Wallet, color: 'bg-blue-100 text-blue-600' },
            { label: 'Pending Payments', value: 'P1,500', icon: Clock, color: 'bg-yellow-100 text-yellow-600' },
            { label: 'Total Paid', value: 'P28,000', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
            { label: 'Outstanding Balance', value: 'P1,500', icon: AlertCircle, color: 'bg-red-100 text-red-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-card">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Alternative Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Payment History' && (
              <div className="bg-white rounded-xl shadow-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tutor</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payments.map((payment) => {
                        const style = statusStyles[payment.status] || statusStyles['Paid'];
                        return (
                          <tr key={payment.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                            <td className="px-4 py-3 text-sm text-gray-600">{payment.date}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{payment.description}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{payment.tutor}</td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">P{payment.amount.toLocaleString()}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
                                {payment.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                                <Download className="w-4 h-4 text-gray-400" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'Invoices' && (
              <div className="bg-white rounded-xl shadow-card p-8 text-center">
                <Receipt className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-gray-500">No invoices available</p>
              </div>
            )}
          </div>

          {/* Spending Overview */}
          <div className="bg-white rounded-xl shadow-card p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Spending Overview</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={spendingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
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
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="text-lg font-bold text-gray-900">P6,000</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {spendingData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-900">P{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
