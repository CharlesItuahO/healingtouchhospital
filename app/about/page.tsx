import Image from 'next/image';
import { Target, Eye, Heart, Shield, Users, Award, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Healing Touch Hospital</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are a guideline and protocol-driven hospital providing evidence-based, patient-centered primary and secondary healthcare services of the highest standard with integrity.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our mission is to provide safe, timely, evidence-based and patient-centered healthcare.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our Vision is to redefine healthcare in Nigeria.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We are often sought out for honest, professional second opinions. Here is why patients trust us with their health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Highly Skilled Professionals', desc: 'Our team comprises experienced doctors, nurses, and specialists.' },
              { icon: Heart, title: 'Compassionate Care', desc: 'We treat every patient with empathy, respect, and dignity.' },
              { icon: Shield, title: 'Clean & Odor-Free', desc: 'We maintain the highest standards of hygiene and cleanliness.' },
              { icon: Award, title: 'Modern Equipment', desc: 'State-of-the-art medical technology for accurate diagnosis and treatment.' },
              { icon: Star, title: 'Excellent Satisfaction', desc: 'Our patients consistently rate us highly for our quality of care.' },
              { icon: Target, title: 'Patient-Centered', desc: 'Your health, comfort, and recovery are our primary focus.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://picsum.photos/seed/hospital1/800/600" alt="Hospital Facility" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://picsum.photos/seed/hospital5/800/600" alt="Medical Staff" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="https://picsum.photos/seed/hospital3/800/600" alt="Patient Care" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  );
}
