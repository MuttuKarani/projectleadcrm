import "../styles/JoinBanner.css";
import bannerImage from "../assets/product-hunt-banner-image.png";
import floatingImage from "../assets/chat-image.png";

const JoinBanner = () => {
  return (
    <section className="join-section">
      <img
        src={floatingImage}
        alt="Chat preview"
        className="join-floating-image"
      />

      <h2 className="join-section-title">
        Join Thousands of Professionals Using LeadCRM
      </h2>

      <div className="join-card">
        <h3 className="join-card-title">
          Your LinkedIn Powerhouse for Smarter Lead Management
        </h3>

        <img
          src={bannerImage}
          alt="LeadCRM product showcase with integrations"
          className="join-preview"
        />
      </div>

      <button className="join-cta">
        Get Started Today <span>→</span>
      </button>
    </section>
  );
};

export default JoinBanner;
