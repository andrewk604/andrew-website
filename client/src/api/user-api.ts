/*eslint-disable*/

import axios from "axios";
import { API_ENDPOINT } from "../constants/config";
import { putStorage, getStorage } from "../hooks/useStorage.tsx";

type login_data = {
  username: string;
  password: string;
};

const UserApi = {
  async getCurrentUser() {
    try {
      const user = (
        await axios.get(`${API_ENDPOINT}/auth/self`, {
          headers: {
            Authorization: `Bearer ${getStorage(`auth_token`)}`
          }
        })
      ).data;
      putStorage(`role`, user.roles[0]);
      console.log(user);
    } catch (error) {
      putStorage(`role`, `GUEST`);
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
      const user = await this.getCurrentUser();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

export default UserApi;

/*eslint-enable*/
