import Carousel from "../component/Carousel";
import Gallery from "../component/Gallery";
import usePageTitle from "../utils/usePageTitle";
import styles from "./Home.module.css";
import site from "../data/site.json";
import { INSTAGRAM_URL } from "../utils/shop";
import igLogo from "../assets/Instagram_Glyph_White.png";

const Home = () => {
  usePageTitle("");
  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>
        <Carousel />
      </div>

      <div className={styles.newArrival}>
        <h1 className="sectionTitle">New Arrival</h1>
        <span className="bowDivider">🎀 ♡ 🎀</span>
        <Gallery />
      </div>

      <div className={styles.laceSpacer} aria-hidden="true">
        <div className="scallopUp" />
        <div className="laceBand">♡ handmade with love in Hong Kong ♡</div>
        <div className="scallopDown" />
      </div>

      <div className={styles.follow}>
        <h1 className="sectionTitle">Follow us on Instagram</h1>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.igButton}
        >
          <img src={igLogo} alt="Instagram" />
          <span>{site.instagramHandle}</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
