import { motion } from 'motion/react';
import { BookOpen, PenTool, BookMarked, GraduationCap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-brand-rose" />,
      title: "School Tuition (All Grades)",
      desc: "Comprehensive English tutoring for all grades up to Class 12. Covering grammar, reading comprehension, and writing skills.",
      tags: ["CBSE", "ICSE", "State Boards"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-lilac" />,
      title: "BA English Honours",
      desc: "Specialized guidance for college students. Deep dives into literature analysis, critical theory, and academic writing.",
      tags: ["Literature", "Analysis", "Essays"]
    },
    {
      icon: <PenTool className="w-8 h-8 text-brand-teal" />,
      title: "Creative Writing",
      desc: "Unlock your imagination. Learn to craft compelling narratives, poetry, and persuasive essays with strong vocabulary.",
      tags: ["Storytelling", "Vocabulary", "Expression"]
    },
    {
      icon: <BookMarked className="w-8 h-8 text-brand-rose" />,
      title: "Grammar & Comprehension",
      desc: "Building a rock-solid foundation. Master the rules of English grammar and improve reading comprehension speed and accuracy.",
      tags: ["Syntax", "Reading", "Accuracy"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-3"
          >
            Areas of Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif font-medium text-brand-teal mb-6"
          >
            Tailored Learning for Every Stage
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-teal/80"
          >
            From building foundational grammar skills to analyzing complex literary texts, I provide structured, engaging, and results-oriented tuition.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-teal/5 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif font-medium text-brand-teal mb-4">
                {service.title}
              </h4>
              <p className="text-brand-teal/70 leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full bg-brand-teal/5 text-brand-teal text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
