import Head from "next/head";
import Hero from "../components/Hero";
import { fetchArticles } from "../faunaQueries/api";

const Websicles = ({ initialArticles }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.png"
        />
      </Head>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <div>
        <Hero initialArticles={initialArticles} />
      </div>
      <style jsx>{`
        div {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          font-family: sans-serif, sans;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetchArticles();
  const articles = JSON.parse(response).data;

  return { props: { initialArticles: articles } };
}

export default Websicles;
