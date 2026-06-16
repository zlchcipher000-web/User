import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Heart, Star, CheckCircle, Clock, Filter, ChevronDown } from 'lucide-react';
import { tutors, universities } from '@/data/mock';
import { useState } from 'react';

const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Programming'];
const gradeLevels = ['All Grades', 'Elementary', 'High School', 'College'];
const hourlyRates = ['Any Rate', 'Under P200', 'P200-P250', 'Over P250'];
const availabilities = ['Any', 'Available Now', 'This Week'];
const sortOptions = ['Top Rated', 'Price: Low to High', 'Price: High to Low', 'Most Reviews'];

export default function BrowseTutors() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState('All Subjects');
  const [gradeLevel, setGradeLevel] = useState('All Grades');
  const [hourlyRate, setHourlyRate] = useState('Any Rate');
  const [availability, setAvailability] = useState('Any');
  const [sortBy, setSortBy] = useState('Top Rated');

  const university = universities.find(u => u.id === id);

  const filteredTutors = tutors.filter(t => {
    if (subject !== 'All Subjects' && !t.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()))) return false;
    return true;
  });

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

      <div className="p-6 max-w-[1200px]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Browse Tutors</h1>
          <p className="text-sm text-gray-500 mt-1">
            {university?.name} - {tutors.length} Verified Student Tutors
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-card p-4 mb-6">
          <div className="flex flex-wrap gap-3 items-center">
            {[
              { label: subject, options: subjects, onChange: setSubject },
              { label: gradeLevel, options: gradeLevels, onChange: setGradeLevel },
              { label: hourlyRate, options: hourlyRates, onChange: setHourlyRate },
              { label: availability, options: availabilities, onChange: setAvailability },
            ].map((filter, i) => (
              <div key={i} className="relative">
                <select
                  value={filter.label}
                  onChange={(e) => filter.onChange(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white cursor-pointer"
                >
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Tutor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-xl shadow-card p-5 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                {tutor.verified && <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />}
              </div>
              <p className="text-xs text-gray-500 mb-2">{tutor.course} - {tutor.year}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {tutor.subjects.map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{s}</span>
                ))}
              </div>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                <span className="text-xs text-gray-400">({tutor.reviewCount} reviews)</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-lg font-bold text-gray-900">P{tutor.hourlyRate}<span className="text-xs font-normal text-gray-400">/hour</span></p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600">{tutor.availability}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/tutor/${tutor.id}`)}
                  className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
