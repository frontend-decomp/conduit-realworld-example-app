import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import getArticles from "../services/getArticles";

function useArticles({ location, page = 1, tagName, username }) {
  const [{ articles, articlesCount }, setArticlesData] = useState({
    articles: [],
    articlesCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const { headers } = useAuth();

  useEffect(() => {
    if (!headers && location === "feed") return;

    setLoading(true);

    getArticles({ headers, location, page, tagName, username })
      .then(setArticlesData)
      .finally(() => setLoading(false));
  }, [headers, location, page, tagName, username]);

  return { articles, articlesCount, loading, setArticlesData };
}

export default useArticles;
