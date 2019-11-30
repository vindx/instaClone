let rerenderEntireTree = () => {};

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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
            likes: 18,
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
        likes: 6,
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
        likes: 18,
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
        likes: 18,
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
        likes: 18,
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
        likes: 18,
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
          "https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", //URL, optional
        description: `WOW! \u{1F63B} just look at these flowers \u{1F33C} `,
        tags: "",
        likes: 8,
        wasLiked: false,
        owner: {
          userName: "powaki",
          profilePhoto:
            "https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" //URL
        } //userName
      }
    ]
  },
  getState() {
    return this._state;
  },
  createAccount() {
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
      rerenderEntireTree(this._state);
    }
  },
  removeRequest() {
    let activeUser = this._state.users.find(user => user.activeNow);
    activeUser.removeRequest = !activeUser.removeRequest;
    rerenderEntireTree(this._state);
  },
  logOut() {
    let activeUser = this._state.users.find(user => user.activeNow);
    activeUser.activeNow = false;
    rerenderEntireTree(this._state);
  },
  updateNewUserInfo({ email, fullName, userName, password }) {
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
    rerenderEntireTree(this._state);
  },
  logInCheck() {
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
      rerenderEntireTree(this._state);
      return true;
    }
  },
  updateLogInInfo({ emailOrUserName, password }) {
    this._state.loginUser = {
      emailOrUserName,
      password
    };
    rerenderEntireTree(this._state);
  },
  createNewPost({ postPhoto = "", description, tags = "" }) {
    let activeUser = this._state.users.find(user => user.activeNow);
    this._state.posts.unshift({
      id: generateID(),
      postedDate: Date.now(),
      postPhoto,
      description,
      tags,
      likes: 0,
      wasLiked: false,
      owner: {
        userName: activeUser.userName,
        profilePhoto: activeUser.profilePhoto
      }
    });
    rerenderEntireTree(this._state);
  },
  deleteUser(userName) {
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
    rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  }
};

export default store;
