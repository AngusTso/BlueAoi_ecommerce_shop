import { useEffect, useState } from "react";
import site from "../data/site.json";
import styles from "./Carousel.module.css";

/**
 * Hero banner carousel (lightweight fade slider — no external lib).
 * Drop banner images into public/ named Banner1.* (also tries banner1,
 * and .jpeg/.jpg/.png). Missing files are skipped and until any banner
 * exists a pretty lace hero card is shown instead — the page never looks
 * broken or empty.
 */
const BANNER_SLOTS = [
  ["Banner1", "banner1"],
  ["Banner2", "banner2"],
  ["Banner3", "banner3"],
];
const EXTENSIONS = [".jpeg", ".jpg", ".png"];

/** Try candidates in order; resolve with the first URL that loads (or null). */
const probeSlot = (names) => {
  const urls = names.flatMap((n) => EXTENSIONS.map((e) => `/${n}${e}`));
  return new Promise((resolve) => {
    const tryNext = (i) => {
      if (i >= urls.length) {
        resolve(null);
        return;
      }
      const img = new Image();
      img.onload = () => resolve(urls[i]);
      img.onerror = () => tryNext(i + 1);
      img.src = urls[i];
    };
    tryNext(0);
  });
};

export default function Carousel() {
  const [banners, setBanners] = useState([]);
  const [active, setActive] = useState(0);

  // probe which banner files exist
  useEffect(() => {
    let alive = true;
    Promise.all(BANNER_SLOTS.map(probeSlot)).then((found) => {
      if (alive) setBanners(found.filter(Boolean));
    });
    return () => {
      alive = false;
    };
  }, []);

  // gentle auto-advance
  useEffect(() => {
    if (banners.length < 2) return undefined;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  // No banners yet → elegant built-in hero card
  if (banners.length === 0) {
    return (
      <div className={styles.hero}>
        <span className={styles.heroKicker}>Handmade in Hong Kong</span>
        <h1 className={styles.heroTitle}>{site.shopName}</h1>
        <p className={styles.heroTagline}>{site.tagline}</p>
        <span className={styles.heroBow}>🎀 ♡ 🎀</span>
      </div>
    );
  }

  return (
    <div className={styles.heroBox}>
      {banners.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Blue Aoi handmade bracelet"
          className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}
        />
      ))}
      {banners.length > 1 && (
        <div className={styles.dots}>
          {banners.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show banner ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
