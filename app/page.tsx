// pages/index.tsx
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <AnimatePresence>
      <Hero />
      <Services />
    </AnimatePresence>
  );
}
