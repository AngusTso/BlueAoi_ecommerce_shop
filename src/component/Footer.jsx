import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import igGlyph from "../assets/Instagram_Glyph_White.png";
import waGlyph from "../assets/Digital_Glyph_White.png";
import site from "../data/site.json";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, chatOnWhatsApp } from "../utils/shop";
import styles from "./Footer.module.css";

const Footer = () => {
  const waLink = chatOnWhatsApp();

  return (
    <footer className={styles.container}>
      <ul>
        <li>
          <Link to="/shop">All Products</Link>
        </li>
        <li>
          <Link to="/buyNow">About Shipping</Link>
        </li>
        <li>
          <Link to="/buyNow">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <div className={styles.brand}>
        <img className={styles.btmLogo} src={Logo} alt="Blue Aoi logo" />
        <p>{site.tagline}</p>
      </div>

      <div className={styles.misc}>
        <p>2023 &copy; Blue.Aoi. All rights reserved</p>
        <div className={styles.socials}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src={igGlyph} alt="" />
          </a>
          {WHATSAPP_NUMBER && (
            <a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src={waGlyph} alt="" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
