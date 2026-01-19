import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { getFeaturedBrands } from "../../services/brandService.js";

export default function FeaturedBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getFeaturedBrands().then(setBrands);
  }, []);

  return (
    <section className="featuredBrands">
      <div className="container">
        <div className="sectionHeaderRow">
          <h2>Featured Brands</h2>
          <Link className="viewAllBtn" to="/brands">
            View All
          </Link>
        </div>

        <div className="brandLogoRow">
          {brands.map((b) => (
            <Link key={b.id} to="/brands" className="brandLogoCard">
              <img
                src={b.logo}
                alt=""
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/260x90?text=Brand+Logo";
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
