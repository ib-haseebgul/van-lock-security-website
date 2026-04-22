import vanLogo from "../assets/images/van-logo.png";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from "react-icons/fi";

export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <img src={vanLogo} alt="logo" />

          <p className="footer-text">
            We are specialists in advanced van security solutions. Our systems inspire confidence.
          </p>

          <div className="social-icons">
            <div className="social-box"><FaLinkedin /></div>

            <div className="social-box"><FaFacebook /></div>

            <div className="social-box"><FaInstagram /></div>
          </div>

        </div>

        <div className="footer-right">

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><FiChevronRight /> Home</li>
              <li><FiChevronRight /> About Us</li>
              <li><FiChevronRight /> Fleets</li>
              <li><FiChevronRight /> Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><FiChevronRight /> Van Dead Locks</li>
              <li><FiChevronRight /> Van Hook Locks</li>
              <li><FiChevronRight /> Van Slam Locks</li>
              <li><FiChevronRight /> Van Statement Lock</li>
              <li><FiChevronRight /> Replacement Lock For Ford</li>
              <li><FiChevronRight /> Repair Plate Or External Shield</li>
              <li><FiChevronRight /> Air Vent Installation</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Details</h3>
            <ul>
              <li><FiPhone /> 07367674000</li>
              <li><FiMail /> info@vanlocksecurity.co.uk</li>
              <li><FiMapPin /> Van lock security 594 green lane, Ilford</li>
            </ul>
          </div>

        </div>

      </div>
      
    </footer>
    <footer className="main-footer">
        <p>Copyright © 2026VanLock Security | Designed by <span style={{fontWeight:"bold",textDecoration:"underline"}}>
            Firnas.tech</span> | All Rights Reserved</p>
    </footer>
    </>
  );
}