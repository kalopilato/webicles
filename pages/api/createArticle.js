import faunadb from "faunadb";
import makeQuery from "../../lib/fauna-query";
import { getSession } from "next-auth/client";

const { query: q } = faunadb;

async function createArticle(req, res) {
  const session = await getSession({ req });

  if (session) {
    const email = session.user.email;

    const data = {
      ...JSON.parse(req.body),
      user: q.Call(q.Function("getUserByEmail"), email),
    };

    const article = await makeQuery(
      q.Create(q.Collection("articles"), { data })
    );
    res.status(200).json(article);
    res.end();
  }

  res.status(401).json({ error: "Unauthorized" });
  res.end();
}

export default createArticle;
