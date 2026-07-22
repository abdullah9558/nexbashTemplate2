export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img
          src="/assets/nexbash-logo.png"
          alt="NexBash"
          className="footer-logo footer-logo-light"
        />
        <img
          src="/assets/nexbash-logo-white.png"
          alt="NexBash"
          className="footer-logo footer-logo-dark"
        />
        <span>Enterprise Intelligence</span>
      </div>
      <div className="footer-links">
        <a href="#studios" data-cursor="link">
          Studios
        </a>
        <a href="#work" data-cursor="link">
          Projects
        </a>
        <a href="#packages" data-cursor="link">
          Packages
        </a>
        <a href="#contact" data-cursor="link">
          Contact
        </a>
      </div>
      <p>© {new Date().getFullYear()} NexBash. Built for real environments.</p>
      <a href="#top" data-cursor="link">
        Back to top ↑
      </a>
    </footer>
  );
}
