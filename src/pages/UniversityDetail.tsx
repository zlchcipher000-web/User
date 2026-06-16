import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Star, CheckCircle, Shield, CreditCard, Share2, Heart } from 'lucide-react';
import { universities } from '@/data/mock';
import { useState } from 'react';

const logoColors: Record<string, string> = {
  'BSU': 'bg-blue-600',
  'SLU': 'bg-indigo-600',
  'UB': 'bg-red-600',
  'UC': 'bg-green-600',
  'IFSU': 'bg-yellow-600',
  'KSU': 'bg-purple-600',
};

export default function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'tutors' | 'subjects' | 'reviews'>('overview');
  const [liked, setLiked] = useState(false);

  const university = universities.find(u => u.id === id);
  if (!university) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">University not found</p>
      </div>
    );
  }

  const tabs = [
    { key: 'overview' as const, label: 'Overview' },
    { key: 'tutors' as const, label: 'Available Tutors' },
    { key: 'subjects' as const, label: 'Subjects Offered' },
    { key: 'reviews' as const, label: 'Reviews' },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center gap-4">
        <button
          onClick={() => navigate('/find-tutor')}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Universities
        </button>
      </header>

      <div className="max-w-[1000px] mx-auto p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-2xl ${logoColors[university.logo] || 'bg-primary'} flex items-center justify-center text-white font-bold text-2xl shrink-0`}>
              {university.logo}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">{university.name}</h1>
                {university.verified && (
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified Partner</span>
                )}
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {university.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Heart className={`w-4 h-4 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
            </button>
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Campus Photo */}
              {university.campusPhoto && (
                <div className="rounded-xl overflow-hidden">
                  <img src={university.campusPhoto} alt={university.name} className="w-full h-56 object-cover" />
                </div>
              )}
              {/* About */}
              <div className="bg-white rounded-xl shadow-card p-5">
                <h3 className="font-semibold text-gray-900 mb-2">About {university.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{university.description}</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-gray-900">{university.activeTutors}</p>
                    <p className="text-xs text-gray-500">Active Tutors</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-gray-900">{university.completedSessions.toLocaleString()}+</p>
                    <p className="text-xs text-gray-500">Completed Sessions</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-gray-900">{university.rating} <span className="text-sm font-normal text-gray-400">/ 5</span></p>
                    <p className="text-xs text-gray-500">Parent Satisfaction</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-gray-900">{university.avgResponseTime}</p>
                    <p className="text-xs text-gray-500">Avg. Response Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subjects Offered */}
            <div className="bg-white rounded-xl shadow-card p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Subjects Offered</h3>
              <div className="flex flex-wrap gap-2">
                {university.subjectsOffered?.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">{s}</span>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle, title: 'Verified Tutors', desc: 'All tutors are students of BSU and verified by the university.', color: 'text-green-600 bg-green-50' },
                { icon: Shield, title: 'University Oversight', desc: 'All tutoring requests are reviewed and approved by BSU.', color: 'text-blue-600 bg-blue-50' },
                { icon: Shield, title: 'Safe & Secure', desc: 'Payments are secure and session monitored for quality.', color: 'text-purple-600 bg-purple-50' },
                { icon: CreditCard, title: 'Tuition Connected', desc: 'Tutor earnings can be applied to tuition or requested as payout.', color: 'text-orange-600 bg-orange-50' },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-xl shadow-card p-4">
                  <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center mb-3`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate(`/university/${university.id}/tutors`)}
              className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              View Available Tutors
            </button>
          </div>
        )}

        {activeTab === 'tutors' && (
          <div className="text-center py-12">
            <button
              onClick={() => navigate(`/university/${university.id}/tutors`)}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Browse All Tutors
            </button>
          </div>
        )}

        {activeTab === 'subjects' && (
          <div className="bg-white rounded-xl shadow-card p-5">
            <div className="flex flex-wrap gap-2">
              {university.subjectsOffered?.map((s) => (
                <span key={s} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">{s}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-center py-12 text-gray-500">
            <Star className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>Reviews will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
