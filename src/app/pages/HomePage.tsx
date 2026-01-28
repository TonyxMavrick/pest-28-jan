import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {
  Shield,
  Leaf,
  Clock,
  Award,
  Bug,
  Home as HomeIcon,
  Building,
  Droplet,
  ChevronRight,
  Star,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1628560230129-6e72750b447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHRlY2huaWNpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Safe & Effective Pest Control Solutions',
      description: 'Professional pest control services for your home and business',
    },
    {
      image: 'https://images.unsplash.com/photo-1765970101489-57790a3288c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGhvbWUlMjBmYW1pbHl8ZW58MXx8fHwxNzY5MTAyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Protect Your Home & Family',
      description: 'Eco-friendly treatments that keep your loved ones safe',
    },
    {
      image: 'https://images.unsplash.com/photo-1580741753044-b3f303ad361b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjkxMDI3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Commercial Pest Management',
      description: 'Comprehensive pest solutions for businesses of all sizes',
    },
  ];

  const trustSignals = [
    {
      icon: <Shield className="w-10 h-10 text-emerald-600" />,
      title: 'Licensed & Insured',
      description: 'Fully certified and insured for your peace of mind',
    },
    {
      icon: <Leaf className="w-10 h-10 text-emerald-600" />,
      title: 'Eco-Friendly Solutions',
      description: 'Safe, green treatments that protect the environment',
    },
    {
      icon: <Clock className="w-10 h-10 text-emerald-600" />,
      title: 'Same-Day Service',
      description: 'Fast response times for urgent pest problems',
    },
    {
      icon: <Award className="w-10 h-10 text-emerald-600" />,
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with a money-back guarantee',
    },
  ];

  const services = [
    {
      icon: <Bug className="w-12 h-12 text-emerald-600" />,
      title: 'General Pest Control',
      description: 'Comprehensive protection against common household pests including ants, spiders, and more.',
      link: '/services/general-pest-control',
    },
    {
      icon: <HomeIcon className="w-12 h-12 text-emerald-600" />,
      title: 'Termite Control',
      description: 'Advanced termite detection and elimination to protect your property investment.',
      link: '/services/termite-control',
    },
    {
      icon: <Bug className="w-12 h-12 text-emerald-600" />,
      title: 'Cockroach Control',
      description: 'Targeted treatments to eliminate cockroach infestations and prevent future problems.',
      link: '/services/cockroach-control',
    },
    {
      icon: <Bug className="w-12 h-12 text-emerald-600" />,
      title: 'Rodent Control',
      description: 'Humane and effective rodent removal and exclusion services.',
      link: '/services/rodent-control',
    },
    {
      icon: <Bug className="w-12 h-12 text-emerald-600" />,
      title: 'Bed Bug Treatment',
      description: 'Thorough bed bug elimination using heat and chemical treatments.',
      link: '/services/bed-bug-treatment',
    },
    {
      icon: <Droplet className="w-12 h-12 text-emerald-600" />,
      title: 'Mosquito Control',
      description: 'Outdoor mosquito treatments to make your yard enjoyable again.',
      link: '/services/mosquito-control',
    },
    {
      icon: <Bug className="w-12 h-12 text-emerald-600" />,
      title: 'Ant Control',
      description: 'Specialized ant control for all species including carpenter and fire ants.',
      link: '/services/ant-control',
    },
    {
      icon: <Building className="w-12 h-12 text-emerald-600" />,
      title: 'Commercial Pest Control',
      description: 'Professional pest management for offices, restaurants, and retail spaces.',
      link: '/services/commercial-pest-control',
    },
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1581580059884-4701fefd22cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zcGVjdGlvbiUyMHNhZmV0eXxlbnwxfHx8fDE3NjkxMDE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'How to Prevent Termites at Home',
      excerpt: 'Learn the essential steps to protect your home from costly termite damage before it starts.',
      date: 'January 15, 2026',
      link: '/blog/prevent-termites',
    },
    {
      image: 'https://images.unsplash.com/photo-1628560230129-6e72750b447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHRlY2huaWNpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Signs of Bed Bug Infestation',
      excerpt: 'Discover the telltale signs of bed bugs and when to call professional help.',
      date: 'January 10, 2026',
      link: '/blog/bed-bug-signs',
    },
    {
      image: 'https://images.unsplash.com/photo-1767082090928-f2eeef2270f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYW1pbHklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5MDg2MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Eco-Friendly Pest Control Methods',
      excerpt: 'Explore safe, environmentally friendly pest control solutions for your home.',
      date: 'January 5, 2026',
      link: '/blog/eco-friendly-methods',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: 'PestGuard Pro solved our termite problem quickly and professionally. Their team was courteous and thorough. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      location: 'Westside',
      rating: 5,
      text: 'Excellent service! They eliminated our ant problem and provided great tips for prevention. Very satisfied with the results.',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Eastside',
      rating: 5,
      text: 'Fast response time and eco-friendly solutions. They worked around our schedule and were very professional throughout.',
    },
    {
      name: 'David Thompson',
      location: 'Northgate',
      rating: 5,
      text: 'Their commercial pest control service is outstanding. Our restaurant has been pest-free since we started using them.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative">
        <Slider {...sliderSettings} className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">{slide.title}</h2>
                    <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contact"
                        className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg inline-flex items-center justify-center"
                      >
                        Book Inspection
                      </Link>
                      <a
                        href="tel:+16517627822"
                        className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{signal.icon}</div>
                <h3 className="text-xl mb-2">{signal.title}</h3>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions for every situation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">About PestGuard Pro</h2>
              <p className="text-lg text-gray-600 mb-4">
                With over 15 years of experience, PestGuard Pro is your trusted partner in pest control. 
                We combine cutting-edge technology with eco-friendly solutions to provide safe and effective 
                pest management services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified professionals is committed to protecting your property and ensuring 
                your peace of mind. We pride ourselves on exceptional customer service and guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Trained Professionals</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Learn More About Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjkwNzY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Pest Control Tips & Insights</h2>
            <p className="text-xl text-gray-600">Stay informed with our latest articles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={post.link}
                    className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Blogs
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Get your free inspection today and protect your property from pests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
            >
              Get Free Inspection
            </Link>
            <a
              href="tel:+16517627822"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors text-lg inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}