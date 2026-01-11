import "../styles/SupportedCRM.css";
import crmFlow from "../assets/leadcrm.png";

const SupportedCRM = () => {
  return (
    <section className="supported-crm">
      <h2>Our Supported LeadCRM</h2>
      <p>
        LeadCRM provides native integrations with popular CRM tools to make the
        most out of your LinkedIn prospecting.
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
  );
};

export default SupportedCRM;
