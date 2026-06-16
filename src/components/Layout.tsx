import { Link, useLocation } from 'react-router';
import {
  LayoutGrid, Search, ClipboardList, Calendar, MessageSquare,
  CreditCard, Users, Bell, Settings, LogOut, GraduationCap
} from 'lucide-react';
import { currentUser } from '@/data/mock';
import { useState } from 'react';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: '/' },
  { icon: Search, label: 'Find a Tutor', path: '/find-tutor' },
  { icon: ClipboardList, label: 'My Requests', path: '/requests' },
  { icon: Calendar, label: 'My Sessions', path: '/sessions' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: CreditCard, label: 'Payments', path: '/payments' },
  { icon: Users, label: 'My Children', path: '/children' },
  { icon: Bell, label: 'Notifications', path: '/notifications', badge: 1 },
  { icon: Settings, label: 'Profile & Settings', path: '/settings' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [collapsed] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8fafc]">
      {/* Sidebar */}
      <aside
        className="flex flex-col bg-[#1a1f3c] text-white transition-all duration-300 h-full shrink-0"
        style={{ width: collapsed ? 72 : 240 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight">EduFund</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400 leading-tight">Parent / Student Portal</span>
            </div>
          )}
        </div>

        {/* User Profile */}
        {!collapsed && (
          <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium truncate">{currentUser.name}</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-xs text-gray-400 capitalize">{currentUser.role}</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg transition-all duration-200 relative
                  ${isActive
                    ? 'bg-white/10 text-white border-l-[3px] border-primary'
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border-l-[3px] border-transparent'
                  }`}
                style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
              >
                <item.icon className="w-[18px] h-[18px] shrink-0" />
                {!collapsed && (
                  <>
                    <span className="text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {collapsed && item.badge && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full text-[8px] flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-white/10">
          <Link
            to="/login"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:bg-white/5 hover:text-gray-200 transition-all duration-200"
            style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
          >
            <LogOut className="w-[18px] h-[18px] shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {children}
      </main>
    </div>
  );
}
