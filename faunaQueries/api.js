import faunadb from "faunadb";

const { FAUNADB_SECRET: secret } = process.env;
let client;
if (secret) client = new faunadb.Client({ secret });

const {
  Map: FaunaMap,
  Index,
  Match,
  Lambda,
  Paginate,
  Get,
  Create,
  Var,
  Collection,
} = faunadb.query;

function _query(query) {
  if (!client) {
    throw new Error("Missing FaunaDB credentials");
  }
  return client.query(query);
}

export const createArticle = async (data) => {
  return _query(Create(Collection("articles"), { data }));
};

export const fetchArticles = () => {
  return _query(
    FaunaMap(
      Paginate(Match(Index("all_articles"))),
      Lambda("articles", Get(Var("articles")))
    )
  ).then((response) => {
    return JSON.stringify(response);
  });
};
