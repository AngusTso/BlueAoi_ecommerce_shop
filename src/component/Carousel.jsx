import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import site from "../data/site.json";
import styles from "./Carousel.module.css";

/**
 * Hero banner carousel.
 * Drop banner images into  public/banner1.png, banner2.png, banner3.png
 * and they appear automatically. Until then (or for any missing file) a
 * pretty lace hero card is shown instead — the page never looks broken.
 */
const BANNER_FILES = ["/banner1.png", "/banner2.png", "/banner3.png"];

export default function Carousel() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    let alive = true;
    const found = [];
    const probes = BANNER_FILES.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            found.push(src);
            resolve();
          };
          img.onerror = () => resolve();
          img.src = src;
        }),
    );
    Promise.all(probes).then(() => {
      if (alive) setBanners(found);
    });
    return () => {
      alive = false;
    };
  }, []);

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

  const settings = {
    dots: true,
    infinite: banners.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1,
    autoplaySpeed: 4500,
    arrows: banners.length > 1,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {banners.map((src) => (
          <div key={src} className={styles.slide}>
            <img src={src} alt="Blue Aoi handmade bracelet" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
