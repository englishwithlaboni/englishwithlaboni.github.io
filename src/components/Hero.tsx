import { motion } from 'motion/react';
import { ArrowRight, BookOpen, PenTool, BookMarked } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-rose-light/30 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-lilac/20 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/10 text-brand-rose text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-rose animate-pulse" />
              Accepting new students for 2026
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-brand-teal">
              Master English with <span className="text-brand-rose italic">Confidence</span> & <span className="text-brand-lilac italic">Clarity</span>
            </h1>
            <p className="text-lg text-brand-teal/80 mb-8 leading-relaxed max-w-xl">
              Building a rock-solid foundation in grammar, reading comprehension, creative writing, and literature analysis for students across Delhi NCR.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-teal text-brand-cream font-medium hover:bg-brand-teal/90 transition-all hover:gap-3"
              >
                Book a Trial Class
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-brand-teal/20 text-brand-teal font-medium hover:bg-brand-teal/5 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-brand-teal/10">
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-medium text-brand-rose">7+</span>
                <span className="text-sm text-brand-teal/70">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-medium text-brand-rose">100%</span>
                <span className="text-sm text-brand-teal/70">Success Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-medium text-brand-rose">Top</span>
                <span className="text-sm text-brand-teal/70">Delhi NCR Schools</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                alt="Student studying"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/80 via-transparent to-transparent" />
              
              {/* Floating badges */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                <div className="bg-brand-cream/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4 transform -translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-rose/20 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-brand-rose" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-teal">All Grades & Boards</p>
                    <p className="text-xs text-brand-teal/70">CBSE, ICSE & more till Class 12</p>
                  </div>
                </div>
                
                <div className="bg-brand-cream/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4 transform translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-lilac/30 flex items-center justify-center shrink-0">
                    <PenTool className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-teal">BA Hons English</p>
                    <p className="text-xs text-brand-teal/70">Specialized college tutoring</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
