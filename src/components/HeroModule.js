import "../styles/HeroModule.css";
import heroBg from "../assets/grid-blocks.webp";
import rocket from "../assets/rocket-icon.svg";
import line from "../assets/line.webp";

import hubspot from "../assets/HubSpot.webp";
import pipedrive from "../assets/Pipedrive.webp";
import salesforce from "../assets/Salesforce.webp";

import chrome from "../assets/capterra.webp";
import capterra from "../assets/capterra-logo.webp";
import chromeLogo from "../assets/chrome-logo.png";

const HeroModule = () => {
  return (
    <section
      className="hero-wrapper"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-container">
        <div className="hero-badge">
          <img src={rocket} alt="Rocket" className="badge-icon" />
          Thousands of Professionals using LeadCRM
        </div>

        <h1 className="hero-title">
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in{" "}
          <span className="hero-underline">
            Both Ways
            <img src={line} alt="" className="underline-img" />
          </span>
        </h1>

        <p className="hero-subtitle">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>

        <div className="integration-pill">
          <span>Works with</span>
          <div className="integration-icons">
            <img src={hubspot} alt="HubSpot" />
            <img src={pipedrive} alt="Pipedrive" />
            <img src={salesforce} alt="Salesforce" />
          </div>
        </div>

        <div className="ratings-row">
          <div className="rating">
            <div className="rating-box">
              <img src={chrome} alt="Chrome" />
            </div>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="#f59e0b"
                >
                  <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.54L12 17.77 6.12 20.6l1.12-6.54-4.76-4.64 6.58-.96L12 2.5z" />
                </svg>
              ))}
            </div>

            <span>5/5</span>
          </div>

          <div className="rating">
            <div className="rating-box">
              <img src={capterra} alt="Capterra" />
            </div>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="#f59e0b"
                >
                  <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.54L12 17.77 6.12 20.6l1.12-6.54-4.76-4.64 6.58-.96L12 2.5z" />
                </svg>
              ))}
            </div>

            <span>5/5</span>
          </div>
        </div>

        <div className="cta-row">
          <button className="chrome-btn">
            <div className="chrome-text">
              <span>Available in</span>
              <strong>Chrome Web Store</strong>
            </div>
            <img src={chromeLogo} alt="Chrome" className="chrome-icon" />
          </button>

          <button className="trial-btn">Get a Free Trial Now!</button>
        </div>
      </div>
    </section>
  );
};

export default HeroModule;
