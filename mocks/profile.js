export const profileApi = async ({ delay }) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        profileInfo: {
          avatar: null,
          name: null
        },
        statistic: {
          bonuses: 123.45,
          sold: 144.2,
          profit: 50.11,
          balance: 1400.8
        },
        history: {
          items: [
            {
              id: 0,
              date: "2020-11-27T19:26:28.822Z",
              cardNumber: "4222222222222",
              amount: 28.45,
              type: "sell",
              sellItems: [
                {
                  id: 0,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 1,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                }
              ]
            },
            {
              id: 2,
              date: "2020-10-06T19:26:28.822Z",
              cardNumber: "5105105105105100",
              amount: 6405.45,
              type: "withdraw"
            },
            {
              id: 3,
              date: "2018-11-05T19:26:28.822Z",
              cardNumber: "4012888888881881",
              amount: 623.45,
              type: "withdraw"
            },
            {
              id: 4,
              date: "2001-11-15T19:26:28.822Z",
              cardNumber: "5555555555554444",
              amount: 333.45,
              type: "sell",
              sellItems: [
                {
                  id: 0,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 1,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 2,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 3,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 4,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                },
                {
                  id: 5,
                  imgUrl:
                    "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f"
                }
              ]
            }
          ]
        },
        multi: {
          items: [
            {
              id: 0,
              avatar: "http://lorempixel.com/400/200/",
              nickname: "s1mple",
              amount: 12542.99,
              active: true,
              tradelink: ""
            },
            {
              id: 2,
              avatar: "http://lorempixel.com/400/200/",
              nickname: "electroNic",
              amount: 154,
              active: false,
              tradelink: ""
            },
            {
              id: 4,
              avatar: "http://lorempixel.com/400/200/",
              nickname: "Flamie",
              amount: 50000.34,
              active: false,
              tradelink: ""
            },
            {
              id: 54,
              avatar: "http://lorempixel.com/400/200/",
              nickname: "Perfecto",
              amount: 10,
              active: true,
              tradelink: ""
            },
            {
              id: 32,
              avatar: "http://lorempixel.com/400/200/",
              nickname: "BoombI4",
              amount: 1.25,
              active: false,
              tradelink: ""
            }
          ]
        }
      });
    }, delay);
  });

export const deleteMultiItem = async ({ delay }) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });

export const WebSocketMock = ({ cb }) => {
  if (!cb) {
    return;
  }
  setInterval(() => {
    cb({
      id: Math.floor(Math.random() * 9999) + 1,
      image:
        "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35c18lwmO7Eu9z20A3i_0NqYmmhLYCWcAFoM1HW81i4wLi9hJ65u5_InXFm7nEgsy3D30vg5cOjZss/360fx360f",
      name: "M4",
      price: Math.floor(Math.random() * 9999) + 1,
      quality: Math.floor(Math.random() * 6) + 1
    });
  }, 1500);
};
