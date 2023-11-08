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

  const loginVerify = () => {
    if (token !== "") {
      setLogged(true);
    }
  };

  const userSetter = () => {
    setUser(jwtDecode(token));
    localStorage.setItem("@mnl_user", JSON.stringify(user));
  };

  const login = (username, password) => {
    meuNovoLivroApi
      .post("login/", { username, password })
      .then((response) => {
        setToken(response.data.access);
        localStorage.setItem(
          "@mnl_token",
          JSON.stringify(response.data.access)
        );
        setLogged(true);
      })
      .catch((error) => console.log(error));
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
        window.alert(response.statusText);
      })
      .catch((error) => console.log(error));
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
