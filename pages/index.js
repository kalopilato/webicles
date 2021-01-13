import Head from "next/head";
import Hero from "../components/Hero";
import { fetchArticles } from "../faunaQueries/api";

const Websicles = ({ initialArticles, session }) => {
  if (!session) return <AccessDenied />;

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
  const session = await getSession(context);

  let articles = null;
  if (session) {
    const response = await fetchArticles(session);
    articles = JSON.parse(response).data;
  }

  return { props: { initialArticles: articles, session } };
}

export default Websicles;

//TODO refactor out into landing page in future story
import { getSession, signIn } from "next-auth/client";

function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          You must be signed in to view this page
        </a>
      </p>
    </>
  );
}
