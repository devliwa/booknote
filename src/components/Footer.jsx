import React from "react";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-responsive">
      <div className="footer-content">
        <span className="footer-logo" aria-label="Booknote logo" role="img">📚</span>
        <span className="footer-text">Copyright ⓒ {year} &nbsp;|&nbsp; Charles Liwa</span>
      </div>
    </footer>
  );
}

export default Footer;