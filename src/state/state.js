export let state = {
    users: [
        {
            email: 'kkdasod@kao.com',
            userName: 'loqasy',
            fullName: '', //optional
            profilePhoto: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL
            password: '12345',
            removeRequest: false, //default value - FALSE
            posts: [],
        },
        {
            email: 'kaolwq@kao.com',
            userName: 'kopola',
            fullName: 'Alice Lokino', //optional
            profilePhoto: 'https://images.pexels.com/photos/3194582/pexels-photo-3194582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL
            password: '12345',
            removeRequest: false, //default value - FALSE
            posts: [
                {
                    id: Math.random(),
                    postedDate: Date.now(),
                    postPhoto: 'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL, optional
                    description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
                    tags: '',
                    likes: 18,
                    wasLiked: true,
                    owner: {
                        userName: 'kopola',
                        profilePhoto: '', //URL
                    }, //userName
                },
            ],
        },
        {
            email: 'kaolwq@kao.com',
            userName: 'powaki',
            fullName: '', //optional
            profilePhoto: 'https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL
            password: '12345',
            removeRequest: false, //default value - FALSE
            posts: [],
        },
    ],
    posts: [
        {
            id: Math.random(),
            postedDate: Date.now(),
            postPhoto: '', //URL, optional
            description: `I'm gonna tell you a story today,which was I was dreaming before.
                ”Once I could fly the sky. I don't know the why, but I flew the same as high as people are standing.Passenger can definitely see me though, no one realise me!
                I was getting so sad, I talked to them, of course nobody replied me.Even though I found my family and friends and talked to them, they ignored me.I was so sad and felt lonely.
                Suddenly I saw my body was clear a bit,and finally found out I've already dead.After realising that,I began to cry a lot.”Then I woke up and I was really crying reality.`,
            tags: '',
            likes: 6,
            wasLiked: true,
            owner: {
                userName: 'loqasy',
                profilePhoto: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL
            }, //userName
        },
        {
            id: Math.random(),
            postedDate: Date.now(),
            postPhoto: 'https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL, optional
            description: `this is my first time to archery. i'm not a good archer at all \u{1F606}`,
            tags: '',
            likes: 18,
            wasLiked: true,
            owner: {
                userName: 'kopola',
                profilePhoto:
                    '', //URL
            }, //userName
        },
        {
            id: Math.random(),
            postedDate: Date.now(),
            postPhoto: 'https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL, optional
            description: `WOW! \u{1F63B} just look at these flowers \u{1F33C} `,
            tags: '',
            likes: 8,
            wasLiked: false,
            owner: {
                userName: 'powaki',
                profilePhoto:
                    'https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', //URL
            }, //userName
        },
    ],
};