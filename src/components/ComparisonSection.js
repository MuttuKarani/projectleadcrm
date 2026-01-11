import withleadcrm from "../assets/withleadcrm.webp";
import withoutImg from "../assets/withoutleadcrm.webp";
import cross from "../assets/cross.webp";
import sync from "../assets/sync.webp";
import contact from "../assets/contact.webp";
import overlay from "../assets/overlay.webp";
import brain from "../assets/brain.webp";
import hoursImg from "../assets/savehours.webp";
import leadcrmfavicon from "../assets/leadcrmfavicon.webp";
import "../styles/ComparisonSection.css";

const ComparisonSection = () => {
  return (
    <section className="comparison-wrapper">
      <h2 className="comparison-title">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="comparison-container">
        <div className="comparison-card left">
          <img
            src={withoutImg}
            alt="Without LeadCRM"
            className="card-top-image"
          />

          <h3 className="card-heading red">Without LeadCRM</h3>

          <ul className="card-list">
            <li>
              <img src={cross} className="list-icon" alt="wrong" />
              <div>
                <strong>Manual Data Entry</strong>
                <p>Copying LinkedIn contacts to CRM manually</p>
              </div>
            </li>

            <li>
              <img src={cross} className="list-icon" alt="wrong" />
              <div>
                <strong>Incomplete Data</strong>
                <p>Missing emails & phone numbers</p>
              </div>
            </li>

            <li>
              <img src={cross} className="list-icon" alt="wrong" />
              <div>
                <strong>No CRM Visibility</strong>
                <p>No context while browsing LinkedIn</p>
              </div>
            </li>

            <li>
              <img src={cross} className="list-icon" alt="wrong" />
              <div>
                <strong>Limited Productivity</strong>
                <p>No AI assistance or automation</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="vs-container">
          <div className="vs-line"></div>
          <span className="vs-text">VS</span>
        </div>

        <div className="comparison-card right">
          <img
            src={withleadcrm}
            alt="With LeadCRM"
            className="card-top-image"
          />

          <h3 className="card-heading green with-badge">
            With LeadCRM
            <img
              src={leadcrmfavicon}
              alt="LeadCRM Logo"
              className="heading-logo"
            />
            <span className="green-badge">4+ Hours/day Saved</span>
          </h3>

          <ul className="card-list">
            <li>
              <img src={sync} className="list-icon" alt="sync" />
              <div>
                <strong>Bi-Directional Sync</strong>
                <p>Real-time LinkedIn & CRM sync</p>
              </div>
            </li>

            <li>
              <img src={contact} className="list-icon" alt="enrichment" />
              <div>
                <strong>700M+ Enrichment</strong>
                <p>Verified emails & phone numbers</p>
              </div>
            </li>

            <li>
              <img src={overlay} className="list-icon" alt="overlay" />
              <div>
                <strong>CRM Overlay</strong>
                <p>CRM insights directly on LinkedIn</p>
              </div>
            </li>

            <li>
              <img src={brain} className="list-icon" alt="ai" />
              <div>
                <strong>AI Responses</strong>
                <p>Templates, replies & exports</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hours-image-wrapper">
        <img src={hoursImg} alt="Save 40+ hours every month" />
      </div>

      <button className="cta-btn">Start Using LeadCRM Now</button>
    </section>
  );
};

export default ComparisonSection;
