export interface User {
  id: string;
  name: string;
  email: string;
  role: 'parent' | 'student';
  avatar: string;
  verified: boolean;
  location?: string;
  phone?: string;
}

export interface Child {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  subjects: string[];
  activeSessions: number;
  nextSession?: {
    date: string;
    tutor: string;
  };
  progress: {
    subject: string;
    percentage: number;
    status: string;
  }[];
}

export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  course: string;
  year: string;
  university: string;
  subjects: string[];
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  availability: string;
  verified: boolean;
  responseTime?: string;
  completedSessions?: number;
  aboutMe?: string;
  teachingApproach?: string[];
  studentId?: string;
  program?: string;
  yearLevel?: string;
  status?: string;
}

export interface University {
  id: string;
  name: string;
  location: string;
  logo: string;
  activeTutors: number;
  subjects: number;
  rating: number;
  reviewCount: number;
  avgResponseTime: string;
  completedSessions: number;
  verified: boolean;
  campusPhoto?: string;
  subjectsOffered?: string[];
  description?: string;
}

export interface Session {
  id: string;
  tutorName: string;
  tutorAvatar: string;
  subject: string;
  date: string;
  timeRange: string;
  duration: string;
  mode: 'Online' | 'In-Person';
  status: 'Confirmed' | 'Pending' | 'Scheduled' | 'Completed' | 'Cancelled';
  grade?: string;
}

export interface Request {
  id: string;
  name: string;
  student: string;
  tutor: string;
  university: string;
  subject: string;
  status: 'Approved' | 'Pending Review' | 'Awaiting Tutor' | 'Declined' | 'Completed';
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  online?: boolean;
  messages: Message[];
}

export interface Payment {
  id: string;
  date: string;
  description: string;
  tutor: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
}

export interface Notification {
  id: string;
  type: 'session' | 'payment' | 'message' | 'system';
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
}

export interface StatCard {
  label: string;
  value: string;
  subtext: string;
  iconColor: string;
  icon: string;
}
