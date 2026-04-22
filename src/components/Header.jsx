import { NavLink, useLocation } from "react-router-dom";
import headerLogo from "../assets/images/van-logo.png";
import heroBg1 from "../assets/images/main-bg.jpg";
import heroBg2 from "../assets/images/main-bg-2.webp";
import heroVan from "../assets/images/main-hero-van.png";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className="header"
      style={{
        backgroundImage: isHome ? `url(${heroBg1})` : `url(${heroBg2})`,
        height: isHome ? "120vh" : "40vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      <div className="overlay"></div>

      <div className="header-content">
        <div className="header-logo">
          <img src={headerLogo} alt="header-logo" />
        </div>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/aboutUs">About Us</NavLink>

          <NavLink to="/chooseYourVan" className="dropdown-link">
            <span>Choose Your Van</span>
            <FiChevronDown className="arrow" />
          </NavLink>

          <NavLink to="/ourServices" className="dropdown-link">
            <span>Our Services</span>
            <FiChevronDown className="arrow" />
          </NavLink>

          <NavLink to="/fleets">Fleets</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div>
          <button className="header-btn">
            Get a Quote <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="nav-separator"></div>

      <div className="hero-section">
        <div className="hero-text">
          <h1>Safe. Smart. With Van Lock Security,</h1>

          <p>
            We specialize in advanced <span>Van Lock Security</span> solutions designed to
            safeguard your vehicle, tools, and livelihood. With expertly
            installed locks and anti-theft systems, we keep your van secure—day
            and night.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get a Quote</button>
            <button className="secondary-btn">Our Services</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroVan} alt="van" />
        </div>
      </div>

      <div className="nav-triangle"></div>
    </header>
  );
}