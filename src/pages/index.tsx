import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";

import styles from "../styles/Home.module.css";

type PageContent = {
  content: string[];
};

const Home: NextPage<PageContent> = (props) => {
  const { content } = props;
  return (
    <div className={styles.container}>
      <h1>Home Content</h1>
      <div>
        {content.map((c: string, key: number) => (
          <p key={key}>{c}</p>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contentUrl: string =
    "https://baconipsum.com/api/?type=all-meat&paras=10&start-with-lorem=1";
  const { data: content } = await axios.get(contentUrl);

  return {
    props: {
      content,
    },
  };
};

export default Home;
