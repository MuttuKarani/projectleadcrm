import "../styles/OneclickAccess.css";

import contacts from "../assets/contact.webp";
import click from "../assets/thumb.webp";
import mapping from "../assets/feature-leadcrm-3.webp";
import waterfall from "../assets/feature-leadcrm-5.webp";

const features = [
  { icon: contacts, text: "Access to 700M+ Contacts" },
  { icon: click, text: "One click push to CRM" },
  { icon: mapping, text: "Custom Field Mapping" },
  { icon: waterfall, text: "Advanced Waterfall Enrichment" },
];

const OneclickAccess = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {[...features, ...features].map((item, index) => (
          <div className="ticker-item" key={index}>
            <img src={item.icon} alt="" className="ticker-icon" />
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneclickAccess;
