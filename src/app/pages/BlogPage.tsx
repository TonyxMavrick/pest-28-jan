import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'prevent-termites',
      image: 'https://images.unsplash.com/photo-1581580059884-4701fefd22cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW5zcGVjdGlvbiUyMHNhZmV0eXxlbnwxfHx8fDE3NjkxMDE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'How to Prevent Termites at Home',
      excerpt: 'Learn the essential steps to protect your home from costly termite damage before it starts. Prevention is always better than cure.',
      author: 'John Smith',
      date: 'January 15, 2026',
      category: 'Prevention',
    },
    {
      id: 2,
      slug: 'bed-bug-signs',
      image: 'https://images.unsplash.com/photo-1628560230129-6e72750b447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHRlY2huaWNpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Signs of Bed Bug Infestation',
      excerpt: 'Discover the telltale signs of bed bugs and when to call professional help. Early detection is key to effective treatment.',
      author: 'Sarah Johnson',
      date: 'January 10, 2026',
      category: 'Identification',
    },
    {
      id: 3,
      slug: 'eco-friendly-methods',
      image: 'https://images.unsplash.com/photo-1767082090928-f2eeef2270f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYW1pbHklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5MDg2MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Eco-Friendly Pest Control Methods',
      excerpt: 'Explore safe, environmentally friendly pest control solutions for your home. Protect your family and the planet.',
      author: 'Mike Davis',
      date: 'January 5, 2026',
      category: 'Green Solutions',
    },
    {
      id: 4,
      slug: 'ant-prevention-tips',
      image: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY5MDY2NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '10 Tips to Keep Ants Out of Your Kitchen',
      excerpt: 'Simple, effective strategies to prevent ant invasions in your kitchen. Keep your food safe and your counters clean.',
      author: 'Emily Rodriguez',
      date: 'December 28, 2025',
      category: 'Prevention',
    },
    {
      id: 5,
      slug: 'mosquito-season-prep',
      image: 'https://images.unsplash.com/photo-1645220127753-e9282320bb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjkwNzY2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Preparing for Mosquito Season',
      excerpt: 'Get your yard ready for mosquito season with these expert tips. Enjoy your outdoor spaces bite-free.',
      author: 'David Chen',
      date: 'December 20, 2025',
      category: 'Seasonal',
    },
    {
      id: 6,
      slug: 'rodent-proofing-home',
      image: 'https://images.unsplash.com/photo-1760561148865-c6efe73a756a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGNvbW1lcmNpYWwlMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NjkxMDE4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Rodent-Proofing Your Home for Winter',
      excerpt: 'As temperatures drop, rodents seek warm shelter. Learn how to keep them out of your home this winter.',
      author: 'John Smith',
      date: 'December 15, 2025',
      category: 'Prevention',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Pest Control Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tips, insights, and expert advice on pest control and prevention
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl mb-3 hover:text-emerald-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest pest control tips and updates delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
