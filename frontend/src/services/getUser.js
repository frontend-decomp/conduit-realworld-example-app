import axios from "axios";

function markKind(error, kind) {
  error.kind = kind;
  return error;
}

async function getUser({ headers }) {
  try {
    const { data } = await axios({ headers, url: "/api/user" });

    if (!data || typeof data !== "object" || !data.user) {
      throw markKind(new Error("Malformed user response"), "unavailable");
    }

    return data.user;
  } catch (error) {
    if (error.kind) throw error;
    if (!error.response) throw markKind(error, "unavailable");

    const { status } = error.response;
    throw markKind(error, status >= 400 && status < 500 ? "auth" : "unavailable");
  }
}

export default getUser;
