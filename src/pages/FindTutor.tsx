import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, MapPin, Star, Clock, Users, BookOpen, ChevronDown } from 'lucide-react';
import { universities } from '@/data/mock';

const regions = ['All Regions', 'Benguet', 'Baguio City', 'Ifugao', 'Kalinga'];
const subjects = ['All Subjects', 'Mathematics', 'Science', 'English', 'Physics', 'Chemistry'];
const gradeLevels = ['All Grades', 'Grade 1-6', 'Grade 7-10', 'Grade 11-12', 'College'];
const sessionTypes = ['All Types', 'Online', 'In-Person'];

const logoColors: Record<string, string> = {
  'BSU': 'bg-blue-600',
  'SLU': 'bg-indigo-600',
  'UB': 'bg-red-600',
  'UC': 'bg-green-600',
  'IFSU': 'bg-yellow-600',
  'KSU': 'bg-purple-600',
};

export default function FindTutor() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [subject, setSubject] = useState('All Subjects');
  const [gradeLevel, setGradeLevel] = useState('All Grades');
  const [sessionType, setSessionType] = useState('All Types');

  const filteredUniversities = universities.filter(u => {
    if (searchQuery && !u.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (region !== 'All Regions' && !u.location.includes(region)) return false;
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">Find a Tutor</h1>
      </header>

      <div className="p-6 max-w-[1200px]">
        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Step 1 of 4: Choose a University</p>
          <p className="text-gray-400 text-xs">Select a university to see the student tutors available under that institution.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-card p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search university name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            {[
              { label: region, options: regions, onChange: setRegion },
              { label: subject, options: subjects, onChange: setSubject },
              { label: gradeLevel, options: gradeLevels, onChange: setGradeLevel },
              { label: sessionType, options: sessionTypes, onChange: setSessionType },
            ].map((filter, i) => (
              <div key={i} className="relative">
                <select
                  value={filter.label}
                  onChange={(e) => filter.onChange(e.target.value)}
                  className="appearance-none w-full lg:w-36 pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white cursor-pointer"
                >
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              onClick={() => navigate(`/university/${uni.id}`)}
              className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl ${logoColors[uni.logo] || 'bg-primary'} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                    {uni.logo}
                  </div>
                  <div className="flex items-center gap-1">
                    {uni.verified && (
                      <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verified Partner</span>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{uni.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> {uni.location}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <span>{uni.activeTutors} Active Tutors</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                    <span>{uni.subjects} Subjects</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>{uni.rating} ({uni.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Avg. response: {uni.avgResponseTime}</span>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary to-purple-500"></div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No universities found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
