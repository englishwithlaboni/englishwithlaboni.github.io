import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPreview() {
  const posts = [
    {
      title: "Mastering Reading Comprehension: Strategies for Success",
      excerpt: "Discover effective techniques to improve your reading speed, accuracy, and understanding of complex texts.",
      date: "March 15, 2026",
      category: "Study Tips",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Art of Creative Writing: Finding Your Voice",
      excerpt: "Learn how to craft compelling narratives, develop unique characters, and express your ideas with clarity and flair.",
      date: "March 02, 2026",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Analyzing Literature: A Guide for BA Honours Students",
      excerpt: "A deep dive into critical theory, literary devices, and how to structure a winning academic essay.",
      date: "February 18, 2026",
      category: "Literature",
      image: "https://images.unsplash.com/photo-1474932430478-367d16b99031?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-3"
            >
              Latest Insights
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-serif font-medium text-brand-teal"
            >
              From the Blog
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-rose transition-colors"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-teal text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-sm text-brand-teal/60 mb-3">{post.date}</div>
                <h4 className="text-2xl font-serif font-medium text-brand-teal mb-3 group-hover:text-brand-rose transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-brand-teal/70 line-clamp-3 mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-brand-rose font-medium text-sm mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
