import { Link } from "react-router-dom";
import TrustBadges from "../../components/home/trustBadges";
import "../../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroOverlay" />

      <div className="container heroInner">
        <div className="heroLeft">
          <h1 className="heroTitle">
            Where Naija <br /> Streetwear Lives.
          </h1>

          <p className="heroSubtitle">SHOP THE LATEST</p>

          <div className="heroActions">
            <Link to="/shop" className="heroBtn">
              Start Shopping
            </Link>
          </div>
        </div>

        {/* ✅ Trust badges INSIDE the hero background */}
        <div className="heroBadges">
          <TrustBadges variant="hero" />
        </div>
      </div>
    </section>
  );
}
