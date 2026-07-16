import axios from "axios";

async function getComments({ slug }) {
  try {
    const { data } = await axios({ url: `/api/articles/${slug}/comments` });

    return data && Array.isArray(data.comments) ? data.comments : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default getComments;
