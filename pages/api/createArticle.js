import faunadb from "faunadb";

const { FAUNADB_SECRET: secret } = process.env;
let client;
if (secret) client = new faunadb.Client({ secret });

const { Create, Collection } = faunadb.query;

async function createArticle(req, res) {
  if (!client) {
    throw new Error("Missing FaunaDB credentials");
  }
  const article = await client.query(
    Create(Collection("articles"), { data: JSON.parse(req.body) })
  );
  res.status(200).json(article);
}

export default createArticle;
