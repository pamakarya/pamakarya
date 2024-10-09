// components/Services.tsx
import React from 'react';

const services = [
  { title: 'Renovasi Gedung', description: 'Kami ahli dalam renovasi gedung perkantoran.' },
  { title: 'Desain Interior', description: 'Menyediakan desain interior profesional.' },
  { title: 'Konstruksi', description: 'Membangun infrastruktur berkualitas.' },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
