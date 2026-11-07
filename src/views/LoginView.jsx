import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function LoginView() {
  const { setCurrentScreen, setState } = useApp();
  const [email, setEmail] = useState('emily@roomies.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setError('');
    setState((prev) => ({ ...prev, isLoggedIn: true }));
    setCurrentScreen('home');
  };

  const handleDemoFill = () => {
    setEmail('emily@roomies.com');
    setPassword('secret123');
    setError('');
    setState((prev) => ({ ...prev, isLoggedIn: true }));
    setCurrentScreen('home');
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 bg-white py-10 select-none">
      {/* Brand Logo & Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full border-2 border-[#00a6f4] flex items-center justify-center text-[#00a6f4] mb-4 shadow-xs">
          <X className="w-8 h-8 stroke-[2.5]" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          RoomieSplit
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Simple bills, happy roommates
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full px-4 py-3.5 bg-slate-50/70 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:outline-none focus:border-[#00a6f4] focus:bg-white transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your password"
            className={`w-full px-4 py-3.5 bg-slate-50/70 rounded-2xl text-slate-900 text-sm focus:outline-none transition ${
              error
                ? 'border border-red-500 bg-red-50/20'
                : 'border border-slate-200 focus:border-[#00a6f4] focus:bg-white'
            }`}
          />
          {error && (
            <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#00a6f4] text-white font-bold text-base shadow-sm hover:bg-[#0092d8] active:scale-[0.98] transition cursor-pointer mt-2"
        >
          Log In
        </button>

        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={handleDemoFill}
            className="text-xs text-[#00a6f4] font-semibold hover:underline"
          >
            Quick 1-Click Login as Emily (Test Mode)
          </button>
        </div>
      </form>
    </div>
  );
}
