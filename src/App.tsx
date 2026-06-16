import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import FindTutor from './pages/FindTutor'
import UniversityDetail from './pages/UniversityDetail'
import BrowseTutors from './pages/BrowseTutors'
import TutorProfile from './pages/TutorProfile'
import SubmitRequest from './pages/SubmitRequest'
import MyRequests from './pages/MyRequests'
import MySessions from './pages/MySessions'
import Messages from './pages/Messages'
import Payments from './pages/Payments'
import MyChildren from './pages/MyChildren'
import Notifications from './pages/Notifications'
import ProfileSettings from './pages/ProfileSettings'
import Login from './pages/Login'

function AppLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={<AppLayout><Dashboard /></AppLayout>}
      />
      <Route
        path="/find-tutor"
        element={<AppLayout><FindTutor /></AppLayout>}
      />
      <Route
        path="/university/:id"
        element={<AppLayout><UniversityDetail /></AppLayout>}
      />
      <Route
        path="/university/:id/tutors"
        element={<AppLayout><BrowseTutors /></AppLayout>}
      />
      <Route
        path="/tutor/:id"
        element={<AppLayout><TutorProfile /></AppLayout>}
      />
      <Route
        path="/request/:id"
        element={<AppLayout><SubmitRequest /></AppLayout>}
      />
      <Route
        path="/requests"
        element={<AppLayout><MyRequests /></AppLayout>}
      />
      <Route
        path="/sessions"
        element={<AppLayout><MySessions /></AppLayout>}
      />
      <Route
        path="/messages"
        element={<AppLayout><Messages /></AppLayout>}
      />
      <Route
        path="/payments"
        element={<AppLayout><Payments /></AppLayout>}
      />
      <Route
        path="/children"
        element={<AppLayout><MyChildren /></AppLayout>}
      />
      <Route
        path="/notifications"
        element={<AppLayout><Notifications /></AppLayout>}
      />
      <Route
        path="/settings"
        element={<AppLayout><ProfileSettings /></AppLayout>}
      />
    </Routes>
  )
}
