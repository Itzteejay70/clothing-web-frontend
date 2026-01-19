export default function TrustBadges() {
  const items = [
    { title: "Verified Brands", desc: "Only trusted Nigerian streetwear brands." },
    { title: "Secure Payments", desc: "Protected checkout and payment flow." },
    { title: "Fast Delivery", desc: "Quick dispatch and delivery updates." },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {items.map((item) => (
          <div key={item.title} style={styles.card}>
            <div style={styles.iconCircle}>✓</div>

            <div>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#fff",
    padding: "22px 0",
    borderBottom: "1px solid #eee",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    border: "1px solid #eee",
    borderRadius: "14px",
    background: "#fafafa",
  },
  iconCircle: {
    width: "34px",
    height: "34px",
    borderRadius: "999px",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#111",
    background: "#fff",
    flexShrink: 0,
  },
  title: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 800,
    color: "#111",
  },
  desc: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#555",
    lineHeight: 1.4,
  },
};
