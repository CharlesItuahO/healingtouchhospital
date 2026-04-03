'use client';

import { useState, useEffect } from 'react';
import { Lock, User, Calendar, MessageSquare, CheckCircle, Clock, Trash2, LogOut, Phone } from 'lucide-react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'appointments' | 'messages'>('appointments');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const loadData = async () => {
    try {
      const [appRes, msgRes] = await Promise.all([
        fetch('/api/appointments'),
        fetch('/api/messages')
      ]);

      if (appRes.status === 503 || msgRes.status === 503) {
        setError('Database is not configured yet. Please set up POSTGRES_URL in Vercel.');
        return;
      }

      const appointmentsData = await appRes.json();
      const messagesData = await msgRes.json();

      setAppointments(appointmentsData);
      setMessages(messagesData);
    } catch (err) {
      console.error('Failed to load data:', err);
      setError('Failed to connect to the database.');
    }
  };

  useEffect(() => {
    // Check if already logged in via sessionStorage
    if (sessionStorage.getItem('ht_admin_logged_in') === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoggedIn(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded credentials for demo purposes
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      sessionStorage.setItem('ht_admin_logged_in', 'true');
      loadData();
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('ht_admin_logged_in');
    setUsername('');
    setPassword('');
  };

  const updateAppointmentStatus = async (id: number, status: string) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        const updated = appointments.map(app => app.id === id ? { ...app, status } : app);
        setAppointments(updated);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAppointment = async (id: number) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      try {
        const res = await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
        if (res.ok) {
          setAppointments(appointments.filter(app => app.id !== id));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const markMessageRead = async (id: number) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'read' })
      });
      if (res.ok) {
        setMessages(messages.map(msg => msg.id === id ? { ...msg, status: 'read' } : msg));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        const res = await fetch(`/api/messages/${id}`, { method: 'DELETE' });
        if (res.ok) {
          setMessages(messages.filter(msg => msg.id !== id));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              HT
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Sign in to manage appointments and messages
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-100">
            <form className="space-y-6" onSubmit={handleLogin}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3 border outline-none"
                    placeholder="admin"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-3 border outline-none"
                    placeholder="admin123"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-slate-900">Healing Touch Admin</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`py-4 px-6 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'appointments'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Appointments
            <span className="bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs ml-2">
              {appointments.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`py-4 px-6 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'messages'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Messages
            <span className="bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs ml-2">
              {messages.length}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {activeTab === 'appointments' && (
            <div className="divide-y divide-slate-200">
              {appointments.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No appointments found.</div>
              ) : (
                appointments.map((app) => (
                  <div key={app.id} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">{app.name}</h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            app.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                            app.status === 'completed' ? 'bg-slate-100 text-slate-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-slate-400" /> {app.phone}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400" /> {app.date} at {app.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" /> Dept: {app.department}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" /> Requested: {new Date(app.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-md text-sm text-slate-700 border border-slate-100">
                          <span className="font-semibold">Reason:</span> {app.reason}
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col gap-2 justify-start md:justify-center">
                        {app.status === 'pending' && (
                          <button
                            onClick={() => updateAppointmentStatus(app.id, 'confirmed')}
                            className="flex items-center justify-center gap-1 bg-green-50 text-green-600 hover:bg-green-100 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-green-200"
                          >
                            <CheckCircle className="w-4 h-4" /> Confirm
                          </button>
                        )}
                        {app.status === 'confirmed' && (
                          <button
                            onClick={() => updateAppointmentStatus(app.id, 'completed')}
                            className="flex items-center justify-center gap-1 bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-slate-200"
                          >
                            <CheckCircle className="w-4 h-4" /> Mark Completed
                          </button>
                        )}
                        <button
                          onClick={() => deleteAppointment(app.id)}
                          className="flex items-center justify-center gap-1 bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="divide-y divide-slate-200">
              {messages.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No messages found.</div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className={`p-6 transition-colors ${msg.status === 'unread' ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">{msg.name}</h3>
                          {msg.status === 'unread' && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-slate-400" /> {msg.phone}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" /> {new Date(msg.date).toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-md text-sm text-slate-700 border border-slate-200 shadow-sm">
                          {msg.message}
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col gap-2 justify-start md:justify-center">
                        {msg.status === 'unread' && (
                          <button
                            onClick={() => markMessageRead(msg.id)}
                            className="flex items-center justify-center gap-1 bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-slate-200"
                          >
                            <CheckCircle className="w-4 h-4" /> Mark Read
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="flex items-center justify-center gap-1 bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-md text-sm font-medium transition-colors border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
