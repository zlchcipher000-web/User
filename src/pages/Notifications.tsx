import { useState } from 'react';
import {
  Bell, CheckCircle, MessageSquare, Calendar,
  AlertTriangle, CheckCheck
} from 'lucide-react';
import { notifications as notifData } from '@/data/mock';
import type { Notification } from '@/types';

const categories = ['All', 'Sessions', 'Payments', 'Messages', 'System'];

const typeIcons: Record<string, { icon: typeof Bell; color: string; bg: string }> = {
  'session': { icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
  'payment': { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
  'message': { icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
  'system': { icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
};

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(notifData);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? notifications
    : notifications.filter(n => n.type === activeCategory.toLowerCase());

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
        <button
          onClick={markAllRead}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <CheckCheck className="w-4 h-4" />
          Mark all as read
        </button>
      </header>

      <div className="p-6 max-w-[900px]">
        <p className="text-sm text-gray-500 mb-6">Stay updated with your activity.</p>

        {/* Categories */}
        <div className="flex gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="space-y-2">
          {filtered.map((notif) => {
            const typeConfig = typeIcons[notif.type] || typeIcons['system'];
            const Icon = typeConfig.icon;
            return (
              <div
                key={notif.id}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  notif.isRead ? 'bg-white' : 'bg-blue-50/50'
                } hover:bg-gray-50`}
              >
                <div className={`w-10 h-10 rounded-xl ${typeConfig.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${typeConfig.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                  <p className="text-sm text-gray-500">{notif.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>
                </div>
                {!notif.isRead && (
                  <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2"></span>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No notifications in this category.</p>
          </div>
        )}

        <div className="text-center mt-6">
          <button className="text-sm text-primary font-medium hover:underline">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
