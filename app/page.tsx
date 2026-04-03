import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Clock, Shield, Heart, Activity, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/hospital/1920/1080"
            alt="Hospital Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Welcome to Healing Touch Hospital</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Healing Hands, <br className="hidden md:block" />
                <span className="text-blue-600">Caring Hearts</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                A secondary care hospital dedicated to providing quality and affordable healthcare services to the people. Driven by our passion for quality healthcare since September 8.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href="tel:08036296451"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-50 border border-blue-100 transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                      <Image src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Patient" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">4.9/5 from 62 reviews</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://picsum.photos/seed/doctor/800/600"
                  alt="Doctor with patient"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Availability</p>
                  <p className="text-lg font-bold text-slate-900">24/7 Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Availability</h3>
              <p className="text-slate-600">Round-the-clock medical care and emergency services when you need them most.</p>
            </div>
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Facilities</h3>
              <p className="text-slate-600">State-of-the-art medical equipment and a clean, serene environment for optimal recovery.</p>
            </div>
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Staff</h3>
              <p className="text-slate-600">Highly skilled doctors, nurses, and specialists dedicated to patient-centered care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <Image src="https://picsum.photos/seed/surgery/400/400" alt="Surgery" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <Image src="https://picsum.photos/seed/ward/400/400" alt="Hospital Ward" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <Image src="https://picsum.photos/seed/nurse/400/400" alt="Nurse" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center aspect-square shadow-lg">
                    <h4 className="text-4xl font-bold mb-2">10+</h4>
                    <p className="text-blue-100 font-medium">Years of Excellence in Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Providing Evidence-Based, Patient-Centered Care</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Healing Touch Hospital is a guideline and protocol-driven hospital. We provide evidence-based, patient-centered primary and secondary healthcare services of the highest standard with integrity.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are often sought out for honest, professional second opinions. Our passion for quality healthcare drives everything we do.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Professional healthcare staff',
                  'Clean and serene environment',
                  'Compassionate patient care'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn more about us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Medical Assistance?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our emergency services are available 24/7. Don&apos;t hesitate to reach out to us for immediate medical attention.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:08036296451" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors">
              <Phone className="w-5 h-5" />
              Call 08036296451
            </a>
            <Link href="/contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors border border-blue-500">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
