import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown, User, Clock, Monitor } from 'lucide-react';
import { tutors, children } from '@/data/mock';
import { useState } from 'react';

const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
const subjects = ['Algebra', 'Calculus', 'Trigonometry', 'Physics', 'Chemistry', 'Biology', 'English', 'Filipino', 'Programming', 'Science'];
const schedules = ['Mondays & Wednesdays', 'Tuesdays & Thursdays', 'Wednesdays & Fridays', 'Saturdays Only', 'Flexible'];
const times = ['4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM', 'Flexible'];

export default function SubmitRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState(children[0]?.name || '');
  const [grade, setGrade] = useState('Grade 10');
  const [subject, setSubject] = useState('');
  const [learningGoals, setLearningGoals] = useState('');
  const [schedule, setSchedule] = useState('Tuesdays & Thursdays');
  const [preferredTime, setPreferredTime] = useState('4:00 PM - 5:00 PM');
  const [sessionType, setSessionType] = useState<'Online' | 'In-Person'>('Online');
  const [notes, setNotes] = useState('');

  const tutor = tutors.find(t => t.id === id);

  return (
    <div className="flex-1 overflow-y-auto">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 h-16 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </header>

      <div className="max-w-[800px] mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Submit Tutoring Request</h1>
          <p className="text-sm text-gray-500 mt-1">
            {tutor ? `Request tutoring session with ${tutor.name}` : 'Fill in the details below to request tutoring.'}
          </p>
          <p className="text-xs text-gray-400 mt-1">Step 3 of 4: Provide Details</p>
        </div>

        <div className="bg-white rounded-xl shadow-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Student Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Child</label>
                  <div className="relative">
                    <select
                      value={child}
                      onChange={(e) => setChild(e.target.value)}
                      className="w-full appearance-none pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      {children.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Grade Level</label>
                  <div className="relative">
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full appearance-none pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      {grades.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject Needed</label>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full appearance-none pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Learning Goals</label>
                  <textarea
                    value={learningGoals}
                    onChange={(e) => setLearningGoals(e.target.value)}
                    placeholder="What do you want to achieve?"
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Session Preferences */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Session Preferences
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Schedule</label>
                  <div className="relative">
                    <select
                      value={schedule}
                      onChange={(e) => setSchedule(e.target.value)}
                      className="w-full appearance-none pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      {schedules.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
                  <div className="relative">
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full appearance-none pl-3 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      {times.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Session Type</label>
                  <div className="flex gap-3">
                    {(['Online', 'In-Person'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setSessionType(type)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          sessionType === type
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Monitor className="w-4 h-4" />
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requirements or notes for the tutor?"
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <button
              onClick={() => {
                alert('Tutoring request submitted for review!');
                navigate('/requests');
              }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Review Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
