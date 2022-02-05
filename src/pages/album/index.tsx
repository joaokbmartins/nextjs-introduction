import axios from "axios";
import { GetStaticProps, NextPage } from "next";

export type Album = {
  id: number;
  userId: number;
  title: String;
};

export type AlbumHomePageProps = { albums: Album[] };

const AlbumHomePage: NextPage<AlbumHomePageProps> = (props) => {
  const { albums } = props;
  return (
    <div>
      <h1>Albuns List - Static</h1>
      <ul>
        {albums.map((album, key) => {
          return <li key={key}> {album.title} </li>;
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: albums } = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return {
    props: {
      albums,
    },
  };
};

export default AlbumHomePage;
