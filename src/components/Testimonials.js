import "../styles/Testimonials.css";
import { useRef } from "react";
import capterra from "../assets/capterra-logo.webp";
import { FaStar } from "react-icons/fa";
import avatar1 from "../assets/david.png";
import avatar2 from "../assets/lillian.png";
import avatar3 from "../assets/michael.png";

const testimonials = [
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "David Fincher",
    source: "On Capterra",
    avatar: avatar1,
  },
  {
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    name: "Lillian Williams",
    source: "On Capterra",
    avatar: avatar2,
  },
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    source: "On Capterra",
    avatar: avatar3,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollByCard = (direction) => {
    const container = scrollRef.current;
    const card = container.querySelector(".testimonial-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>What people are saying about LeadCRM</h2>

        <div className="testimonial-arrows">
          <button
            className="arrow-btn"
            onClick={() => scrollByCard("left")}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            className="arrow-btn primary"
            onClick={() => scrollByCard("right")}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>

      <div className="testimonial-scroll" ref={scrollRef}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-text">“{t.text}”</p>

            <div className="rating">
              <img src={capterra} alt="Capterra" className="rating-logo" />
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <div className="author">
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <div>
                  <span>{t.source}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
