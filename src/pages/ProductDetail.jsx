import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import { formatPrice, orderOnWhatsApp, INSTAGRAM_URL } from "../utils/shop";
import usePageTitle from "../utils/usePageTitle";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  usePageTitle(product ? product.name : "Not Found");

  if (!product) {
    return (
      <div className={styles.missing}>
        <h1 className="sectionTitle">Oops 🎀</h1>
        <p>We couldn&apos;t find this bracelet.</p>
        <Link to="/shop" className="btn">
          Back to the shop
        </Link>
      </div>
    );
  }

  const soldOut = product.status === "sold out";
  const hidden = product.status === "hidden";
  const images = product.images?.length ? product.images : [];
  const waLink = orderOnWhatsApp(product);

  return (
    <div className={styles.detail}>
      <Link to="/shop" className={styles.back}>
        ← Back to all bracelets
      </Link>

      <div className={styles.content}>
        {/* --- images --- */}
        <div className={styles.gallery}>
          <div className={`${styles.mainImage} card`}>
            {images.length > 0 ? (
              <img src={images[activeImage]} alt={product.name} />
            ) : (
              <div className={styles.placeholder}>
                <span>🎀</span>
                <small>photo coming soon</small>
              </div>
            )}
            {soldOut && <span className="badge badgeSoldOut">Sold Out</span>}
          </div>
          {images.length > 1 && (
            <div className={styles.thumbs}>
              {images.map((img, i) => (
                <button
                  key={img}
                  className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- info --- */}
        <div className={styles.info}>
          <span className={styles.code}>{product.id}</span>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <p className={styles.desc}>{product.description}</p>

          {hidden ? (
            <p className={styles.unavailable}>This piece is not on sale right now.</p>
          ) : soldOut ? (
            <>
              <p className={styles.unavailable}>
                This one has found a new home — but she can make a fresh one!
              </p>
              <a
                className="btn btnOutline"
                href={
                  waLink ||
                  `${INSTAGRAM_URL}`
                }
                target="_blank"
                rel="noreferrer"
              >
                Ask about a remake 💬
              </a>
            </>
          ) : waLink ? (
            <a
              className="btn btnWhatsapp"
              href={waLink}
              target="_blank"
              rel="noreferrer"
            >
              Order via WhatsApp 🎀
            </a>
          ) : (
            <a
              className="btn"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Ask on Instagram 🎀
            </a>
          )}

          <div className={styles.notes}>
            <p>♡ 100% handmade by Blue Aoi</p>
            <p>♡ Ships via SF Express / HK Post</p>
            <p>♡ Payment &amp; delivery confirmed in chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;