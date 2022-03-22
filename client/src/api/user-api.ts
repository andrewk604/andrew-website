/*eslint-disable*/

import axios from "axios";
import { API_ENDPOINT } from "../constants/config";
import { putStorage, getStorage } from "../hooks/useStorage.js";

type login_data = {
  username: string;
  password: string;
};

type register_data = {
  username: string;
  password: string;
};

const UserApi = {
  async getCurrentUser() {
    try {
      const user = (
        await axios.get(`${API_ENDPOINT}/auth/self`, {
          headers: {
            Authorization: `Bearer ${getStorage(`auth_token`) || ""}`
          }
        })
      ).data;
      putStorage(`role`, user.roles[0]);
      putStorage(`initialized`, true);
      putStorage(`user`, user);
    } catch (error) {
      putStorage(`role`, `GUEST`);
      putStorage(`initialized`, false);
      console.log(error);
    }
  },

  async login(login_data: login_data) {
    try {
      const token = (
        await axios.post(`${API_ENDPOINT}/auth/login`, {
          username: login_data.username,
          password: login_data.password
        })
      ).data;
      console.log(token);
      putStorage(`auth_token`, token.token);
      putStorage(`initialized`, true);
      const user = await this.getCurrentUser();
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  async register(register_data: register_data) {
    try {
      const response = (
        await axios.post(`${API_ENDPOINT}/auth/register`, {
          username: register_data.username,
          password: register_data.password
        })
      ).data;
      await this.login({
        username: register_data.username,
        password: register_data.password
      });
      return true;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  },

  async logout() {
    putStorage(`auth_token`, "");
    putStorage(`user`, "");
    putStorage(`initialized`, false);
    putStorage(`role`, `GUEST`);
    this.getCurrentUser();
  }
};

export default UserApi;

/*eslint-enable*/
