import { Link } from "react-router-dom";
import { formatPrice } from "../utils/shop";
import styles from "./productGridItem.module.css";

/**
 * One product card in a grid.
 * Whole card links to the product detail page (/shop/:id).
 */
const ProductGridItem = ({ product }) => {
  const soldOut = product.status === "sold out";
  const hidden = product.status === "hidden";
  const image = product.images?.[0];

  if (hidden) return null;

  return (
    <Link to={`/shop/${product.id}`} className={`${styles.item} card`}>
      <div className={styles.imageWrap}>
        {product.newArrival && !soldOut && <span className="badge">New</span>}
        {soldOut && <span className="badge badgeSoldOut">Sold Out</span>}
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className={soldOut ? styles.soldOutImg : ""}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>🎀</span>
            <small>photo coming soon</small>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.code}>{product.id}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <span className="price">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
};

export default ProductGridItem;
