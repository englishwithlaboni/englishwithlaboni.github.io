import { motion } from 'motion/react';
import { CheckCircle2, Star, Users } from 'lucide-react';

export function WhyMe() {
  const schools = [
    "DPS RK Puram",
    "Amity International",
    "Lotus Valley International",
    "Apeejay School",
    "Mayoor School",
    "Viswa Bharti"
  ];

  return (
    <section id="why-me" className="py-24 bg-brand-teal text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-rose/10 blur-3xl opacity-40" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-lilac/10 blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-3">
              Why Choose Me
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium mb-6">
              Probably the best English tuition in Delhi NCR.
            </h3>
            <p className="text-lg text-brand-cream/80 leading-relaxed mb-10">
              My teaching philosophy is built on patience, friendliness, and a calm approach. I believe that a stress-free environment is crucial for language acquisition and literary appreciation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-rose shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Patient & Friendly Approach</h4>
                  <p className="text-brand-cream/70">I create a safe space for students to ask questions, make mistakes, and learn at their own pace.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-brand-lilac shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Consistent Results</h4>
                  <p className="text-brand-cream/70">A proven track record of helping students achieve top grades and develop a genuine love for the language.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-brand-rose-light shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif font-medium mb-2">Student Favorite</h4>
                  <p className="text-brand-cream/70">My calm demeanor and engaging lessons make me a highly recommended tutor among parents and students alike.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-cream text-brand-teal p-8 md:p-12 rounded-3xl shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-rose rounded-full flex items-center justify-center text-brand-cream font-serif font-bold text-2xl shadow-lg transform rotate-12">
              Top<br/>Schools
            </div>
            <h4 className="text-2xl font-serif font-medium mb-8">Trusted by students from:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {schools.map((school, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-brand-teal/10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-rose shrink-0" />
                  <span className="font-medium">{school}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-brand-teal/60 italic text-center">
              ...and many more reputed institutions across Delhi NCR.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
