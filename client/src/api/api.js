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
      const response = await axiosWithToken(token).get('/api/users/auth/removeRequest');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  uploadPhoto: async (token, photoFile) => {
    try {
      const formData = new FormData();
      formData.append('img', photoFile);
      const response = await axiosWithToken(token).put('/api/users/auth/uploadPhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  deleteProfilePhoto: async token => {
    try {
      const response = await axiosWithToken(token).delete('/api/users/auth/deletePhoto');
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};

export const postsApi = {
  getAllPosts: async (token, page = 1, limit = 5) => {
    try {
      const response = await axiosWithToken(token).get(
        `/api/posts/all?page=${page}&limit=${limit}`
      );
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  getPostsByTag: async (token, tagId) => {
    try {
      const response = await axiosWithToken(token).get(`/api/posts/byTag/${tagId}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  putLikeOnPost: async (token, postId) => {
    try {
      const response = await axiosWithToken(token).get(`/api/posts/like/${postId}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  getUsersWhoLikedThePost: async postId => {
    try {
      const response = await axios.get(`/api/posts/whoLiked/${postId}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  createPost: async (token, postPhoto, description, tags) => {
    try {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('img', postPhoto);
      const tagsJSON = JSON.stringify(tags);
      formData.append('tagsJSON', tagsJSON);
      const response = await axiosWithToken(token).post('/api/posts/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  deletePost: async (token, postId) => {
    try {
      const response = await axiosWithToken(token).delete(`/api/posts/delete/${postId}`);
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};

export const tagsApi = {
  find: async tagName => {
    try {
      const response = await axios.post('/api/tags/find', { tagName });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
  create: async (token, tagName) => {
    try {
      const response = await axiosWithToken(token).post('/api/tags/create', { tagName });
      return { status: response.status, data: response.data };
    } catch (e) {
      return { status: e.response.status, data: e.response.data };
    }
  },
};
