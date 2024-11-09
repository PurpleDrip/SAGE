import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-20">
      <aside>
        <div className="img-container w-32">
          <img src="/Images/Shastryhexagon.png" alt="CompanyLogo" />
        </div>
        <p>
          Shastry Associates Global Enterprise (SAGE).
          <br />
          Providing reliable tech since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover" href="/about">
          About us
        </a>
        <a className="link link-hover" href="/contact">
          Contact
        </a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
  <h6 className="footer-title">Follow Us On</h6>
  <div className="flex space-x-4">
    <a className="link link-hover" href="https://www.facebook.com/profile.php?id=61561994620408" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
    <a className="link link-hover" href="https://www.linkedin.com/in/shastry-associates-global-enterprises-sage?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
  </div>
</nav>

    </footer>
  );
};

export default Footer;

