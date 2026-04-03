'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone, FileText, CheckCircle } from 'lucide-react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 503) {
          alert('Database is not configured yet. Please set up POSTGRES_URL in your environment.');
        } else {
          alert('Failed to book appointment: ' + (data.error || 'Unknown error'));
        }
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', date: '', time: '', department: '', reason: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book an Appointment</h1>
          <p className="text-lg text-slate-600">
            Schedule a visit with our experienced medical professionals.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Appointment Requested!</h2>
              <p className="text-slate-600 mb-8">
                Thank you for choosing Healing Touch Hospital. Our team will contact you shortly to confirm your appointment.
              </p>
              <button 
                onClick={() => setSubmitStatus('idle')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="08036296451"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" /> Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                <select
                  id="department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a Department</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Paediatrics">Paediatrics</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Health Assessment">Health Assessment Clinic</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" /> Reason for Visit
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Briefly describe your symptoms or reason for appointment"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 text-lg shadow-lg shadow-blue-200"
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Appointment Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
