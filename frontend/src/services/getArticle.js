import axios from "axios";

async function getArticle({ headers, slug }) {
  try {
    const { data } = await axios({ headers, url: `/api/articles/${slug}` });

    return data && typeof data.article === "object" && data.article ? data.article : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default getArticle;
