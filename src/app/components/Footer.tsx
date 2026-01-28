import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <div>
                <h3 className="font-black text-xl text-white">PestGuard Pro</h3>
              </div>
            </div>
            <p className="text-sm mb-4">
              Professional pest control services for residential and commercial properties. 
              Protecting your space with safe, effective solutions since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/general-pest-control" className="hover:text-emerald-500 transition-colors">General Pest Control</Link></li>
              <li><Link to="/services/termite-control" className="hover:text-emerald-500 transition-colors">Termite Control</Link></li>
              <li><Link to="/services/rodent-control" className="hover:text-emerald-500 transition-colors">Rodent Control</Link></li>
              <li><Link to="/services/bed-bug-treatment" className="hover:text-emerald-500 transition-colors">Bed Bug Treatment</Link></li>
              <li><Link to="/services/commercial-pest-control" className="hover:text-emerald-500 transition-colors">Commercial Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Pest Control Ave,<br />Safety City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+16517627822" className="text-sm hover:text-emerald-500">+1-651-762-7822</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@pestguardpro.com" className="text-sm hover:text-emerald-500">info@pestguardpro.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM<br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-white font-semibold mb-4">Service Areas</h4>
          <p className="text-sm">
            We proudly serve: Downtown, Westside, Eastside, Northgate, Southpark, 
            Riverside, Hillcrest, and surrounding areas within 50 miles.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {new Date().getFullYear()} PestGuard Pro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm hover:text-emerald-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-sm hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}