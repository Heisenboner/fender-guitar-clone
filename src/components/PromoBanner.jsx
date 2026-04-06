import "./PromoBanner.css";
import promoImg from "../assets/promo.jpg";

function PromoBanner() {
  return (
    <section
      className="promo"
      style={{ backgroundImage: `url(${promoImg})` }}
    >
      <div className="promo_overlay"></div>

      <div className="container">
        <div className="promo_content">
          <div className="promo_badge">MOD SHOP</div>

          <h2 className="promo_title">
            The all-new Mod Shop experience is here
          </h2>

          <p className="promo_text">
            Explore endless possibilities to build it your way
          </p>

          <button className="promo_button">Start Building</button>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;