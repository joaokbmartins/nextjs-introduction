import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbarItem}>Home</a>
      </Link>
      <Link href="/album">
        <a className={styles.navbarItem}>Albums</a>
      </Link>
      <Link href="/tweet">
        <a className={styles.navbarItem}>Tweets</a>
      </Link>
    </div>
  );
};
export default Navbar;
