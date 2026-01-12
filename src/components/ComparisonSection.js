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
            loading="lazy"
            src={withoutImg}
            alt="Without LeadCRM"
            className="card-top-image"
          />

          <h3 className="card-heading red">Without LeadCRM</h3>

          <ul className="card-list">
            <li>
              <img
                loading="lazy"
                src={cross}
                className="list-icon"
                alt="wrong"
              />
              <div>
                <div className="list-title-row">
                  <strong>Manual Data Entry</strong>
                  <span className="red-pill">3+ Hours wasted daily</span>
                </div>
                <p>
                  Copying LinkedIn contacts to CRM manually plus losing
                  conversation history
                </p>
              </div>
            </li>

            <li>
              <img
                loading="lazy"
                src={cross}
                className="list-icon"
                alt="wrong"
              />
              <div>
                <div className="list-title-row">
                  <strong>Incomplete Data</strong>
                  <span className="red-pill">60% Data incomplete</span>
                </div>
                <p>
                  LinkedIn profiles missing Email and Phones from 700M+ Database
                </p>
              </div>
            </li>

            <li>
              <img
                loading="lazy"
                src={cross}
                className="list-icon"
                alt="wrong"
              />
              <div>
                <div className="list-title-row">
                  <strong>No CRM Visibility</strong>
                  <span className="red-pill">Zero context available</span>
                </div>
                <p>
                  Can’t see existing CRM contacts when browsing LinkedIn
                  profiles
                </p>
              </div>
            </li>

            <li>
              <img
                loading="lazy"
                src={cross}
                className="list-icon"
                alt="wrong"
              />
              <div>
                <div className="list-title-row">
                  <strong>Limited Productivity</strong>
                  <span className="red-pill">No smart assistance</span>
                </div>
                <p>
                  Writing messages manually plus no AI assistant for reply,
                  Invite or comments.
                </p>
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
              loading="lazy"
              src={leadcrmfavicon}
              alt="LeadCRM"
              className="heading-logo"
            />
            <span className="green-badge">4+ Hours/day Saved</span>
          </h3>

          <ul className="card-list">
            <li>
              <img loading="lazy" src={sync} className="list-icon" alt="sync" />
              <div>
                <strong>Complete Bi-Directional Sync</strong>
                <p>
                  Automatically sync contacts, messages, and notes between
                  LinkedIn and your CRM in real time.
                </p>
              </div>
            </li>

            <li>
              <img src={contact} className="list-icon" alt="enrich" />
              <div>
                <strong>700M+ Contacts + Enrichment</strong>
                <p>
                  Get verified emails and phone numbers from a vast global
                  database.
                </p>
              </div>
            </li>

            <li>
              <img src={overlay} className="list-icon" alt="overlay" />
              <div>
                <strong>CRM Overlay on LinkedIn</strong>
                <p>
                  See full CRM insights directly on LinkedIn profiles without
                  switching tabs.
                </p>
              </div>
            </li>

            <li>
              <img src={brain} className="list-icon" alt="ai" />
              <div>
                <strong>AI Response + Templates + Bulk Exports</strong>
                <p>
                  Save time with AI-crafted replies, pre-built templates, and
                  one-click data exports.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="hours-image-wrapper">
        <img src={hoursImg} alt="Save hours" />
      </div>

      <button className="cta-btn">Start Using LeadCRM Now</button>
    </section>
  );
};

export default ComparisonSection;
