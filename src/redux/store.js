const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

let store = {
  _state: {
    newUser: {
      activeNow: false,
      email: "",
      userName: "",
      fullName: "",
      profilePhoto: "",
      password: "",
      removeRequest: false,
      posts: []
    },
    loginUser: {
      emailOrUserName: "",
      password: ""
    },
    users: [
      {
        activeNow: false,
        email: "admin@admin",
        userName: "admin",
        fullName: "ADMINISTRATOR",
        profilePhoto: "",
        password: "admin",
        removeRequest: false,
        posts: []
      },
      {
        activeNow: false,
        email: "kkdasod@kao.com",
        userName: "loqasy",
        fullName: "", //optional
        profilePhoto:
          "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL
        password: "12345",
        removeRequest: true, //default value - FALSE
        posts: []
      },
      {
        activeNow: false,
        email: "kaolwq@kao.com",
        userName: "kopola",
        fullName: "Alice Lokino", //optional
        profilePhoto:
          "https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL
        password: "12345",
        removeRequest: true, //default value - FALSE
        posts: [
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          },
          {
            id: generateID(),
            postedDate: Date.now(),
            postPhoto:
              "https://wallbox.ru/wallpapers/main/201137/cherno-belaya-oblaka-more-ba2d425.jpg", //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: "",
            likes: [],
            wasLiked: true,
            owner: {
              userName: "kopola",
              profilePhoto: "" //URL
            } //userName
          }
        ]
      },
      {
        activeNow: false,
        email: "kaolwq@kao.com",
        userName: "powaki",
        fullName: "", //optional
        profilePhoto:
          "https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL
        password: "12345",
        removeRequest: false, //default value - FALSE
        posts: []
      }
    ],
    newPost: {
      postPhoto: "",
      description: "",
      tags: ""
    },
    posts: [
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto: "", //URL, optional
        description: `I'm gonna tell you a story today,which was I was dreaming before.
                ”Once I could fly the sky. I don't know the why, but I flew the same as high as people are standing.Passenger can definitely see me though, no one realise me!
                I was getting so sad, I talked to them, of course nobody replied me.Even though I found my family and friends and talked to them, they ignored me.I was so sad and felt lonely.
                Suddenly I saw my body was clear a bit,and finally found out I've already dead.After realising that,I began to cry a lot.”Then I woke up and I was really crying reality.`,
        tags: "",
        likes: ["1232"],
        wasLiked: true,
        owner: {
          userName: "loqasy",
          profilePhoto:
            "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
        tags: "",
        likes: [],
        wasLiked: true,
        owner: {
          userName: "kopola",
          profilePhoto:
            "https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
        tags: "",
        likes: [],
        wasLiked: true,
        owner: {
          userName: "kopola",
          profilePhoto:
            "https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
        tags: "",
        likes: [],
        wasLiked: true,
        owner: {
          userName: "kopola",
          profilePhoto:
            "https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          "https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
        tags: "",
        likes: [],
        wasLiked: true,
        owner: {
          userName: "kopola",
          profilePhoto:
            "https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      },
      {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto:
          "https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `WOW! \u{1F63B} just look at these flowers \u{1F33C} `,
        tags: "",
        likes: [],
        wasLiked: false,
        owner: {
          userName: "powaki",
          profilePhoto:
            "https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      }
    ]
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  /*getLikeStatus() {
    const { userName } = this._state.users.find(user => user.activeNow);
    this._state.posts.forEach(post => {
      post.wasLiked = post.likes.includes(userName);
    });
    return this._state;
  },*/

  /*  updateLogInInfo({ emailOrUserName, password }) {
    this._state.loginUser = {
      emailOrUserName,
      password
    };
    this._callSubscriber(this._state);
  },*/
  /* logInCheck() {
    const findByEmailOrUserNameAndPassword = ({
      email,
      userName,
      password
    }) => {
      return (
        (email === this._state.loginUser.emailOrUserName ||
          userName === this._state.loginUser.emailOrUserName) &&
        password === this._state.loginUser.password
      );
    };
    let foundedUser = this._state.users.find(findByEmailOrUserNameAndPassword);
    if (foundedUser) {
      foundedUser.activeNow = true;
      this._state.loginUser = {
        emailOrUserName: "",
        password: ""
      };
      this._callSubscriber(this._state);
      return true;
    }
  },*/
  /*logOut() {
    let activeUser = this._state.users.find(user => user.activeNow);
    activeUser.activeNow = false;
    this._callSubscriber(this._state);
  },*/

  /*  updateNewUserInfo({ email, fullName, userName, password }) {
    this._state.newUser = {
      activeNow: false,
      email,
      userName,
      fullName,
      password,
      profilePhoto: "",
      removeRequest: false,
      posts: []
    };
    this._callSubscriber(this._state);
  },*/
  /*createAccount() {
    const findByMatchingEmailOrUserName = ({ email, userName }) => {
      return (
        email === this._state.newUser.email ||
        userName === this._state.newUser.userName ||
        userName === this._state.newUser.email ||
        email === this._state.newUser.userName
      );
    };
    if (this._state.users.find(findByMatchingEmailOrUserName)) {
      return true;
    } else {
      this._state.newUser.activeNow = true;
      this._state.users.push(this._state.newUser);
      this._state.newUser = {
        activeNow: false,
        email: "",
        userName: "",
        fullName: "",
        profilePhoto: "",
        password: "",
        removeRequest: false,
        posts: []
      };
      this._callSubscriber(this._state);
    }
  },*/

  /*  updateNewPost({ postPhoto = "", description, tags = "" }) {
    this._state.newPost = {
      postPhoto,
      description,
      tags
    };
    this._callSubscriber(this._state);
  },*/
  /*  createNewPost() {
    let activeUser = this._state.users.find(user => user.activeNow);
    const { userName, profilePhoto } = activeUser;
    const { postPhoto, description, tags } = this._state.newPost;
    const newPost = {
      id: generateID(),
      postedDate: Date.now(),
      postPhoto,
      description,
      tags,
      likes: [],
      wasLiked: false,
      owner: {
        userName: userName,
        profilePhoto: profilePhoto
      }
    };
    this._state.posts.unshift(newPost);
    activeUser.posts.unshift(newPost);
    this._state.newPost = {
      postPhoto: "",
      description: "",
      tags: ""
    };

    this._callSubscriber(this._state);
  },*/
  /*deletePost(id) {
    let activeUser = this._state.users.find(user => user.activeNow);
    for (let i = 0; i < this._state.posts.length; i++) {
      if (this._state.posts[i].id === id) {
        this._state.posts.splice(i, 1);
      }
    }
    for (let i = 0; i < activeUser.posts.length; i++) {
      if (activeUser.posts[i].id === id) {
        activeUser.posts.splice(i, 1);
      }
    }
    this._callSubscriber(this._state);
  },*/

  /*  putLikeOnPost(postId) {
    const { userName } = this._state.users.find(user => user.activeNow);
    let post = this._state.posts.find(post => post.id === postId);
    if (post.likes.includes(userName)) {
      const index = post.likes.findIndex(user => user === userName);
      post.likes.splice(index, 1);
    } else {
      post.likes.push(userName);
    }
    this._callSubscriber(this._state);
  },*/

  /* removeRequest() {
    let activeUser = this._state.users.find(user => user.activeNow);
    activeUser.removeRequest = !activeUser.removeRequest;
    this._callSubscriber(this._state);
  },*/
  /* deleteUser(userName) {
    const index = this._state.users.findIndex(
      user => user.userName === userName
    );
    if (index > -1) {
      this._state.users.splice(index, 1);
      for (let i = this._state.posts.length - 1; i >= 0; i--) {
        if (this._state.posts[i].owner.userName === userName) {
          this._state.posts.splice(i, 1);
        }
      }
    }
    this._callSubscriber(this._state);
  },*/

  dispatch(action) {
    if (action.type === "CREATE_NEW_POST") {
      let activeUser = this._state.users.find(user => user.activeNow);
      const { userName, profilePhoto } = activeUser;
      const { postPhoto, description, tags } = this._state.newPost;
      const newPost = {
        id: generateID(),
        postedDate: Date.now(),
        postPhoto,
        description,
        tags,
        likes: [],
        wasLiked: false,
        owner: {
          userName: userName,
          profilePhoto: profilePhoto
        }
      };
      this._state.posts.unshift(newPost);
      activeUser.posts.unshift(newPost);
      this._state.newPost = {
        postPhoto: "",
        description: "",
        tags: ""
      };

      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_POST_INFO") {
      const { postPhoto = "", description, tags = "" } = action;
      this._state.newPost = {
        postPhoto,
        description,
        tags
      };
      this._callSubscriber(this._state);
    } else if (action.type === "DELETE_POST") {
      const { id } = action;
      let activeUser = this._state.users.find(user => user.activeNow);
      for (let i = 0; i < this._state.posts.length; i++) {
        if (this._state.posts[i].id === id) {
          this._state.posts.splice(i, 1);
        }
      }
      for (let i = 0; i < activeUser.posts.length; i++) {
        if (activeUser.posts[i].id === id) {
          activeUser.posts.splice(i, 1);
        }
      }
      this._callSubscriber(this._state);
    } else if (action.type === "GET_LIKES_STATUS") {
      const { userName } = this._state.users.find(user => user.activeNow);
      this._state.posts.forEach(post => {
        post.wasLiked = post.likes.includes(userName);
      });
      return this._state;
    } else if (action.type === "UPDATE_LOGIN_INFO") {
      const { emailOrUserName, password } = action;
      this._state.loginUser = {
        emailOrUserName,
        password
      };
      this._callSubscriber(this._state);
    } else if (action.type === "LOGIN_CHECK") {
      const findByEmailOrUserNameAndPassword = ({
        email,
        userName,
        password
      }) => {
        return (
          (email === this._state.loginUser.emailOrUserName ||
            userName === this._state.loginUser.emailOrUserName) &&
          password === this._state.loginUser.password
        );
      };
      let foundedUser = this._state.users.find(
        findByEmailOrUserNameAndPassword
      );
      if (foundedUser) {
        foundedUser.activeNow = true;
        this._state.loginUser = {
          emailOrUserName: "",
          password: ""
        };
        this._callSubscriber(this._state);
        return true;
      }
    } else if (action.type === "LOGOUT") {
      let activeUser = this._state.users.find(user => user.activeNow);
      activeUser.activeNow = false;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_USER_INFO") {
      const { email, fullName, userName, password } = action;
      this._state.newUser = {
        activeNow: false,
        email,
        userName,
        fullName,
        password,
        profilePhoto: "",
        removeRequest: false,
        posts: []
      };
      this._callSubscriber(this._state);
    } else if (action.type === "CREATE_ACCOUNT") {
      const findByMatchingEmailOrUserName = ({ email, userName }) => {
        return (
          email === this._state.newUser.email ||
          userName === this._state.newUser.userName ||
          userName === this._state.newUser.email ||
          email === this._state.newUser.userName
        );
      };
      if (this._state.users.find(findByMatchingEmailOrUserName)) {
        return true;
      } else {
        this._state.newUser.activeNow = true;
        this._state.users.push(this._state.newUser);
        this._state.newUser = {
          activeNow: false,
          email: "",
          userName: "",
          fullName: "",
          profilePhoto: "",
          password: "",
          removeRequest: false,
          posts: []
        };
        this._callSubscriber(this._state);
      }
    } else if (action.type === "PUT_LIKE_ON_POST") {
      const { id: postId } = action;
      const { userName } = this._state.users.find(user => user.activeNow);
      let post = this._state.posts.find(post => post.id === postId);
      if (post.likes.includes(userName)) {
        const index = post.likes.findIndex(user => user === userName);
        post.likes.splice(index, 1);
      } else {
        post.likes.push(userName);
      }
      this._callSubscriber(this._state);
    } else if (action.type === "REMOVE_REQUEST") {
      let activeUser = this._state.users.find(user => user.activeNow);
      activeUser.removeRequest = !activeUser.removeRequest;
      this._callSubscriber(this._state);
    } else if (action.type === "DELETE_USER") {
      const { userName } = action;
      const index = this._state.users.findIndex(
        user => user.userName === userName
      );
      if (index > -1) {
        this._state.users.splice(index, 1);
        for (let i = this._state.posts.length - 1; i >= 0; i--) {
          if (this._state.posts[i].owner.userName === userName) {
            this._state.posts.splice(i, 1);
          }
        }
      }
      this._callSubscriber(this._state);
    }
  }
};

export default store;
