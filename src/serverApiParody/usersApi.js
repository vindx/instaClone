const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const UsersApi = {
  users: [
    {
      id: generateID(),
      email: 'admin@admin.admin',
      userName: 'admin',
      fullName: 'ADMINISTRATOR',
      profilePhoto: '',
      password: 'admin94',
      removeRequest: false,
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqa54sy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqv4asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loq33h3asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqasyh3y',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqaga1asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqeg341asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqg231g1asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqg4qgasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqagq2g4sy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'lag32oqasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqasg2g2asy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqasd4fy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqah2sy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqaasdg1sy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqafgshasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqazxssy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqaasassy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqwqewqasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'lo1241231qasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqas124123y',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'loqas4123y',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdasod@kao.com',
      userName: 'l1241231oqasy',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkdas1od@kao.com',
      userName: 'loqasy321',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'kkd2asod@kao.com',
      userName: 'loqasy123',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '1234566',
      removeRequest: true, // default value - FALSE
      posts: [],
    },
    {
      id: generateID(),
      email: 'ka123@kao.com',
      userName: 'kopola',
      fullName: 'Alice Lokino', // optional
      profilePhoto:
        'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '123456',
      removeRequest: true, // default value - FALSE
      posts: [
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
        {
          id: generateID(),
          postedDate: Date.now(),
          postPhoto:
            'https://wallbox.ru/wallpapers/main/201137/cherno-belaya-oblaka-more-ba2d425.jpg', // URL, optional
          description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
          tags: '',
        },
      ],
    },
    {
      id: generateID(),
      email: '145wq@kao.com',
      userName: 'powaki',
      fullName: '', // optional
      profilePhoto:
        'https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL
      password: '123456',
      removeRequest: false, // default value - FALSE
      posts: [],
    },
  ],

  getAllUsers(pageSize = this.users.length, pageNum = 1) {
    const fromNum = pageSize * pageNum - pageSize + 1; // default from 1 cause users[0] = ADMIN
    const toNum = pageSize * pageNum + 1; // default to 11 cause slice's work
    const copyUsers = JSON.parse(JSON.stringify(this.users.slice(fromNum, toNum)));
    return Promise.resolve({ responseCode: 200, users: copyUsers, totalCount: this.users.length });
  },

  getUserByUserName(userName) {
    const user = this.users.find(u => u.userName === userName);
    if (user) {
      return Promise.resolve({ responseCode: 200, user });
    }
    return Promise.resolve({ responseCode: 404, error: "User didn't found" });
  },

  createUser({ email, fullName = '', userName, password }) {
    const emailExist = !!this.users.find(({ email: existedEmail }) => existedEmail === email);
    const userNameExist = !!this.users.find(
      ({ userName: existedUserName }) => existedUserName === userName
    );
    if (emailExist || userNameExist) {
      if (emailExist) {
        return Promise.resolve({ responseCode: 10, error: 'Another account is using this email.' });
      }
      if (userNameExist) {
        return Promise.resolve({
          responseCode: 11,
          error: "This username isn't available. Please try another.",
        });
      }
    } else {
      const newUser = {
        id: generateID(),
        email,
        userName,
        fullName,
        profilePhoto: '',
        password,
        removeRequest: false,
        posts: [],
      };
      this.users.push(newUser);
      return Promise.resolve({ responseCode: 200, user: { ...newUser, password: null } });
    }
    return Promise.resolve({
      responseCode: 10,
      error: "'Sorry, something went wrong creating your account. Please try again soon.",
    });
  },

  getUserByLogInInfo({ emailOrUserName, password }) {
    const foundUser = this.users.find(
      ({ email, userName }) => emailOrUserName === email || emailOrUserName === userName
    );
    if (foundUser) {
      if (foundUser.password === password) {
        return Promise.resolve({ responseCode: 200, user: { ...foundUser, password: null } });
      }
      return Promise.resolve({
        responseCode: 10,
        error: 'Sorry, your password was incorrect. Please double-check your password.',
      });
    }
    return Promise.resolve({
      responseCode: 10,
      error:
        "The username you entered doesn't belong to an account. Please check your username and try again.",
    });
  },

  changeRemoveRequest(id) {
    const user = this.users.find(u => u.id === id);
    if (user) {
      user.removeRequest = !user.removeRequest;
      return Promise.resolve({ responseCode: 200, user });
    }
    return Promise.resolve({ responseCode: 404, error: "User didn't found" });
  },

  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return this.getAllUsers();
    }
    return Promise.resolve({ responseCode: 404, error: "User didn't found" });
  },

  createPost({ postPhoto, description, tags, userId }) {
    const newPost = {
      id: generateID(),
      postedDate: Date.now(),
      postPhoto,
      description,
      tags,
    };
    const authorizedUser = this.users.find(u => u.id === userId);
    authorizedUser.posts.unshift(newPost);
    return Promise.resolve({ responseCode: 200, user: authorizedUser });
  },

  deletePost({ postId, userId }) {
    const authorizedUser = this.users.find(u => u.id === userId);
    const postIndex = authorizedUser.posts.findIndex(p => p.id === postId);
    if (postIndex) {
      if (postIndex > -1) {
        authorizedUser.posts.splice(postIndex, 1);
      }
    } else {
      return Promise.resolve({ responseCode: 404, error: "Post didn't found" });
    }
    return Promise.resolve({ responseCode: 200, user: authorizedUser });
  },
};

export default UsersApi;
