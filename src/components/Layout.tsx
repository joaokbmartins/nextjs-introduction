import { NextPage } from "next";

import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
