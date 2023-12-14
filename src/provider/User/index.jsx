import { createContext, useContext, useState } from "react";
import { meuNovoLivroApi } from "../../services";
import jwtDecode from "jwt-decode";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@mnl_token")) || ""
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@mnl_user")) || {}
  );
  const [logged, setLogged] = useState(token !== "" ? true : false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorSignup, setErrorSignup] = useState(false);

  const loginVerify = () => {
    if (token !== "") {
      setLogged(true);
    }
  };

  const userSetter = () => {
    setUser(jwtDecode(token));
  };

  const login = async (username, password) => {
    await meuNovoLivroApi
      .post("login/", { username, password })
      .then((response) => {
        setToken(response.data.access);
        localStorage.setItem(
          "@mnl_token",
          JSON.stringify(response.data.access)
        );
        userSetter();
        setLogged(true);
        setErrorLogin(false);
      })
      .catch((error) => setErrorLogin(true));
  };

  const createUser = (email, username, password, passwordConfirm) => {
    meuNovoLivroApi
      .post("register/", {
        email,
        username,
        password,
        password2: passwordConfirm,
      })
      .then((response) => {
        setErrorSignup(false);
      })
      .catch((error) => setErrorSignup(true));
  };

  const logout = () => {
    setLogged(false);
    setToken("");
    localStorage.removeItem("@mnl_token");
    localStorage.removeItem("@mnl_user");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        login,
        createUser,
        logged,
        loginVerify,
        logout,
        userSetter,
        setUser,
        errorLogin,
        errorSignup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
