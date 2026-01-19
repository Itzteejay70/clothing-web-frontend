import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { getCategories } from "../../services/productService.js";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <section className="categoriesSection">
      <div className="container">
        <div className="sectionHeader">
          <h2>Shop by Category</h2>
        <div className="sectionDivider"></div>
        </div>
        <div className="categoryTiles">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="categoryTile"
              title={c.name}
            >
              <div className="categoryImgWrap">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Category";
                  }}
                />
              </div>
              <div className="categoryLabelRow">
                <span className="categoryName">{c.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
