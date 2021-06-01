import axios from "axios";

const baseUrl = "https://hosp-auth.herokuapp.com";

const AuthService = {
  login: async ({ username, password }) => {
    const obj = { username, password };
    const {
      data: { token, user },
    } = await axios.post(baseUrl + "/auth/login", obj);
    localStorage.setItem("username", user.username);
    localStorage.setItem("authority", user.authority);
    localStorage.setItem("auth", token);
    return user;
  },

  isLoggedIn: () => {
    let token = localStorage.getItem("auth");

    if (token) {
      return true;
    }

    return false;
  },

  logout: () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    localStorage.removeItem("authority");
  },

  getUser: () => {
    let authority = localStorage.getItem("authority");
    let username = localStorage.getItem("username");
    return {
      authority,
      username,
    };
  },
};

export default AuthService;
