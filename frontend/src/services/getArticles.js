import axios from "axios";

async function getArticles({ headers, limit = 10, location, page = 1, tagName, username }) {
  try {
    const offset = (Math.max(1, page) - 1) * limit;

    const url = {
      favorites: `/api/articles?favorited=${username}&limit=${limit}&offset=${offset}`,
      feed: `/api/articles/feed?limit=${limit}&offset=${offset}`,
      global: `/api/articles?limit=${limit}&offset=${offset}`,
      profile: `/api/articles?author=${username}&limit=${limit}&offset=${offset}`,
      tag: `/api/articles?tag=${tagName}&limit=${limit}&offset=${offset}`,
    };

    const { data } = await axios({ url: url[location], headers });

    if (!data || !Array.isArray(data.articles)) {
      return { articles: [], articlesCount: 0 };
    }

    return { articles: data.articles, articlesCount: data.articlesCount ?? 0 };
  } catch (error) {
    console.error(error);
    return { articles: [], articlesCount: 0 };
  }
}

export default getArticles;
