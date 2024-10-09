"use client"

// app/portfolio/page.tsx
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const projects = [
    { title: 'Renovasi Gedung A', image: '/images/project1.jpg', description: 'Proyek renovasi gedung perkantoran modern.' },
    { title: 'Desain Interior B', image: '/images/project2.jpg', description: 'Desain interior minimalis untuk ruang kerja.' },
    { title: 'Pembangunan Gedung C', image: '/images/project3.jpg', description: 'Pembangunan gedung kantor 5 lantai.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Portfolio Kami</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
