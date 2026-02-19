export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Shiva</h2>
        </div>
        
        <div className="about-container">
          <div className="about-img">
            <img src="/assets/shiva.png" alt="Shiva - Aquaculture Expert" />
          </div>
          <div className="about-content">
            <h3>Meet Shiva: Your Trusted Aqua Partner</h3>
            <p>With over 15 years of experience in the aquaculture industry, Shiva has established himself as a leading expert in hatchery management and seafood supply chain from the coastal regions of Andhra Pradesh.</p>
            <p>His deep understanding of both seed production and seafood export markets makes him a unique bridge between hatcheries, aquaculture farmers, and global buyers.</p>
            <p>Shiva manages a network of premium hatcheries producing high-quality seeds while also facilitating direct exports of fresh seafood from local farmers to restaurants and companies worldwide.</p>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Based in Kakinada, Coastal Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
