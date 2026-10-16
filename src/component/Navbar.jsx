import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={Logo} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/buyNow">Buy Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
