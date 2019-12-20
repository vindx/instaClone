const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const PostsApi = {
  posts: [
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
      id: 123,
      postedDate: Date.now(),
      postPhoto:
        'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // URL, optional
      description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
      tags: '',
      likes: [12341],
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
      description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
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
      description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
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
      description: "this is my first time to archery. i'm not a good archer at all \u{1F606}",
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

  getAllPosts() {
    return Promise.resolve({ responseCode: 200, posts: this.posts });
  },

  createPost({ postPhoto, description, tags, authUser }) {
    const newPost = {
      id: generateID(),
      postedDate: Date.now(),
      postPhoto,
      description,
      tags,
      likes: [],
      wasLiked: false,
      owner: {
        userName: authUser.userName,
        profilePhoto: authUser.profilePhoto,
      },
    };
    this.posts.unshift(newPost);
    return this.getAllPosts();
  },

  deletePost(postId) {
    const index = this.posts.findIndex(post => post.id === postId);
    if (index > -1) {
      this.posts.splice(index, 1);
      return this.getAllPosts();
    }
    return Promise.resolve({ responseCode: 404, error: "Post didn't found" });
  },

  getAllPostsWithLikesStatus(userId) {
    const postsWithLikes = this.posts.map(post => {
      if (post.likes.includes(userId)) {
        return { ...post, wasLiked: true };
      }
      return post;
    });
    return Promise.resolve({ responseCode: 200, posts: postsWithLikes });
  },

  putLikeOnPost({ postId, userId }) {
    const post = { ...this.posts.find(p => p.id === postId) };
    if (post) {
      if (post.likes.includes(userId)) {
        const userIndex = post.likes.findIndex(id => id === userId);
        post.likes.splice(userIndex, 1);
        post.wasLiked = false;
      } else {
        post.likes.push(userId);
        post.wasLiked = true;
      }
    } else return Promise.resolve({ responseCode: 404, error: "Post didn't found" });
    return Promise.resolve({ responseCode: 200, post });
  },

  deleteAccount(userName) {
    for (let i = this.posts.length - 1; i >= 0; i--) {
      if (this.posts[i].owner.userName === userName) {
        this.posts.splice(i, 1);
      }
    }
    return Promise.resolve({ responseCode: 200, message: 'Done' });
  },
};

export default PostsApi;
