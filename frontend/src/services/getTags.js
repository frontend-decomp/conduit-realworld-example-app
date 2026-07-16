import axios from "axios";

async function getTags() {
  try {
    const { data } = await axios({ url: "/api/tags" });

    return data && Array.isArray(data.tags) ? data.tags : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default getTags;
