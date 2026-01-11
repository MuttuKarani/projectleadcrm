import { useEffect, useState } from "react";
import "../styles/StickyCTA.css";

import avatar1 from "../assets/stickyavatar1.png";
import avatar2 from "../assets/stickyavatar2.png";
import avatar3 from "../assets/stickyavatar3.png";

import creditIcon from "../assets/credit.webp";
import clockIcon from "../assets/freetiralicon.webp";

const StickyBottomCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      setShow(scrollPercent >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-cta-wrapper ${show ? "show" : ""}`}>
      <div className="sticky-cta-box">
        <div className="sticky-cta-main">
          <div className="cta-left">
            <div className="avatars">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
            </div>

            <span className="cta-text">
              Join with our Thousands of professionals Now !
            </span>
          </div>

          <button className="sticky-cta-btn">Get a Free Trial Now!</button>
        </div>

        <div className="sticky-cta-info">
          <span>
            <img src={creditIcon} alt="" />
            <strong>No Credit Card</strong> Required
          </span>

          <span>
            <img src={clockIcon} alt="" />
            <strong>14 Days Free</strong> Trial
          </span>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
