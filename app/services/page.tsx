// app/services/page.tsx
export default function ServicesPage() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Kami menyediakan berbagai layanan profesional, termasuk renovasi gedung, desain interior, dan konstruksi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Renovasi Gedung', description: 'Renovasi gedung perkantoran dan properti komersial.' },
              { title: 'Desain Interior', description: 'Layanan desain interior untuk menciptakan ruang kerja nyaman.' },
              { title: 'Konstruksi', description: 'Proyek pembangunan infrastruktur dengan standar tinggi.' },
            ].map((service, index) => (
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
  