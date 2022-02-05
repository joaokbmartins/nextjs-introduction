import axios from "axios";
import { GetStaticProps, NextPage } from "next";

export type Tweet = {
  content: string;
};

export type TweetHomePageProps = { content: string; tweets: Tweet[] };

const TweetHomePage: NextPage<TweetHomePageProps> = (props) => {
  const { tweets } = props;

  return (
    <div>
      <h1>Tweet List - Static</h1>
      <ul>
        {tweets.map((tweet, key) => (
          <li key={key}> {tweet.content} </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: tweets } = await axios.get("http://localhost:3000/api/tweets");
  return {
    props: {
      content: "string",
      tweets,
    },
  };
};

export default TweetHomePage;
