import service1 from "../assets/images/Servie-1.jpg";
import service2 from "../assets/images/Servie-2.jpg";
import service3 from "../assets/images/Servie-3.jpg";
import service4 from "../assets/images/Servie-4.jpg";
import vanMan from "../assets/images/van-man.webp";
import heroBg from "../assets/images/main-bg.jpg";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
    <section className="services-section">
      <p className="services-subtitle">OUR SERVICES</p>

      <h2 className="services-title">Our Van Lock Services</h2>

      <p className="services-text">
        Van Lock London offers smart, reliable security systems tailored specifically for <br />
        commercial and personal vans.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src={service1} alt="" />
          <span>Van Dead Locks</span>
        </div>

        <div className="service-card">
          <img src={service2} alt="" />
          <span>Van Hook Locks</span>
        </div>

        <div className="service-card">
          <img src={service3} alt="" />
          <span>Van Slam Locks</span>
        </div>

        <div className="service-card">
          <img src={service4} alt="" />
          <span>Van Statement Lock</span>
        </div>
      </div>

      <button className="services-btn">
        View All Services <FiArrowRight />
      </button>
    </section>

    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={vanMan} alt="van man" />
        </div>

        <div className="about-content">
          <p className="about-subtitle">ABOUT US</p>

          <h2 className="about-title">
            Our Approach to Smart <br />Security
          </h2>

          <p className="about-text">
            A permanent solution to protection requires a combination of strategies, 
            which include, among others, innovative locking systems, powerful 
            hardware,<span style={{color:"#087cd0"}}> intelligent monitoring,</span> and frequent maintenance. Van Lock 
            Security in London uses the latest technology to protect every vehicle with 
            assurance, and we learn from real-world threats.
          </p>

          <button className="about-btn">Read More <FiArrowRight /></button>
        </div>
      </div>
    </section>

    <section className="mission-section">
      <h2 className="mission-title">
        Secure, Track & Protect <br />
        Bring It All Together
      </h2>

      <div className="mission-grid">
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>
            VanLock is a company that exclusively works on van security. We make solutions that are exact,
            reliable, and new. Our solutions work with various vans, so you may protect either one van or your
            whole fleet. We make sure your vehicle is safe 24/7 using the latest technology and parts that are
            made for professionals.
          </p>
        </div>

        <div className="mission-box">
          <h3>Our Vision</h3>
          <p>
            We know plenty about the demands of mobile businesses, which sets us apart. We work directly with
            van owners to come up with smart, simple methods that fit right in with their everyday duties.
            Security Van Lock is the company you can trust for mobile security, from installation to continuous
            support.
          </p>
        </div>
      </div>
    </section>

    <section
      className="estimate-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="estimate-overlay"></div>

      <div className="estimate-content">
        <div className="estimate-text">
          <p className="estimate-subtitle">ESTIMATE FOR YOUR PROJECT</p>

          <h2 className="estimate-title">
            Ready to get an Estimate <br />for your Project?
          </h2>
        </div>

        <div className="estimate-button">
          <button>
            Get a Quote <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
    </>
  );
}