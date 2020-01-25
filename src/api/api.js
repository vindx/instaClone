import * as axios from 'axios';

const axiosWithToken = token =>
  axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const authApi = {
  authMe: async token => {
    try {
      const response = await axiosWithToken(token).get('/api/auth/me');
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
  getUsers: async token => {
    try {
      const response = await axiosWithToken(token).get('/api/users/all');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  deleteUser: async (id, token) => {
    try {
      const response = await axiosWithToken(token).delete(`/api/users/${id}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};

export const profileApi = {
  getAuthUser: async token => {
    try {
      const response = await axiosWithToken(token).get('/api/users/auth');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  getUserByUserName: async userName => {
    try {
      const response = await axios.get(`/api/users/${userName}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  changeRemoveRequestStatus: async token => {
    try {
      const response = await axiosWithToken(token).get('api/users/auth/removeRequest');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};
