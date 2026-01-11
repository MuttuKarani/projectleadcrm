import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>LeadCRM</h4>
          <p>LinkedIn integration tool for your CRM.</p>
        </div>

        <div>
          <h4>Integrations</h4>
          <ul>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Pipedrive</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>support@leadcrm.io</p>
        </div>
      </div>

      <p className="copyright">© 2025 LeadCRM. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
