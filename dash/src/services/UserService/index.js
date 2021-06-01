import axios from "axios";

const baseUrl = "https://hosp-auth.herokuapp.com";

const UserService = {
  getAll: async () => {
    const token = localStorage.getItem("auth");
    const {
      data: { accounts },
    } = await axios.get(baseUrl + "/accounts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return accounts;
  },

  create: async ({ username, password, authority }) => {
    const obj = { username, password, authority };
    const response = await axios.post(baseUrl + "/accounts", obj);

    return response.data;
  },

  delete: async (id) => {
    const token = localStorage.getItem("auth");
    const response = await axios.delete(baseUrl + `/accounts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  updateName: async (name, id) => {
    const token = localStorage.getItem("auth");
    const obj = { name };
    const response = await axios.put(baseUrl + `/accounts/${id}`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
};

export default UserService;
