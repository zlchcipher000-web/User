import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1a1f3c] flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-12">
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">EduFund</h2>
          <p className="text-lg text-gray-300 mb-2">Quality tutoring for your child</p>
          <p className="text-sm text-gray-400 max-w-sm mx-auto">
            Connect with verified university student tutors and help your child excel academically.
          </p>
          <img
            src="/assets/illustrations/asset_1.jpg"
            alt="Learning illustration"
            className="mt-10 rounded-2xl w-80 h-48 object-cover mx-auto opacity-90"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EduFund</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Parent / Student Portal</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
              <p className="text-sm text-gray-500 mt-1">Sign in to your parent or student account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button className="text-primary font-medium hover:underline">Sign up</button>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
