import { createContext, useContext, useEffect, useState } from "react";
import getUser from "../services/getUser";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const initialToken = localStorage.getItem("jwtToken");

const loggedOutState = {
  headers: null,
  loggedUser: {
    bio: null,
    email: "",
    image: null,
    token: "",
    username: "",
  },
};

const initialState = initialToken
  ? {
      headers: { Authorization: `Token ${initialToken}` },
      loggedUser: {
        bio: null,
        email: "",
        image: null,
        token: initialToken,
        username: "",
      },
    }
  : loggedOutState;

function AuthProvider({ children }) {
  const [{ headers, loggedUser }, setAuthState] = useState(initialState);
  const [status, setStatus] = useState(initialToken ? "loading" : "unauthenticated");
  const isAuth = Boolean(headers);

  useEffect(() => {
    if (!headers) {
      setStatus("unauthenticated");
      return;
    }

    setStatus((prev) => (prev === "authenticated" ? prev : "loading"));

    getUser({ headers })
      .then((loggedUser) => {
        setAuthState((prev) => ({ ...prev, loggedUser }));
        setStatus("authenticated");
      })
      .catch((error) => {
        if (error.kind === "auth") {
          localStorage.removeItem("jwtToken");
          setAuthState(loggedOutState);
          setStatus("unauthenticated");
        } else {
          setStatus("unavailable");
        }
      });
  }, [headers]);

  useEffect(() => {
    if (loggedUser?.token) localStorage.setItem("jwtToken", loggedUser.token);
  }, [loggedUser]);

  useEffect(() => {
    window.__conduit_debug__ = {
      getToken: () => localStorage.getItem("jwtToken"),
      getAuthState: () => status,
      getCurrentUser: () => (status === "authenticated" ? { ...loggedUser } : null),
    };
  });

  return (
    <AuthContext.Provider value={{ headers, isAuth, loggedUser, status, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
