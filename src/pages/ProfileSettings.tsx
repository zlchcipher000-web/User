import { useState } from 'react';
import {
  User, Lock, Bell, CreditCard, Link2, ChevronRight,
  Pencil, MapPin, Phone, Mail
} from 'lucide-react';
import { currentUser } from '@/data/mock';

const tabs = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'security', label: 'Security', icon: Lock },
  { key: 'preferences', label: 'Preferences', icon: Bell },
];

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Profile & Settings</h1>
      </header>

      <div className="p-6 max-w-[1000px]">
        <p className="text-sm text-gray-500 mb-6">Manage your account and preferences.</p>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Profile Information</h3>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                    Edit Profile
                  </button>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentUser.name}</h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-xs text-gray-500 capitalize">Verified {currentUser.role}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Full Name</label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{currentUser.name}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Email</label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{currentUser.email}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Phone Number</label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{currentUser.phone}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Address</label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{currentUser.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-1">
                  {[
                    { icon: Lock, label: 'Change Password', desc: 'Update your password' },
                    { icon: Bell, label: 'Notification Preferences', desc: 'Manage alerts' },
                    { icon: CreditCard, label: 'Payment Methods', desc: 'Manage cards & wallets' },
                    { icon: Link2, label: 'Connected Accounts', desc: 'Link social accounts' },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-1">Need Help?</h3>
                <p className="text-xs text-gray-500 mb-4">Visit our Help Center or contact support if you need assistance.</p>
                <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Help Center
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="max-w-lg">
            <div className="bg-white rounded-xl shadow-card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                  <input type="password" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                  <input type="password" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
                  <input type="password" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <button className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="max-w-lg space-y-4">
            {[
              { title: 'Email Notifications', desc: 'Receive updates about sessions and payments', enabled: true },
              { title: 'SMS Notifications', desc: 'Get text alerts for upcoming sessions', enabled: true },
              { title: 'Session Reminders', desc: 'Reminder 1 hour before each session', enabled: true },
              { title: 'Marketing Emails', desc: 'Receive news and promotional offers', enabled: false },
            ].map((pref, i) => (
              <div key={i} className="bg-white rounded-xl shadow-card p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{pref.title}</h4>
                  <p className="text-xs text-gray-500">{pref.desc}</p>
                </div>
                <button
                  className={`w-11 h-6 rounded-full transition-colors relative ${
                    pref.enabled ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      pref.enabled ? 'left-6' : 'left-1'
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
