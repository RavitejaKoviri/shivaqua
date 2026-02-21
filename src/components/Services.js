export default function Services() {
  const services = [
    {
      img: '/assets/hatcheryManagement.jpeg',
      title: 'Hatchery Management',
      desc: 'Professional management and quality control for shrimp, fish, and crab hatcheries to ensure premium seed production.',
      features: ['SPF (Specific Pathogen Free) certification', 'Advanced breeding techniques', 'Water quality management', 'Disease prevention protocols']
    },
    {
      img: '/assets/seedSupply.jpeg',
      title: 'Seed Supply Network',
      desc: 'Reliable supply of high-quality aquaculture seeds to farmers across Andhra Pradesh and neighboring states.',
      features: ['Tiger Prawn seeds (PL-10 to PL-12)', 'Crab seedlings', 'Fish fingerlings (Rohu, Catla, Mrigal)', 'Seasonal availability planning']
    },
    {
      img: '/assets/seafoodExport.jpeg',
      title: 'Seafood Export & Import',
      desc: 'Direct sourcing from aquaculture farmers to international buyers, restaurants, and seafood companies.',
      features: ['Fresh & frozen seafood exports', 'Quality certification & packaging', 'Logistics & cold chain management', 'Market linkage for farmers']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-img">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((f, j) => (
                    <li key={j}><i className="fas fa-check"></i> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
