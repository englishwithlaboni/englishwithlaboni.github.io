import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, Heart } from 'lucide-react';

export function About() {
  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-rose" />,
      title: "BA English Hons",
      desc: "College Topper"
    },
    {
      icon: <Award className="w-6 h-6 text-brand-lilac" />,
      title: "MA English",
      desc: "Calcutta University"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-teal" />,
      title: "B.Ed. & CTET",
      desc: "Qualified Educator"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "7+ Years",
      desc: "Teaching Experience"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Teacher portrait"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-teal/10 mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-rose-light rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-lilac rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-3">
              Meet Your Tutor
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium text-brand-teal mb-6">
              Hi, I'm Laboni.
            </h3>
            
            <div className="space-y-6 text-lg text-brand-teal/80 leading-relaxed mb-10">
              <p>
                As an experienced English educator, I believe that mastering a language is more than just memorizing rules—it's about finding your voice and expressing yourself with clarity and confidence.
              </p>
              <p>
                With over 7 years of teaching experience in prestigious schools across Delhi NCR, I've developed a patient, friendly, and calm teaching methodology that consistently delivers results and makes me a favorite among students.
              </p>
              <p>
                Whether you're struggling with grammar basics, aiming for top grades in board exams, or navigating the complexities of BA English Honours literature, I tailor my approach to suit your unique learning style.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {qualifications.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-cream border border-brand-teal/5">
                  <div className="p-3 rounded-xl bg-white shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-teal">{item.title}</h4>
                    <p className="text-sm text-brand-teal/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
