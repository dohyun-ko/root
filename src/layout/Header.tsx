import { Link } from "@tanstack/react-router";
import * as styles from "./style.css";

const Header = () => {
  return (
    <div className={styles.gridRow}>
      <div className={styles.outerLeft} />
      <div className={styles.gutterLeft} />
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          Dohyun Ko
        </Link>
        <nav className={styles.navigation}>
          <Link to="/" className={styles.navigationLink}>
            Articles
          </Link>
          <Link to="/about" className={styles.navigationLink}>
            About
          </Link>
        </nav>
      </div>
      <div className={styles.gutterRight} />
      <div className={styles.outerRight} />
    </div>
  );
};

export default Header;
