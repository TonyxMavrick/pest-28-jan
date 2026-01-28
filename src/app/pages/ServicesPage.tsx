import { Link } from 'react-router-dom';
import { Bug, Home, Building, Droplet, ChevronRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: <Bug className="w-16 h-16 text-emerald-600" />,
      title: 'General Pest Control',
      description: 'Comprehensive protection against common household pests including ants, spiders, silverfish, and more. Our general pest control program provides year-round protection.',
      features: ['Monthly/Quarterly Plans', 'Interior & Exterior Treatment', 'Guaranteed Results', 'Eco-Friendly Options'],
      link: '/services/general-pest-control',
    },
    {
      icon: <Home className="w-16 h-16 text-emerald-600" />,
      title: 'Termite Control',
      description: 'Advanced termite detection and elimination using liquid treatments, bait systems, and fumigation. Protect your property investment from costly termite damage.',
      features: ['Free Inspection', 'Damage Assessment', 'Treatment Options', 'Annual Monitoring'],
      link: '/services/termite-control',
    },
    {
      icon: <Bug className="w-16 h-16 text-emerald-600" />,
      title: 'Cockroach Control',
      description: 'Targeted treatments to eliminate cockroach infestations using gel baits, residual sprays, and growth regulators. Prevent health risks and contamination.',
      features: ['Same-Day Service', 'Guaranteed Elimination', 'Sanitation Advice', 'Follow-up Visits'],
      link: '/services/cockroach-control',
    },
    {
      icon: <Bug className="w-16 h-16 text-emerald-600" />,
      title: 'Rodent Control',
      description: 'Humane and effective rodent removal and exclusion services. We identify entry points, remove existing rodents, and prevent future infestations.',
      features: ['Inspection & Assessment', 'Trapping & Removal', 'Entry Point Sealing', 'Attic Cleanup'],
      link: '/services/rodent-control',
    },
    {
      icon: <Bug className="w-16 h-16 text-emerald-600" />,
      title: 'Bed Bug Treatment',
      description: 'Thorough bed bug elimination using a combination of heat treatments, chemical applications, and monitoring devices. Get rid of bed bugs for good.',
      features: ['Heat Treatment', 'Chemical Options', 'Mattress Encasements', 'Follow-up Inspections'],
      link: '/services/bed-bug-treatment',
    },
    {
      icon: <Droplet className="w-16 h-16 text-emerald-600" />,
      title: 'Mosquito Control',
      description: 'Outdoor mosquito treatments for your yard and outdoor living spaces. Enjoy your outdoor areas without the annoyance and health risks of mosquitoes.',
      features: ['Barrier Treatments', 'Larvicide Applications', 'Monthly Service', 'Special Event Spraying'],
      link: '/services/mosquito-control',
    },
    {
      icon: <Bug className="w-16 h-16 text-emerald-600" />,
      title: 'Ant Control',
      description: 'Specialized ant control for all species including carpenter ants, fire ants, and sugar ants. We eliminate colonies and prevent future invasions.',
      features: ['Species Identification', 'Colony Elimination', 'Perimeter Protection', 'Ongoing Prevention'],
      link: '/services/ant-control',
    },
    {
      icon: <Building className="w-16 h-16 text-emerald-600" />,
      title: 'Commercial Pest Control',
      description: 'Professional pest management for businesses including offices, restaurants, hotels, and retail spaces. Customized programs to meet industry regulations.',
      features: ['Custom Programs', 'Discreet Service', 'Documentation', '24/7 Emergency'],
      link: '/services/commercial-pest-control',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive pest control solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-emerald-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-6">
                  <div className="mr-6">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl mb-3">{service.title}</h2>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Service Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our pest control experts are here to help you find the perfect solution for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+16517627822"
              className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-300 transition-colors text-lg"
            >
              Call +1-651-762-7822
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}