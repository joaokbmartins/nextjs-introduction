import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

export type Tweet = {
  content: string;
};

export type TweetHomePageProps = { content: string; tweets: Tweet[] };

const TweetHomePage: NextPage<TweetHomePageProps> = (props) => {
  /*        CLIENT SIDE RENDER - CSR
    const [tweets, setTweets] = useState<Tweet[]>([]);
    useEffect(() => {
      axios.get("http://localhost:3000/api/tweet").then((res) => {
        setTweets(res.data);
        console.log(res.data);
      });\
    }, []);
  */

  const { tweets } = props;

  return (
    <div>
      <h1>Tweet List</h1>
      <ul>
        {tweets.map((tweet, key) => {
          return <li key={key}> {tweet.content} </li>;
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  /*        SERVER SIDE RENDER - SSR*/
  const { data: tweets } = await axios.get("http://localhost:3000/api/tweets");

  return {
    props: {
      content: "value",
      tweets: tweets,
    },
  };
};

export default TweetHomePage;
