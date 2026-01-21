import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {/* Left text */}
        <div style={styles.left}>
         
          <h1 style={styles.title}>
            Where Naija <br /> Streetwear Lives.
          </h1>

          <p style={styles.subtitle}>
            SHOP THE LATEST
          </p>

          <div style={styles.actions}>
            <Link to="/shop" style={styles.btn}>
              Start Shopping
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div style={styles.right}>
          {/* Replace this with your real image later */}
          <div style={styles.imagePlaceholder}>
            <span style={{ opacity: 0.7 }}>Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#fff",
    color: "#0b0b0b",
    padding: "36px 0",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "28px",
    alignItems: "center",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  kicker: {
    margin: 0,
    opacity: 0.8,
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  title: {
    margin: 0,
    fontSize: "52px",
    lineHeight: 1.05,
    fontWeight: 800,
  },
  subtitle: {
    margin: 0,
    opacity: 0.85,
    maxWidth: "520px",
    lineHeight: 1.6,
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  btn: {
    display: "inline-block",
    background: "#42aa6aff",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: 700,
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },
  imagePlaceholder: {
    width: "100%",
    maxWidth: "420px",
    height: "360px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
