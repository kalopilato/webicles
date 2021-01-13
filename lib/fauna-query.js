import faunadb from "faunadb";

const { FAUNADB_SECRET: secret } = process.env;
let client;
if (secret) client = new faunadb.Client({ secret });

export default function query(query) {
  if (!client) {
    throw new Error("Missing FaunaDB credentials");
  }
  return client.query(query);
}
