import "../styles/StickyCTA.css";

const StickyBottomCTA = () => {
  return (
    <div className="sticky-bottom-wrapper">
      <div className="sticky-bottom-card">
        {/* Left */}
        <div className="cta-left">
          <div className="avatars">
            <img src="https://i.pravatar.cc/36?img=1" alt="" />
            <img src="https://i.pravatar.cc/36?img=2" alt="" />
            <img src="https://i.pravatar.cc/36?img=3" alt="" />
          </div>

          <span className="cta-text">Ready for a perfectly organized CRM?</span>
        </div>

        {/* Right */}
        <button className="cta-btn">Get Started for Free</button>
      </div>

      {/* Bottom info */}
      <div className="cta-info">
        <span>💳 No Credit Card Required</span>
        <span>⏱️ Forever Free Account</span>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
