import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import faunaAdapter from "../../../lib/nextauth/faunadb-adaptor";
import faunadb from "faunadb";

const { FAUNADB_SECRET: secret } = process.env;
let faunaClient;
if (secret) faunaClient = new faunadb.Client({ secret });

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  session: {
    jwt: true,
  },
  debug: true,
  adapter: faunaAdapter.Adapter({ faunaClient }, {}),
};

export default (req, res) => NextAuth(req, res, options);
