export default function Products() {
  const products = [
    { img: '/assets/tigerPrawnSeeds.png', title: 'Tiger Prawn Seeds', desc: 'High-quality PL-10 to PL-12 seeds with 95%+ survival rate. Available throughout the year.', tag: 'Hatchery Product' },
    { img: '/assets/freshTigerShrimp.png', title: 'Fresh Tiger Shrimp', desc: 'Premium quality shrimp for export to restaurants and seafood companies worldwide.', tag: 'Export Product' },
    { img: '/assets/crabSeedling.jpeg', title: 'Crab Seedlings', desc: 'Healthy crab seedlings for aquaculture farming. Ideal for brackish water ponds.', tag: 'Hatchery Product' },
    { img: '/assets/seerFish.png', title: 'Fresh Seer Fish', desc: 'Premium quality seer fish sourced directly from coastal Andhra Pradesh fishermen.', tag: 'Export Product' },
    { img: '/assets/fishFingerllings.png', title: 'Fish Fingerlings', desc: 'Rohu, Catla, and Mrigal fingerlings for freshwater aquaculture farming.', tag: 'Hatchery Product' },
    { img: '/assets/lobSter.jpg', title: 'Live Lobster', desc: 'Premium live lobsters for high-end restaurants and international markets.', tag: 'Export Product' }
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="product-content">
                <div className="product-tags">
                  <span className={`tag ${p.tag === 'Hatchery Product' ? 'tag-hatchery' : 'tag-export'}`}>{p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
