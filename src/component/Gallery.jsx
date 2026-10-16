import { useNavigate } from "react-router-dom";
import products from "../data/products.json";
import ProductGridItem from "./productGridItem";
import styles from "./Gallery.module.css";

/** "New Arrival" strip on the home page. */
const Gallery = () => {
  const navigate = useNavigate();
  const arrivals = products.products.filter((p) => p.newArrival && p.status !== "hidden");

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryGrid}>
        {arrivals.length > 0 ? (
          arrivals.map((product) => (
            <ProductGridItem key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.empty}>New pieces are on the way 🎀</p>
        )}
      </div>
      <button className="btn btnOutline" onClick={() => navigate("/shop")}>
        More...
      </button>
    </div>
  );
};

export default Gallery;
