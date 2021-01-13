import faunadb from "faunadb";
import makeQuery from "../lib/fauna-query";

const { query: q } = faunadb;

export async function fetchArticles(session) {
  const { email } = session.user;

  return makeQuery(
    q.Map(
      q.Paginate(
        q.Match(
          q.Index("all_articles"),
          q.Call(q.Function("getUserByEmail"), email)
        )
      ),
      q.Lambda("articles", q.Get(q.Var("articles")))
    )
  ).then((response) => {
    return JSON.stringify(response);
  });
}
