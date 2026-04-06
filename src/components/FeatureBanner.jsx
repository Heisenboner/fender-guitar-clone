import "./FeatureBanner.css";
import promoImg from "../assets/promo-2.jpg";

function FeatureBanner() {
  return (
    <section
      className="feature_banner"
      style={{ backgroundImage: `url(${promoImg})` }}
    >
      <div className="feature_banner_overlay"></div>

      <div className="container">
        <div className="feature_banner_content">
          <span className="feature_banner_badge">Fender Custom Shop</span>

          <h2 className="feature_banner_title">
            Discover handcrafted tone
          </h2>

          <p className="feature_banner_text">
            Built for players who want something special.
          </p>

          <button className="feature_banner_button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default FeatureBanner;