import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-teal text-brand-cream py-12 border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-full bg-brand-rose/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-brand-rose" />
              </div>
              <span className="font-serif text-2xl font-semibold text-brand-cream">
                English with Laboni
              </span>
            </Link>
            <p className="text-brand-cream/70 max-w-md leading-relaxed">
              Expert English tuition in Delhi NCR. Building a rock-solid foundation in grammar, reading comprehension, creative writing, and literature analysis.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-6 text-brand-rose">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-brand-cream/70 hover:text-brand-rose transition-colors">About Me</a></li>
              <li><a href="/#services" className="text-brand-cream/70 hover:text-brand-rose transition-colors">Services</a></li>
              <li><a href="/#why-me" className="text-brand-cream/70 hover:text-brand-rose transition-colors">Why Choose Me</a></li>
              <li><Link to="/blog" className="text-brand-cream/70 hover:text-brand-rose transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-6 text-brand-rose">Contact</h4>
            <ul className="space-y-4 text-brand-cream/70">
              <li>Delhi NCR</li>
              <li><a href="tel:9599663831" className="hover:text-brand-rose transition-colors">9599663831</a></li>
              <li><a href="mailto:laboniatwork@gmail.com" className="hover:text-brand-rose transition-colors break-all">laboniatwork@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-cream/50">
          <p>&copy; {new Date().getFullYear()} English with Laboni. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
