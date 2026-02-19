export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Whether you're a farmer looking for quality seeds, a hatchery seeking professional management, or a buyer interested in premium seafood exports, Shiva can help connect you with the right solutions.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Coastal Region, Kakinada<br />Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="https://wa.me/919393528999" target="_blank" rel="noreferrer" style={{color: 'var(--accent)', textDecoration: 'none'}}>+91 93935 28999</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>kovirisivateja@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 8AM - 8PM<br />Sunday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" placeholder="What is this about?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" placeholder="Enter your message" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
              <a href="https://wa.me/919393528999?text=Hello%20Shiva,%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{marginLeft: '10px'}}>Message on WhatsApp</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
