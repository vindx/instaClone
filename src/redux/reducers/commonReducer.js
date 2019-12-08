const CREATE_NEW_POST = 'CREATE_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const GET_LIKES_STATUS = 'GET_LIKES_STATUS';
const PUT_LIKE_ON_POST = 'PUT_LIKE_ON_POST';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

const UPDATE_NEW_POST_INFO = 'UPDATE_NEW_POST_INFO';

const UPDATE_NEW_USER_INFO = 'UPDATE_NEW_USER_INFO';
const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';
const LOGIN_CHECK = 'LOGIN_CHECK';
const LOGOUT = 'LOGOUT';
const REMOVE_REQUEST = 'REMOVE_REQUEST';

const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const initialState = {
  firstLog: true,
  users: {
    newUserCheck: {
      emailIsNull: true,
      userNameIsNull: true,
      passwordIsNull: true,
      shortPassword: true,
      emailOrUserNameAlreadyExist: false,
    },
    newUser: {
      activeNow: false,
      email: '',
      userName: '',
      fullName: '',
      profilePhoto: '',
      password: '',
      removeRequest: false,
      posts: [],
    },
    loginUser: {
      emailOrUserName: '',
      password: '',
    },
    loginCheck: {
      successLogin: false,
      emailOrUserNameIsNull: true,
      passwordIsNull: true,
      shortPassword: true,
    },
    existedUsers: [
      {
        activeNow: false,
        email: 'admin',
        userName: 'admin',
        fullName: 'ADMINISTRATOR',
        profilePhoto: '',
        password: 'admin',
        removeRequest: false,
        posts: [],
      },

      {
        activeNow: false,
        email: 'kkdasod@kao.com',
        userName: 'loqasy',
        fullName: '', // optional
        profilePhoto:
          'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        password: '12345',
        removeRequest: true, // default value - FALSE
        posts: [],
      },
      {
        activeNow: false,
        email: 'kaolwq@kao.com',
        userName: 'kopola',
        fullName: 'Alice Lokino', // optional
        profilePhoto:
          'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        password: '12345',
        removeRequest: true, // default value - FALSE
        posts: [
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              'https://wallbox.ru/wallpapers/main/201137/cherno-belaya-oblaka-more-ba2d425.jpg', // URL, optional
            description:
              "this is my first time to archery. i'm not a good archer at all \u{1F606}",
            tags: '',
            likes: [],
            wasLiked: false,
            owner: {
              userName: 'kopola',
              profilePhoto: '', // URL
            }, // userName
          },
        ],
      },
      {
        activeNow: false,
        email: 'kaolwq@kao.com',
        userName: 'powaki',
        fullName: '', // optional
        profilePhoto:
          'https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        password: '12345',
        removeRequest: false, // default value - FALSE
        posts: [],
      },
    ],
  },
  posts: {
    newPost: {
      postPhoto: '',
      description: '',
      tags: '',
    },
    existedPosts: [
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto: '', // URL, optional
        description: `I'm gonna tell you a story today,which was I was dreaming before.
                ”Once I could fly the sky. I don't know the why, but I flew the same as high as people are standing.Passenger can definitely see me though, no one realise me!
                I was getting so sad, I talked to them, of course nobody replied me.Even though I found my family and friends and talked to them, they ignored me.I was so sad and felt lonely.
                Suddenly I saw my body was clear a bit,and finally found out I've already dead.After realising that,I began to cry a lot.”Then I woke up and I was really crying reality.`,
        tags: '',
        likes: ['kopola', 'powaki'],
        wasLiked: false,
        owner: {
          userName: 'loqasy',
          profilePhoto:
            'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
        description:
          "this is my first time to archery. i'm not a good archer at all \u{1F606}",
        tags: '',
        likes: [],
        wasLiked: false,
        owner: {
          userName: 'kopola',
          profilePhoto:
            'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
        description:
          "this is my first time to archery. i'm not a good archer at all \u{1F606}",
        tags: '',
        likes: [],
        wasLiked: false,
        owner: {
          userName: 'kopola',
          profilePhoto:
            'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
        description:
          "this is my first time to archery. i'm not a good archer at all \u{1F606}",
        tags: '',
        likes: [],
        wasLiked: false,
        owner: {
          userName: 'kopola',
          profilePhoto:
            'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
        description:
          "this is my first time to archery. i'm not a good archer at all \u{1F606}",
        tags: '',
        likes: [],
        wasLiked: false,
        owner: {
          userName: 'kopola',
          profilePhoto:
            'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          'https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
        description: 'WOW! \u{1F63B} just look at these flowers \u{1F33C} ',
        tags: '',
        likes: [],
        wasLiked: false,
        owner: {
          userName: 'powaki',
          profilePhoto:
            'https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
        }, // userName
      },
    ],
  },
};

const commonReducer = (state = initialState, action) => {
  const activeUser = state.users.existedUsers.find(user => user.activeNow);
  switch (action.type) {
    case UPDATE_NEW_USER_INFO:
      {
        const { email, fullName, userName, password } = action;
        state.users.newUser = {
          activeNow: false,
          email: email.replace(/\s/g, ''),
          userName: userName.replace(/\s/g, ''),
          fullName,
          password: password.replace(/\s/g, ''),
          profilePhoto: '',
          removeRequest: false,
          posts: [],
        };
        state.users.newUserCheck.emailIsNull = state.users.newUser.email === '';
        state.users.newUserCheck.userNameIsNull =
          state.users.newUser.userName === '';
        state.users.newUserCheck.passwordIsNull =
          state.users.newUser.password === '';
        state.users.newUserCheck.shortPassword =
          state.users.newUser.password.length < 6;

        state.users.newUserCheck.emailOrUserNameAlreadyExist = !!state.users.existedUsers.find(
          ({ email, userName }) =>
            email === state.users.newUser.email ||
            email === state.users.newUser.userName ||
            userName === state.users.newUser.userName ||
            userName === state.users.newUser.email
        );
      }
      return state;
    case CREATE_ACCOUNT:
      state.users.newUser.activeNow = true;
      state.users.existedUsers.push(state.users.newUser);
      state.users.newUser = {
        activeNow: false,
        email: '',
        userName: '',
        fullName: '',
        profilePhoto: '',
        password: '',
        removeRequest: false,
        posts: [],
      };
      return state;
    case UPDATE_LOGIN_INFO:
      {
        const { emailOrUserName, password } = action;
        state.users.loginUser = {
          emailOrUserName: emailOrUserName.replace(/\s/g, ''),
          password: password.replace(/\s/g, ''),
        };
        state.users.loginCheck.emailOrUserNameIsNull =
          state.users.loginUser.emailOrUserName === '';
        state.users.loginCheck.passwordIsNull =
          state.users.loginUser.password === '';
        state.users.loginCheck.shortPassword =
          state.users.loginUser.password.length < 5;
        state.users.loginCheck.successLogin = !!state.users.existedUsers.find(
          ({ email, userName, password }) =>
            (email === state.users.loginUser.emailOrUserName ||
              userName === state.users.loginUser.emailOrUserName) &&
            password === state.users.loginUser.password
        );
      }
      return state;
    case LOGIN_CHECK:
      {
        const foundedUser = state.users.existedUsers.find(
          ({ email, userName, password }) =>
            (email === state.users.loginUser.emailOrUserName ||
              userName === state.users.loginUser.emailOrUserName) &&
            password === state.users.loginUser.password
        );
        foundedUser.activeNow = true;
        state.users.loginUser = {
          emailOrUserName: '',
          password: '',
        };
      }
      return state;
    case LOGOUT:
      activeUser.activeNow = false;
      return state;
    case REMOVE_REQUEST:
      activeUser.removeRequest = !activeUser.removeRequest;
      return state;
    case UPDATE_NEW_POST_INFO:
      {
        const { postPhoto = '', description, tags = '' } = action;
        state.posts.newPost = {
          postPhoto,
          description,
          tags,
        };
      }
      return state;
    case CREATE_NEW_POST:
      {
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
            profilePhoto: activeUser.profilePhoto,
          },
        };
        state.posts.existedPosts.unshift(newPost);
        activeUser.posts.unshift(newPost);
        state.posts.newPost = {
          postPhoto: '',
          description: '',
          tags: '',
        };
      }
      return state;
    case DELETE_POST:
      {
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
      }
      return state;
    case GET_LIKES_STATUS:
      state.posts.existedPosts.forEach(post => {
        post.wasLiked = post.likes.includes(activeUser.userName);
      });
      return state;
    case PUT_LIKE_ON_POST:
      {
        const { id: postId } = action;
        const post = state.posts.existedPosts.find(post => post.id === postId);
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
      }
      return state;
    case DELETE_ACCOUNT:
      {
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
      }
      return state;
    default:
      return state;
  }
};

export default commonReducer;
