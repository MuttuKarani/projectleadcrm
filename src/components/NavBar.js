import "../styles/NavBar.css";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
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

        <ul className={`nav-links ${open ? "open" : ""}`}>
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

        <div className={`nav-actions ${open ? "open" : ""}`}>
          <button className="btn-primary" onClick={() => scrollTo("pricing")}>
            Get Your Free Account
          </button>
          <button className="btn-outline">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
