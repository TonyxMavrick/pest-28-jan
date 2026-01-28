import { Shield, Users, Target, Award, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-600" />,
      title: 'Safety First',
      description: 'We prioritize the safety of your family, pets, and the environment in every service we provide.',
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our top priority. We work closely with you to meet your specific needs.',
    },
    {
      icon: <Target className="w-10 h-10 text-emerald-600" />,
      title: 'Quality Service',
      description: 'We use the latest technology and techniques to deliver superior pest control results.',
    },
    {
      icon: <Award className="w-10 h-10 text-emerald-600" />,
      title: 'Professional Excellence',
      description: 'Our certified technicians undergo continuous training to stay ahead of industry standards.',
    },
  ];

  const certifications = [
    'EPA Certified',
    'State Licensed',
    'Fully Insured',
    'NPMA Member',
    'BBB Accredited',
    'Green Pro Certified',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjkwNzY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="About Us"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">About PestGuard Pro</h1>
            <p className="text-xl md:text-2xl">Your Trusted Pest Control Partner Since 2010</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2010, PestGuard Pro began with a simple mission: to provide safe, effective, 
                and eco-friendly pest control solutions to our community. What started as a small family 
                business has grown into one of the region's most trusted pest control companies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, we've served thousands of residential and commercial clients, always 
                maintaining our commitment to quality service and customer satisfaction. Our success is 
                built on trust, expertise, and a genuine care for the well-being of our customers.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to lead the industry with innovative pest management solutions while 
                staying true to our core values of safety, integrity, and excellence.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY5MDY2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To protect homes and businesses from pests using safe, effective, and environmentally 
                responsible methods while delivering exceptional customer service and building lasting 
                relationships with our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the leading pest control company recognized for innovation, sustainability, and 
                unwavering commitment to customer satisfaction. We envision a pest-free world where 
                everyone enjoys peace of mind in their spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Safety Standards</h2>
            <p className="text-xl text-gray-600">Your safety is our highest priority</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">
                    All treatments are EPA-approved and safe for use around children and pets
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">
                    Our technicians follow strict safety protocols and wear appropriate protective equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">
                    We use Integrated Pest Management (IPM) strategies to minimize chemical use
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">
                    Detailed safety instructions and material safety data sheets provided for all treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-600">
                    Regular safety training and certification updates for all team members
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581580059884-4701fefd22cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zcGVjdGlvbiUyMHNhZmV0eXxlbnwxfHx8fDE3NjkxMDE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Safety standards"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Certifications & Licenses</h2>
            <p className="text-xl text-gray-600">Fully licensed and certified for your peace of mind</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">15+</div>
              <p className="text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">10,000+</div>
              <p className="text-lg">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">50+</div>
              <p className="text-lg">Certified Technicians</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">99%</div>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
