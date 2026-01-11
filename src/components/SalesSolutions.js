import "../styles/SalesSolutions.css";
import leftImage from "../assets/crm-data-rich.png";
import rightImage from "../assets/salesright.webp";
import robo from "../assets/robo.webp";
import crmIcon from "../assets/crmdataenrich.png";
import syncIcon from "../assets/sync.png";
import bulkIcon from "../assets/bulkexport.png";
import aiIcon from "../assets/brain.webp";

const SalesSolutions = () => {
  return (
    <section className="sales-solutions">
      <img src={robo} alt="AI Robo" className="sales-robo" />

      <h2>Complete LinkedIn Sales Solutions</h2>
      <p className="sales-subtitle">
        Everything you need for professional LinkedIn prospecting
      </p>

      <div className="tabs">
        <button className="active">
          <img src={crmIcon} alt="" />
          CRM Data Enrichment
        </button>
        <button>
          <img src={syncIcon} alt="" />
          CRM Data Sync
        </button>
        <button>
          <img src={bulkIcon} alt="" />
          Bulk Export & Enrichment
        </button>
        <button>
          <img src={aiIcon} alt="" />
          AI Productivity
        </button>
      </div>

      <p className="sales-intro">
        It’s hard to find the accurate contact data for every prospects by{" "}
        <span className="badge-red">Incomplete Data</span>
      </p>

      <div className="sales-panels">
        <div className="sales-panel light">
          <div className="panel-header">
            <h4>Here is how LeadCRM tackles that situation.</h4>
            <a href="#" className="sales-link">
              Try LeadCRM Data Enrichment →
            </a>
          </div>

          <img
            src={leftImage}
            alt="CRM Data Enrichment"
            className="sales-image"
          />
        </div>

        <div className="sales-panel">
          <div className="panel-header">
            <h4>
              If it does not works for you try our{" "}
              <span className="green">Advanced Waterfall Enrichment</span>
            </h4>
          </div>

          <img
            src={rightImage}
            alt="Advanced Waterfall Enrichment"
            className="sales-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SalesSolutions;
