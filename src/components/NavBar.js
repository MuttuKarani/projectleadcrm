import "../styles/NavBar.css";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaSignInAlt } from "react-icons/fa";
import Logo from "../assets/LeadcrmLogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <img src={Logo} alt="LeadCRM" className="logo" />

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <ul className="nav-links">
            <li onClick={() => scrollTo("product")}>
              Product <FaChevronDown />
            </li>
            <li onClick={() => scrollTo("pricing")}>Pricing</li>
            <li onClick={() => scrollTo("sales-solutions")}>
              Resources <FaChevronDown />
            </li>
            <li onClick={() => scrollTo("crm")}>
              Company <FaChevronDown />
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn-primary" onClick={() => scrollTo("pricing")}>
              Get Your Free Account
            </button>

            <button className="btn-outline login-btn">
              <FaSignInAlt className="login-icon" />
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
