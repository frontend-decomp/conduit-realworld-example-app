import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function userSignUp({ username, email, password }) {
  try {
    const { data } = await axios({
      data: { user: { username, email, password } },
      method: "POST",
      url: "/api/users",
    });

    const { user } = data;
    const headers = { Authorization: `Token ${user.token}` };

    return { headers, isAuth: true, loggedUser: user };
  } catch (error) {
    errorHandler(error);
  }
}

export default userSignUp;
