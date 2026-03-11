import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyMe } from '@/components/WhyMe';
import { BlogPreview } from '@/components/BlogPreview';
import { Contact } from '@/components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <BlogPreview />
      <Contact />
    </main>
  );
}
