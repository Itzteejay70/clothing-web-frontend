import "../../styles/home.css";

export default function TrustBadges({ variant = "default" }) {
   const items = [
  { title: "Verified Brands.", icon: "✓" },
  { title: "Secure Payments.", icon: "🔒" },
  { title: "Fast Delivery.", icon: "🚚" },
];


  return (
    <section className={`trustBadgesWrap ${variant === "hero" ? "trustBadgesHero" : ""}`}>
      <div className="container trustBadgesGrid">
        {items.map((item) => (
          <div key={item.title} className="trustBadgeCard">
            <div className="trustBadgeIcon">{item.icon}</div>

            <div>
              <h3 className="trustBadgeTitle">{item.title}</h3>
              {/* optional: remove this line if you don't use desc */}
              {/* <p className="trustBadgeDesc">{item.desc}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
