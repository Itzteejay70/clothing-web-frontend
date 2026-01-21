import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBrands } from "../../services/brandService.js";
import "../../styles/home.css";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getAllBrands()
      .then((res) => setBrands(res?.data || res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      {/* Header with back arrow */}
      <div className="shopHeaderRow">
        <Link to="/" className="backLink" aria-label="Back to Home">
          ‹
        </Link>

        <h2 className="shopTitle">Brands</h2>

        <div className="shopHeaderDivider" />
      </div>

      {loading ? (
        <p>Loading brands...</p>
      ) : (
        <div className="brandGridPage">
          {brands.map((b) => (
            <Link key={b.id} to={`/brands/${b.id}`} className="brandCardPage">
              <img
                src={b.logo}
                alt={b.name || b.id}
                onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
