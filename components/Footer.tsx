import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                HT
              </div>
              <span className="font-bold text-xl">Healing Touch</span>
            </div>
            <p className="text-slate-400 mb-6">
              A secondary care hospital dedicated to providing quality and affordable healthcare services to the people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Emergency Medicine</li>
              <li className="text-slate-400">Intensive Care</li>
              <li className="text-slate-400">Surgery</li>
              <li className="text-slate-400">Paediatrics</li>
              <li className="text-slate-400">Pharmacy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span>42 Oludegun Avenue, Ire-Akari Estate Rd, Oshodi-Isolo, Lagos 100263</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>08036296451</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Healing Touch Hospital. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/admin" className="text-slate-500 hover:text-white text-sm transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
