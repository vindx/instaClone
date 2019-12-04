const CREATE_NEW_POST = "CREATE_NEW_POST";
const DELETE_POST = "DELETE_POST";
const GET_LIKES_STATUS = "GET_LIKES_STATUS";
const PUT_LIKE_ON_POST = "PUT_LIKE_ON_POST";
const DELETE_ACCOUNT = "DELETE_ACCOUNT";

const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const commonReducer = (state, action) => {
  let activeUser = state.users.existedUsers.find(user => user.activeNow);
  switch (action.type) {
    case CREATE_NEW_POST:
      const { postPhoto, description, tags } = state.posts.newPost;
      const newPost = {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto,
        description,
        tags,
        likes: [],
        wasLiked: false,
        owner: {
          userName: activeUser.userName,
          profilePhoto: activeUser.profilePhoto
        }
      };
      state.posts.existedPosts.unshift(newPost);
      activeUser.posts.unshift(newPost);
      state.posts.newPost = {
        postPhoto: "",
        description: "",
        tags: ""
      };
      return state;
    case DELETE_POST:
      const { id } = action;
      for (let i = 0; i < state.posts.existedPosts.length; i++) {
        if (state.posts.existedPosts[i].id === id) {
          state.posts.existedPosts.splice(i, 1);
        }
      }
      for (let i = 0; i < activeUser.posts.length; i++) {
        if (activeUser.posts[i].id === id) {
          activeUser.posts.splice(i, 1);
        }
      }
      return state;
    case GET_LIKES_STATUS:
      state.posts.existedPosts.forEach(post => {
        post.wasLiked = post.likes.includes(activeUser.userName);
      });
      return state;
    case PUT_LIKE_ON_POST:
      const { id: postId } = action;
      let post = state.posts.existedPosts.find(post => post.id === postId);
      if (post.likes.includes(activeUser.userName)) {
        const index = post.likes.findIndex(
          user => user === activeUser.userName
        );
        post.wasLiked = false;
        post.likes.splice(index, 1);
      } else {
        post.wasLiked = true;
        post.likes.push(activeUser.userName);
      }
      return state;
    case DELETE_ACCOUNT:
      const { userName } = action;
      const index = state.users.existedUsers.findIndex(
        user => user.userName === userName
      );
      if (index > -1) {
        state.users.existedUsers.splice(index, 1);
        for (let i = state.posts.existedPosts.length - 1; i >= 0; i--) {
          if (state.posts.existedPosts[i].owner.userName === userName) {
            state.posts.existedPosts.splice(i, 1);
          }
        }
      }
      return state;
    default:
      return state;
  }
};

export default commonReducer;
