const UPDATE_NEW_POST_INFO = 'UPDATE_NEW_POST_INFO';

const postsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_INFO:
      const { postPhoto = '', description, tags = '' } = action;
      state.newPost = {
        postPhoto,
        description,
        tags,
      };
      return state;
    default:
      return state;
  }
};

export default postsReducer;
