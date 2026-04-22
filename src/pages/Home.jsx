import service1 from "../assets/images/Servie-1.jpg";
import service2 from "../assets/images/Servie-2.jpg";
import service3 from "../assets/images/Servie-3.jpg";
import service4 from "../assets/images/Servie-4.jpg";
import vanMan from "../assets/images/van-man.webp";
import heroBg from "../assets/images/main-bg.jpg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import mens from "../assets/images/mens.webp";
import female from "../assets/images/female.png";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.jpeg";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.jpeg";
import r1 from "../assets/images/R1.jpg";
import r2 from "../assets/images/R2.jpg";
import r3 from "../assets/images/R3.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

    const data = [
    {
      img: logo1,
      title: "Specialists in Van Lock Security",
      text: "Our expertise lies solely in van security lock systems, leaving no room for distractions."
    },
    {
      img: logo2,
      title: "Custom Solutions for All Van Types",
      text: "Whether it’s one van or a fleet, we offer customised security van lock solutions to meet your exact needs Whether you drive around Ilford, Dagenham, or across London."
    },
    {
      img: logo3,
      title: "Cutting-Edge Technology",
      text: "Our advanced Vanlock security systems offer smart tracking, real-time alerts, and remote monitoring."
    },
    {
      img: logo4,
      title: "Professional-Grade Components",
      text: "We use only high-quality, durable components designed specifically for van security locks."
    },
    {
      img: logo5,
      title: "Designed for Mobile Businesses",
      text: "Our deep knowledge of mobile operations makes us a go-to for Central London Vanlock security and beyond."
    },
    {
      img: logo6,
      title: "User-Friendly Systems",
      text: "Intuitive and easy to use, our Vanlock security systems integrate seamlessly into your daily routine."
    },
    {
      img: logo7,
      title: "End-to-End Service",
      text: "From expert installation to ongoing support, VanLock is trusted for reliable Vanlock security in Central London."
    },
    {
      img: logo8,
      title: "Your Trusted Partner in Security",
      text: "VanLock works closely with customers to deliver reliable security Vanlock solutions that provide 24/7 peace of mind."
    }
  ];

  const reviews = [
    {
      img: r1,
      text: "VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.",
      name: "Daniel Morris",
      location: "West Yorkshire"
    },
    {
      img: r2,
      text: "Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.",
      name: "Karen Doyle",
      location: "Surrey"
    },
    {
      img: r3,
      text: "Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever. Very satisfied with their service",
      name: "Stephen Patel",
      location: "Greater Manchester"
    }
  ];
  const steps = [
    {
      num: "01.",
      title: "Register a Free Consultation",
      text: "Quality support and suggest the most appropriate solutions for your van."
    },
    {
      num: "02.",
      title: "Choose What Works for You.",
      text: "Choose a complete range of secure brands such as deadlocks, hook locks, slam locks, alarms and trackers. We will assist you in selecting the right combination that is suitable for your van and ensures you feel safe at any time, day, or night."
    },
    {
      num: "03.",
      title: "Professional Installation",
      text: "Our mobile installation division goes out to you at home, at work, and on-site. Fitters are fast, well trained and fully certified, so all fittings are completed to the highest standard."
    },
    {
      num: "04.",
      title: "Ongoing Support",
      text: "We have a presence even after installation. Do you require repairs, enhancements, or guidance? VanLock is available to provide lifelong support and maintain peace of mind."
    }
  ];
  const points = [
    {
      title: "No Generic Solutions - Just Customised Solutions",
      text: "Risks vary in every van. To this end, we conduct detailed evaluations to suggest the appropriate products, including slam locks and GPS trackers."
    },
    {
      title: "Install with Your Convenience",
      text: "You will not need to come up and see us since we are a certified mobile service, and therefore the service will be brought to you where you want."
    },
    {
      title: "Round-the-Clock Monitoring and Real-Time Alert",
      text: "Our connected systems provide protection when you're not present. You receive an immediate call on your phone in case strange activity is spotted."
    },
    {
      title: "Easy Upgrades and Repairs",
      text: "Is there a need to change your Van Lock Security system or repair damages due to wear? We’re just a call away — fast response, zero stress."
    }
  ];

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

    <section className="van-section">
      <div className="van-content">
        <div className="van-text">
            <p className="van-subtitle">CHOOSE YOUR VAN</p>
            <h2 className="van-title">
            Security Solutions for Popular <br /> Vans</h2>
        </div>

        <div className="estimate-button">
        <button> View All Vans <FiArrowRight /></button>
        </div>
      </div>

      <div className="van-gallery">
        <div className="van-grid">
         {[
         { img: img1, name: "Urban Shield Van", sub: "Security Pro 1" },
         { img: img2, name: "City Guard Van", sub: "Security Pro 2" },
         { img: img3, name: "Cargo Secure Van", sub: "Security Pro 3" },
         { img: img4, name: "Fleet Protect Van", sub: "Security Pro 4" },
         { img: img5, name: "Road Shield Van", sub: "Security Pro 5" },
         { img: img6, name: "Max Guard Van", sub: "Security Pro 6" },
         { img: img7, name: "Ultra Safe Van", sub: "Security Pro 7" },
         { img: img8, name: "Elite Lock Van", sub: "Security Pro 8" }
         ].map((item, index) => (
            
            <div className="van-card" key={index}>
             <img src={item.img} alt="" />
             <span className="van-name">{item.name}</span>
             <span className="van-sub">{item.sub}</span>
            </div>
            ))}
        </div>
     </div>
    </section>

    <section className="why-section">
      <p className="why-subtitle">WHY CHOOSE US?</p>

      <h2 className="why-title">
        Secure, Track & Protect <br />
        Bring It All Together
      </h2>

      <div className="why-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="test-section">
      <p className="test-subtitle">TESTIMONIALS</p>

      <h2 className="test-title">Why Van Owners Trust VanLock</h2>

      <div className="test-grid">
        {reviews.map((item, index) => (
          <div className="test-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="test-text">{item.text}</p>

            <div className="test-profile">
              <img src={item.img} alt="" />
              <div>
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="how-section">
      <h2 className="how-title">How It Works</h2>

      <p className="how-text">
        Van protection at VanLock is easy, smooth, and stress-free. Seeking protection of a single van, <br />
        or a fleet of several ones, our workflow is tailored towards your convenience.
      </p>

      <div className="how-grid">
        {steps.map((item, index) => (
          <div className="how-card" key={index}>
            <h3 className="how-number">{item.num}</h3>
            <h4 className="how-subtitle">{item.title}</h4>
            <p className="how-desc">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="custom-section">
      <div className="custom-container">
        
        <div className="custom-left">
          <h2 className="custom-title">
            The Van Lock Difference
          </h2>

          {points.map((item, index) => (
            <div className="custom-item" key={index}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="custom-right">
          <img src={mens} alt="" />
        </div>

      </div>
    </section>

     <section className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <div className="contact-info">
            <FiPhoneCall className="phone-icon" />

            <p className="contact-call">
               <span className="span">Call Support Center 24/7</span> <br />
               07367674000
            </p>

            <div className="contact-email-box">
              < FiSend className="phone-icon" />
              <p className="write">Write To Us</p>
              <p className="email">info@vanlocksecurity.co.uk</p>
            </div>
          </div>

          <div className="contact-image">
            <img src={female} alt="" />
          </div>
        </div>

        <div className="contact-right">
          <p className="contact-subtitle">CONTACT US</p>

          <h2 className="contact-title">Get in touch with us</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
            </div>

            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit Form</button>
          </form>
        </div>

      </div>
    </section>

    </>
  );
}