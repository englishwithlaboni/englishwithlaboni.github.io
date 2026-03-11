import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: "Mastering Reading Comprehension: Strategies for Success",
      excerpt: "Discover effective techniques to improve your reading speed, accuracy, and understanding of complex texts. Whether you're preparing for board exams or tackling BA Honours literature, these strategies will help you read smarter, not harder.",
      date: "March 15, 2026",
      category: "Study Tips",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Art of Creative Writing: Finding Your Voice",
      excerpt: "Learn how to craft compelling narratives, develop unique characters, and express your ideas with clarity and flair. We'll explore exercises to unlock your imagination and build a strong, distinctive writing style.",
      date: "March 02, 2026",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Analyzing Literature: A Guide for BA Honours Students",
      excerpt: "A deep dive into critical theory, literary devices, and how to structure a winning academic essay. This guide covers everything from close reading techniques to integrating secondary sources effectively.",
      date: "February 18, 2026",
      category: "Literature",
      image: "https://images.unsplash.com/photo-1474932430478-367d16b99031?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Common Grammar Mistakes and How to Avoid Them",
      excerpt: "A comprehensive review of the most frequent grammatical errors made by students, complete with clear explanations and practical exercises to solidify your understanding.",
      date: "January 25, 2026",
      category: "Grammar",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Preparing for Board Exams: A Stress-Free Approach",
      excerpt: "Practical advice on creating a study schedule, managing exam anxiety, and maximizing your revision time for CBSE and ICSE English exams.",
      date: "January 10, 2026",
      category: "Exam Prep",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-serif font-medium text-brand-teal mb-6"
          >
            Insights & <span className="text-brand-rose italic">Inspiration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-teal/80 mb-10"
          >
            Explore articles on grammar, literature, creative writing, and study strategies to help you master the English language.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-brand-teal/10 focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 outline-none shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal/40" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-teal/5"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
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
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-sm text-brand-teal/60 mb-3">{post.date}</div>
                <h4 className="text-2xl font-serif font-medium text-brand-teal mb-4 group-hover:text-brand-rose transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-brand-teal/70 line-clamp-3 mb-8 flex-1 leading-relaxed">
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
    </main>
  );
}
