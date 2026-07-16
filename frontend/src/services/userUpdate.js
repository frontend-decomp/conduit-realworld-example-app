import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function userUpdate({ headers, bio, email, image, password, username }) {
  try {
    const { data } = await axios({
      data: { user: { bio, email, image, password, username } },
      headers,
      method: "PUT",
      url: "/api/user",
    });

    const { user } = data;

    return { headers, isAuth: true, loggedUser: user };
  } catch (error) {
    errorHandler(error);
  }
}

export default userUpdate;
