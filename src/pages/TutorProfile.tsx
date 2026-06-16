import { useParams, useNavigate } from 'react-router';
import {
  ArrowLeft, Heart, Star, CheckCircle, MapPin, Clock,
  Wallet, GraduationCap, Calendar, Shield, BookOpen
} from 'lucide-react';
import { tutors } from '@/data/mock';
import { useState } from 'react';

export default function TutorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'reviews' | 'schedule' | 'policies'>('about');
  const [liked, setLiked] = useState(false);

  const tutor = tutors.find(t => t.id === id);
  if (!tutor) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Tutor not found</p>
      </div>
    );
  }

  const tabs = [
    { key: 'about' as const, label: 'About' },
    { key: 'reviews' as const, label: `Reviews (${tutor.reviewCount})` },
    { key: 'schedule' as const, label: 'Schedule' },
    { key: 'policies' as const, label: 'Session Policies' },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tutors
        </button>
      </header>

      <div className="max-w-[900px] mx-auto p-6">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-6">
          <div className="flex items-start gap-6">
            <img
              src={tutor.avatar}
              alt={tutor.name}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-gray-900">{tutor.name}</h1>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Verified by Benguet State University
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" /> {tutor.course} - {tutor.year}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-4 h-4" /> La Trinidad, Benguet
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button
                    onClick={() => navigate(`/request/${tutor.id}`)}
                    className="px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Request Tutoring
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium text-gray-900">{tutor.rating}</span>
                  <span className="text-sm text-gray-400">({tutor.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wallet className="w-4 h-4 text-gray-400" />
                  <span className="font-medium text-gray-900">P{tutor.hourlyRate}/hr</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Available: Weekdays 4PM - 8PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Avg. response: {tutor.responseTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-3">About Me</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tutor.aboutMe}</p>
              </div>
              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Teaching Approach</h3>
                <ul className="space-y-2">
                  {tutor.teachingApproach?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  All tutoring requests are reviewed by {tutor.university} before confirmation. Your child's safety is our priority.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Tutor Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Student ID</span>
                    <span className="text-gray-900">{tutor.studentId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Program</span>
                    <span className="text-gray-900">{tutor.program}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Year Level</span>
                    <span className="text-gray-900">{tutor.yearLevel}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="text-green-600 font-medium">{tutor.status}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-3">Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {tutor.subjects.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-center py-12 text-gray-500">
            <Star className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>{tutor.reviewCount} reviews available</p>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="text-center py-12 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>Schedule calendar will appear here</p>
          </div>
        )}

        {activeTab === 'policies' && (
          <div className="bg-white rounded-xl shadow-card p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Session Policies</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Sessions must be booked at least 24 hours in advance.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Cancellations must be made 12 hours before the session.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> All tutors are verified university students.</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Payments are held securely until session completion.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
