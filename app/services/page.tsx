import { Activity, HeartPulse, Stethoscope, Pill, Baby, FlaskConical, Syringe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: HeartPulse,
      title: 'Emergency Medicine',
      description: '24/7 rapid response and critical care for medical emergencies, accidents, and trauma.',
    },
    {
      icon: Activity,
      title: 'Intensive Care Medicine',
      description: 'Advanced life support and monitoring for critically ill patients in our state-of-the-art ICU.',
    },
    {
      icon: Syringe,
      title: 'Surgery',
      description: 'Comprehensive surgical services including general, orthopedic, and specialized procedures.',
    },
    {
      icon: Stethoscope,
      title: 'Health Assessment Clinic',
      description: 'Thorough medical check-ups, preventive screenings, and wellness evaluations.',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: 'Fully stocked in-house pharmacy providing authentic medications and expert consultation.',
    },
    {
      icon: Baby,
      title: 'Paediatrics',
      description: 'Specialized medical care for infants, children, and adolescents by experienced pediatricians.',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory',
      description: 'Accurate and timely diagnostic testing using modern laboratory equipment.',
    },
  ];

  return (
    <div className="py-12 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a comprehensive range of medical services designed to meet the healthcare needs of our community with excellence and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
