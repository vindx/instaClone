import * as axios from 'axios';

export const usersApi = {
  getUsers: async () => {
    try {
      const response = await axios.get('/api/users/all');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  deleteUser: async id => {
    try {
      const response = await axios.delete(`/api/users/${id}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};
