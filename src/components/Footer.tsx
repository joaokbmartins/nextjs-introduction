import { NextPage } from "next";

import styles from "../styles/Footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <b>&copy; 2021</b>
    </div>
  );
};

export default Footer;
