import "./Hero.css";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero_overlay"></div>

      <div className="container">
        <div className="hero_content">
          <p className="hero_subtitle">75 STRATOCASTER</p>

          <h1 className="hero_title">
            THE ONE
            <br />
            THAT STARTED
            <br />
            IT ALL.
          </h1>

          <div className="hero_actions">
            <button className="hero_button">Shop Now</button>

            <a href="#" className="hero_link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;