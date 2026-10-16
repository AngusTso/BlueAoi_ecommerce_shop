import { Link } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle";
import { INSTAGRAM_URL } from "../utils/shop";
import aboutImage from "../assets/aboutImage.jpg";
import site from "../data/site.json";
import styles from "./About.module.css";

const About = () => {
  usePageTitle("About");

  return (
    <div className={styles.about}>
      {/* --- story hero --- */}
      <section className={styles.hero}>
        <span className={styles.kicker}>Our Story</span>
        <h1 className={styles.title}>{site.aboutHeroTitle}</h1>
        <div className={styles.story}>
          <div className={styles.imageWrap}>
            <img src={aboutImage} alt="A handmade Blue Aoi bracelet" />
          </div>
          {site.aboutText.split("\n").map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      {/* --- why shop with us --- */}
      <section className={styles.highlights}>
        {site.aboutHighlights.map((h) => (
          <div className={`${styles.highlight} card`} key={h.title}>
            <span className={styles.icon}>{h.icon}</span>
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </div>
        ))}
      </section>

      {/* --- call to action --- */}
      <section className={styles.cta}>
        <div className="scallopUp" />
        <div className={styles.ctaInner}>
          <h2>Ready to find your piece?</h2>
          <p>
            Every bracelet is made in a tiny batch — when it&apos;s gone,
            it&apos;s gone. Come pick the one that feels like you.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/shop" className="btn">
              Shop the collection 🎀
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btnOutline"
            >
              See more on Instagram
            </a>
          </div>
        </div>
        <div className="scallopDown" />
      </section>
    </div>
  );
};

export default About;
