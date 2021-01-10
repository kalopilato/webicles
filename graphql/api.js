import { useState } from "react";
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

function getData(data) {
  if (!data || data.errors) return null;
  return data.data;
}

function getErrorMessage(error, data) {
  if (error) return error.message;
  if (data && data.errors) {
    return data.errors[0].message;
  }
  return null;
}

export const useArticles = () => {
  const [articles, setArticles] = useState();
  const [error, setError] = useState();

  if (!articles) {
    fetchArticles()
      .then((articles) => setArticles(articles))
      .catch((error) => setError(error));
  }

  return {
    data: articles,
    errorMessage: null,
    error: error,
  };
};

//TODO better API clients
export const createArticle = async (data) => {
  if (!client) {
    throw new Error("Missing FaunaDB credentials");
  }

  return client.query(Create(Collection("articles"), { data }));
};

export const fetchArticles = () => {
  if (!client) {
    throw new Error("Missing FaunaDB credentials");
  }

  return client
    .query(
      FaunaMap(
        Paginate(Match(Index("all_articles"))),
        Lambda("articles", Get(Var("articles")))
      )
    )
    .then((response) => {
      return JSON.stringify(response);
    });
};
