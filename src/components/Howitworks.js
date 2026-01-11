import "../styles/Howitworks.css";
import step1 from "../assets/howitwork1.png";
import step2 from "../assets/howitwork2.png";
import step3 from "../assets/howitwork3.png";
import step4 from "../assets/howitwork4.png";
import arrow from "../assets/Union.svg";

const steps = [
  {
    number: "1",
    title: "Install the Extension",
    desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    img: step1,
  },
  {
    number: "2",
    title: "Browse LinkedIn",
    desc: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    img: step2,
  },
  {
    number: "3",
    title: "Get Enriched Data",
    desc: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy.",
    img: step3,
  },
  {
    number: "4",
    title: "Sync to CRM Instantly",
    desc: "Prospect data syncs instantly with history, tracking, and AI-powered insights.",
    img: step4,
  },
];

const Howitworks = () => {
  return (
    <section className="how-wrapper">
      <h2 className="how-title">How it Works</h2>
      <p className="how-subtitle">
        From setup to success in <strong>4 simple steps</strong>
      </p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={index}>
            <div className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <img src={step.img} alt={step.title} />
            </div>

            {index !== steps.length - 1 && (
              <img
                src={arrow}
                alt=""
                aria-hidden="true"
                className="step-arrow"
              />
            )}
          </div>
        ))}
      </div>

      <div className="how-cta">
        <button>Try LeadCRM Now →</button>
      </div>

      <div className="how-floating-ball" aria-hidden="true" />
    </section>
  );
};

export default Howitworks;
