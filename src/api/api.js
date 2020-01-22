import * as axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('/api/users/all');
    return { status: response.status, data: response.data };
  } catch (e) {
    return { status: e.response.status, data: e.response.data };
  }
};
