import { useState, useEffect } from "react";
import Divider from "./Divider";
import Header from "./Header";
import Article from "./Article";

import {
  hero,
  heroContainer,
  heroForm,
  heroFormFieldset,
  heroFormInput,
  heroFormSubmitButton,
  heroEntries,
} from "../styles/hero";

function getArticles(data) {
  return data ? data.reverse() : [];
}

function validUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function Hero({ initialArticles }) {
  const [articles, setArticles] = useState([]);
  const [articleLink, setArticleLink] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!articles.length) {
      setArticles(getArticles(initialArticles));
    }
  }, [initialArticles, articles.length]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validUrl(articleLink)) {
      alert("Invalid URL");
      return;
    }

    setSubmitting(true);

    let response = await fetch("/api/createArticle", {
      method: "POST",
      body: JSON.stringify({ href: articleLink }),
    });

    let article = await response.json();
    articles.unshift(article);
    setArticleLink("");
    setArticles(articles);
    setSubmitting(false);
  }

  function handleArticleLinkChange(event) {
    setArticleLink(event.target.value);
  }

  return (
    <div className={heroContainer.className}>
      <div className={hero.className}>
        <Header />
        <form className={heroForm.className} onSubmit={handleSubmit}>
          <fieldset
            className={heroFormFieldset.className}
            disabled={submitting && "disabled"}
          >
            <input
              className={heroFormInput.className}
              name="articleLink"
              placeholder="What's the link to the web article you'd like to save?"
              onChange={handleArticleLinkChange}
              value={articleLink}
            />
            <input
              className={heroFormSubmitButton.className}
              type="submit"
              value="Submit"
              disabled={submitting || articleLink.length === 0}
            />
          </fieldset>
        </form>
      </div>
      <div className={heroEntries.className}>
        {articles.map((article) => {
          const date = new Date(article.ts / 1000);
          return (
            <div key={article.ref["@ref"].id}>
              <Article article={article.data.href} date={date} />
              <Divider />
            </div>
          );
        })}
      </div>
      {heroEntries.styles}
      {heroFormSubmitButton.styles}
      {heroFormInput.styles}
      {heroFormFieldset.styles}
      {heroForm.styles}
      {heroContainer.styles}
      {hero.styles}
    </div>
  );
}

export default Hero;
