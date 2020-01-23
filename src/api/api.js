import * as axios from 'axios';

export const authApi = {
  authMe: async token => {
    try {
      const response = await axios.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  register: async (email, fullName, userName, password) => {
    try {
      const response = await axios.post('/api/auth/register', {
        email,
        fullName,
        userName,
        password,
      });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  login: async (emailOrUserName, password) => {
    try {
      const response = await axios.post('/api/auth/login', {
        emailOrUserName,
        password,
      });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};

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
