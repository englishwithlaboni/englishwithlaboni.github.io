import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-rose uppercase mb-3">
              Get in Touch
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-medium text-brand-teal mb-6">
              Start Your English Journey Today
            </h3>
            <p className="text-lg text-brand-teal/80 leading-relaxed mb-10">
              Whether you're looking for school tuition, BA Honours guidance, or creative writing classes, I'm here to help you achieve your goals.
            </p>

            <div className="space-y-8">
              <a href="tel:9599663831" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-rose/10 flex items-center justify-center group-hover:bg-brand-rose/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-brand-rose" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-teal/60 mb-1">Call or WhatsApp</p>
                  <p className="text-2xl font-serif font-medium text-brand-teal group-hover:text-brand-rose transition-colors">
                    9599663831
                  </p>
                </div>
              </a>
              
              <a href="mailto:laboniatwork@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-lilac/20 flex items-center justify-center group-hover:bg-brand-lilac/30 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-teal/60 mb-1">Email Me</p>
                  <p className="text-xl font-serif font-medium text-brand-teal group-hover:text-brand-rose transition-colors break-all">
                    laboniatwork@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-teal/60 mb-1">Location</p>
                  <p className="text-xl font-serif font-medium text-brand-teal">
                    Delhi NCR
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-teal/5 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-rose-light rounded-full -z-10 blur-xl opacity-60" />
            
            <h4 className="text-2xl font-serif font-medium text-brand-teal mb-8">
              Send a Message
            </h4>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-teal mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-teal/10 focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-teal mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-teal/10 focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-brand-teal mb-2">Grade / Requirement</label>
                <select
                  id="grade"
                  className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-teal/10 focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 outline-none transition-all appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="middle">Middle School (6-8)</option>
                  <option value="high">High School (9-10)</option>
                  <option value="senior">Senior Secondary (11-12)</option>
                  <option value="college">BA English Honours</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-teal mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-brand-cream border border-brand-teal/10 focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-teal text-brand-cream font-medium hover:bg-brand-teal/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
