import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBrands } from "../../services/brandService.js";
import "../../styles/home.css";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBrands()
      .then(setBrands)
      .then((res) => setBrands(res.data || res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container" style={{ padding: "28px 0" }}>
      <div className="sectionHeaderRow" style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Brands</h2>
      </div>

      {loading ? (
        <p>Loading brands...</p>
      ) : (
        <div className="brandGridPage">
          {brands.map((b) => (
            <Link key={b.id} to={`/brands/${b.id}`} className="brandCardPage">
              <img
                src={b.logo}
                onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

