import { useState } from "react";
import products from "../data/products.json";
import ProductGridItem from "../component/productGridItem";
import usePageTitle from "../utils/usePageTitle";
import styles from "./Shop.module.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "available", label: "In Stock" },
  { key: "sold out", label: "Sold Out" },
];

const Shop = () => {
  usePageTitle("Shop");
  const [filter, setFilter] = useState("all");

  const visible = products.products.filter(
    (p) =>
      p.status !== "hidden" && (filter === "all" || p.status === filter),
  );

  return (
    <div className={styles.shop}>
      <h1 className="sectionTitle">Our Bracelets</h1>
      <span className="bowDivider">🎀 ♡ 🎀</span>

      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`${styles.filterChip} ${filter === f.key ? styles.filterActive : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.length > 0 ? (
          visible.map((product) => (
            <ProductGridItem key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.empty}>Nothing here yet — check back soon 🎀</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
