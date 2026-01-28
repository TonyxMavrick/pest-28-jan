import { useParams, Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Shield, Phone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  // Service data - in a real app, this would come from an API or database
  const serviceData: Record<string, any> = {
    'general-pest-control': {
      title: 'General Pest Control',
      hero: 'https://images.unsplash.com/photo-1628560230129-6e72750b447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHRlY2huaWNpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Our comprehensive general pest control program provides year-round protection against the most common household pests including ants, spiders, silverfish, earwigs, and more.',
      signs: [
        'Visible pests crawling around your home',
        'Pest droppings or evidence of nesting',
        'Unexplained property damage',
        'Unusual sounds in walls or ceilings',
        'Unpleasant odors'
      ],
      process: [
        { title: 'Inspection', description: 'Thorough examination of your property to identify pest activity and entry points' },
        { title: 'Treatment Plan', description: 'Custom treatment strategy tailored to your specific pest problems' },
        { title: 'Application', description: 'Professional application of EPA-approved products inside and outside your home' },
        { title: 'Follow-up', description: 'Regular service visits to maintain protection and address any new concerns' }
      ],
      safety: 'All products used are EPA-registered and safe when applied according to label directions. We use low-toxicity materials and Integrated Pest Management techniques to minimize chemical use.',
      whyChoose: [
        'Guaranteed results or your money back',
        'Free re-services between scheduled visits',
        'Experienced, licensed technicians',
        'Flexible scheduling including weekends',
        'Eco-friendly treatment options'
      ]
    },
    'termite-control': {
      title: 'Termite Control',
      hero: 'https://images.unsplash.com/photo-1767082090928-f2eeef2270f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYW1pbHklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5MDg2MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Protect your biggest investment from costly termite damage. Our termite control program includes comprehensive inspections, advanced treatment options, and ongoing monitoring.',
      signs: [
        'Mud tubes along foundation walls',
        'Hollow-sounding wood',
        'Discarded wings near windows and doors',
        'Visible termite swarms',
        'Sagging floors or ceilings',
        'Tight-fitting doors and windows'
      ],
      process: [
        { title: 'Free Inspection', description: 'Complete termite inspection including crawl spaces and attics' },
        { title: 'Damage Assessment', description: 'Detailed report of any existing termite damage and activity' },
        { title: 'Treatment Options', description: 'Choice of liquid treatments, bait systems, or fumigation based on your needs' },
        { title: 'Annual Monitoring', description: 'Regular inspections to ensure your home remains termite-free' }
      ],
      safety: 'Termiticides are applied by trained professionals using the latest application techniques. Products are contained underground or in protected bait stations.',
      whyChoose: [
        'Free termite inspections',
        'Transferable warranties available',
        'Advanced detection technology',
        'Multiple treatment options',
        'Repair referrals if needed'
      ]
    },
    'rodent-control': {
      title: 'Rodent Control',
      hero: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY5MDY2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Effective, humane rodent control that eliminates current infestations and prevents future problems through exclusion and sanitation recommendations.',
      signs: [
        'Droppings in cabinets or along walls',
        'Gnaw marks on food packages or structures',
        'Scratching sounds in walls or attic',
        'Greasy rub marks along walls',
        'Nests made of shredded material',
        'Unpleasant musky odor'
      ],
      process: [
        { title: 'Inspection', description: 'Thorough inspection to identify rodent activity and entry points' },
        { title: 'Trapping & Removal', description: 'Strategic trap placement for effective rodent elimination' },
        { title: 'Exclusion', description: 'Seal entry points to prevent future infestations' },
        { title: 'Sanitation', description: 'Recommendations for reducing attractants and harborage areas' }
      ],
      safety: 'All rodent control methods are safe for use around children and pets when following our technicians\' guidelines. Bait stations are tamper-resistant.',
      whyChoose: [
        'Humane trapping methods',
        'Entry point sealing services',
        'Attic cleanup and sanitation',
        'Prevention recommendations',
        'Emergency response available'
      ]
    },
    'bed-bug-treatment': {
      title: 'Bed Bug Treatment',
      hero: 'https://images.unsplash.com/photo-1581580059884-4701fefd22cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zcGVjdGlvbiUyMHNhZmV0eXxlbnwxfHx8fDE3NjkxMDE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Comprehensive bed bug elimination using proven methods including heat treatments, chemical applications, and monitoring devices to ensure complete eradication.',
      signs: [
        'Small blood stains on sheets',
        'Dark spots (bed bug excrement) on bedding',
        'Live bed bugs in mattress seams',
        'Shed skins or egg shells',
        'Itchy red bite marks in clusters',
        'Sweet musty odor'
      ],
      process: [
        { title: 'Inspection', description: 'Detailed inspection of all rooms to determine extent of infestation' },
        { title: 'Preparation', description: 'Guidance on preparing your home for treatment' },
        { title: 'Treatment', description: 'Heat treatment or chemical application based on your preference' },
        { title: 'Follow-up', description: 'Multiple visits to ensure complete elimination' }
      ],
      safety: 'Heat treatments are chemical-free and eliminate all life stages. Chemical treatments use EPA-registered products applied by certified technicians.',
      whyChoose: [
        'Heat treatment option available',
        'Guaranteed elimination',
        'Mattress encasement services',
        'Detailed preparation checklist',
        'Follow-up inspections included'
      ]
    },
    'mosquito-control': {
      title: 'Mosquito Control',
      hero: 'https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjkwNzY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Take back your outdoor living spaces with our effective mosquito control program. We treat your yard to significantly reduce mosquito populations.',
      signs: [
        'High mosquito activity in yard',
        'Standing water around property',
        'Difficulty enjoying outdoor spaces',
        'Multiple mosquito bites',
        'Mosquitoes entering your home'
      ],
      process: [
        { title: 'Property Assessment', description: 'Identify mosquito breeding sites and resting areas' },
        { title: 'Barrier Treatment', description: 'Apply residual treatment to vegetation and surfaces' },
        { title: 'Larvicide Application', description: 'Treat standing water sources to prevent breeding' },
        { title: 'Ongoing Service', description: 'Regular monthly treatments throughout mosquito season' }
      ],
      safety: 'Products break down quickly in sunlight and are safe for use around children and pets after drying. We also offer botanical options.',
      whyChoose: [
        'Up to 90% reduction in mosquitoes',
        'Monthly treatment program',
        'Special event spraying available',
        'Breeding site identification',
        'Botanical options available'
      ]
    },
    'ant-control': {
      title: 'Ant Control',
      hero: 'https://images.unsplash.com/photo-1628560230129-6e72750b447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHRlY2huaWNpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Specialized ant control targeting all common ant species. We eliminate existing colonies and create barriers to prevent future invasions.',
      signs: [
        'Trails of ants in your home',
        'Ant mounds in yard',
        'Wood shavings (carpenter ants)',
        'Ants in kitchen or bathroom',
        'Winged ants (swarmers)'
      ],
      process: [
        { title: 'Species Identification', description: 'Identify ant species to determine best treatment approach' },
        { title: 'Colony Location', description: 'Locate nest sites both inside and outside your home' },
        { title: 'Treatment', description: 'Apply baits, sprays, or granules based on ant species' },
        { title: 'Prevention', description: 'Create protective barriers and eliminate attractants' }
      ],
      safety: 'Ant baits are contained in child-resistant stations. Treatments are applied in targeted areas to minimize exposure.',
      whyChoose: [
        'Species-specific treatments',
        'Colony elimination guaranteed',
        'Interior and exterior treatment',
        'Prevention recommendations',
        'Fast-acting results'
      ]
    },
    'cockroach-control': {
      title: 'Cockroach Control',
      hero: 'https://images.unsplash.com/photo-1760561148865-c6efe73a756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNvbW1lcmNpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjkxMDE4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Fast, effective cockroach elimination using professional-grade products and proven techniques. We target roaches at all life stages.',
      signs: [
        'Live or dead roaches',
        'Egg cases in cabinets',
        'Droppings that look like pepper',
        'Musty odor',
        'Shed skins'
      ],
      process: [
        { title: 'Inspection', description: 'Locate harborage and breeding areas' },
        { title: 'Treatment Application', description: 'Apply gel baits, sprays, and dust in targeted areas' },
        { title: 'Sanitation Guidance', description: 'Recommendations to eliminate food and water sources' },
        { title: 'Follow-up', description: 'Return visits to ensure complete elimination' }
      ],
      safety: 'Products are applied in cracks, crevices, and out-of-reach areas. Gel baits are placed in discreet locations.',
      whyChoose: [
        'Same-day service available',
        'Guaranteed results',
        'Multiple treatment methods',
        'Sanitation recommendations',
        'Ongoing prevention program'
      ]
    },
    'commercial-pest-control': {
      title: 'Commercial Pest Control',
      hero: 'https://images.unsplash.com/photo-1760561148865-c6efe73a756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNvbW1lcmNpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjkxMDE4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      overview: 'Professional pest management for businesses of all sizes. Customized programs designed to meet industry regulations and maintain your reputation.',
      signs: [
        'Pest sightings by staff or customers',
        'Failed health inspections',
        'Product contamination',
        'Structural damage',
        'Pest-related complaints'
      ],
      process: [
        { title: 'Site Assessment', description: 'Comprehensive evaluation of your facility and operations' },
        { title: 'Custom Program', description: 'Tailored pest management plan for your industry' },
        { title: 'Scheduled Service', description: 'Regular service visits at times convenient for your business' },
        { title: 'Documentation', description: 'Detailed service reports for your records and inspections' }
      ],
      safety: 'All treatments comply with OSHA regulations and are safe for use in occupied commercial spaces. Minimal disruption to business operations.',
      whyChoose: [
        'Industry-specific expertise',
        'Discreet, professional service',
        'Flexible scheduling',
        'Detailed documentation',
        '24/7 emergency response'
      ]
    }
  };

  const service = serviceData[serviceSlug || ''] || serviceData['general-pest-control'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src={service.hero}
          alt={service.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl">Professional, Effective, Guaranteed</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-6">Service Overview</h2>
          <p className="text-lg text-gray-600">{service.overview}</p>
        </div>
      </section>

      {/* Signs of Infestation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-6">Signs of Infestation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.signs.map((sign: string, index: number) => (
              <div key={index} className="flex items-start">
                <AlertCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Our Treatment Process</h2>
          <div className="space-y-6">
            {service.process.map((step: any, index: number) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-semibold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start mb-6">
            <Shield className="w-12 h-12 text-emerald-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-3xl mb-4">Safety & Eco-Friendly Methods</h2>
              <p className="text-lg text-gray-600">{service.safety}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Why Choose PestGuard Pro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whyChoose.map((reason: string, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Schedule Your Service Today</h2>
          <p className="text-xl mb-8">Get fast, professional {service.title.toLowerCase()}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+16517627822"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors text-lg inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1-651-762-7822
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}