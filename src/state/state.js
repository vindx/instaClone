let rerenderEntireTree = () => {};

const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

export let state = {
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
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export const createAccount = () => {
  const findByMatchingEmailOrUserName = ({ email, userName }) => {
    return (
      email === state.newUser.email ||
      userName === state.newUser.userName ||
      userName === state.newUser.email ||
      email === state.newUser.userName
    );
  };
  if (state.users.find(findByMatchingEmailOrUserName)) {
    return true;
  } else {
    state.newUser.activeNow = true;
    state.users.push(state.newUser);
    state.newUser = {
      activeNow: false,
      email: "",
      userName: "",
      fullName: "",
      profilePhoto: "",
      password: "",
      removeRequest: false,
      posts: []
    };
    rerenderEntireTree(state);
  }
};

export const removeRequest = () => {
  let activeUser = state.users.find(user => user.activeNow);
  activeUser.removeRequest = !activeUser.removeRequest;
  rerenderEntireTree(state);
};

export const logOut = () => {
  let activeUser = state.users.find(user => user.activeNow);
  activeUser.activeNow = false;
  rerenderEntireTree(state);
};

export const updateNewUserInfo = ({ email, fullName, userName, password }) => {
  state.newUser = {
    activeNow: false,
    email,
    userName,
    fullName,
    password,
    profilePhoto: "",
    removeRequest: false,
    posts: []
  };
  rerenderEntireTree(state);
};

export const logInCheck = () => {
  const findByEmailOrUserNameAndPassword = ({ email, userName, password }) => {
    return (
      (email === state.loginUser.emailOrUserName ||
        userName === state.loginUser.emailOrUserName) &&
      password === state.loginUser.password
    );
  };
  let foundedUser = state.users.find(findByEmailOrUserNameAndPassword);
  if (foundedUser) {
    foundedUser.activeNow = true;
    state.loginUser = {
      emailOrUserName: "",
      password: ""
    };
    rerenderEntireTree(state);
    return true;
  }
};

export const updateLogInInfo = ({ emailOrUserName, password }) => {
  state.loginUser = {
    emailOrUserName,
    password
  };
  rerenderEntireTree(state);
};

export const createNewPost = ({ postPhoto = "", description, tags = "" }) => {
  let activeUser = state.users.find(user => user.activeNow);
  state.posts.unshift({
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
  rerenderEntireTree(state);
};

export const deleteUser = userName => {
  const index = state.users.findIndex(user => user.userName === userName);
  if (index > -1) {
    state.users.splice(index, 1);
    for (let i = state.posts.length - 1; i >= 0; i--) {
      if (state.posts[i].owner.userName === userName) {
        state.posts.splice(i, 1);
      }
    }
  }
  rerenderEntireTree(state);
};
