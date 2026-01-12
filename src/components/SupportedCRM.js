import "../styles/SupportedCRM.css";
import crmFlow from "../assets/leadcrm.png";
import banner from "../assets/banner-thumb.webp";

const SupportedCRM = () => {
  return (
    <div className="supported-crm-wrapper">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="supported-crm-banner"
      />

      <section className="supported-crm">
        <h2>Our Supported LeadCRM</h2>
        <p>
          LeadCRM provides native integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting.
        </p>

        <div className="crm-flow">
          <img
            src={crmFlow}
            alt="LeadCRM supported CRM integrations flow"
            className="crm-flow-image"
          />
        </div>

        <button className="cta">Let’s Integrate your CRM Now!</button>
      </section>
    </div>
  );
};

export default SupportedCRM;
