import axios from "axios";

async function getProfile({ headers, username }) {
  try {
    const { data } = await axios({ headers, url: `/api/profiles/${username}` });

    return data && typeof data.profile === "object" && data.profile ? data.profile : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default getProfile;
