export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-column">
          <h3>About Shiva Aqua Solutions</h3>
          <p>Premium hatchery management and seafood export services connecting farmers, hatcheries, and global buyers.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>Kakinada, Andhra Pradesh</li>
            <li><a href="https://wa.me/919393528999">+91 93935 28999</a></li>
            <li><a href="mailto:kovirisivateja@gmail.com">kovirisivateja@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" title="Instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/919393528999" title="WhatsApp" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2026 Shiva Aqua Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
