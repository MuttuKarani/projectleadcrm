import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
  FaChrome,
} from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/LeadcrmLogo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <img src={logo} alt="LeadCRM" className="footer-logo" />
          <p className="brand-desc">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-col">
          <h4>Integrations</h4>
          <ul>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Pipedrive</li>
            <li>
              Close.io <span className="badge">Coming Soon</span>
            </li>
            <li>
              Insightly <span className="badge">Coming Soon</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Alternative</h4>
          <ul>
            <li>Surfe vs LeadCRM</li>
            <li>Linkmatch Alternative</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact Us</h4>

          <p>
            <FaEnvelope /> support@leadcrm.io
          </p>
          <p>
            <FaPhoneAlt /> +1 231-538-7466
          </p>
          <p>
            <FaQuestionCircle /> Help Center
          </p>

          <button className="chrome-btn">
            <FaChrome /> Available in Chrome
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
          LinkedIn® logos and trademarks displayed on this tool are property of
          LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
          own risk.
        </p>

        <p className="copyright">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
