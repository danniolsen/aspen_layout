export const categories = [
  {
    id: 1,
    name: "Hotels"
  },
  {
    id: 2,
    name: "Food"
  },
  {
    id: 3,
    name: "Adventure"
  },
  {
    id: 4,
    name: "Nightlife"
  },
  {
    id: 5,
    name: "Sports"
  },
  {
    id: 6,
    name: "Culture"
  }
];

export const attractions = [
  {
    id: 1,
    title: "Hotels",
    component: "ImageCard",
    items: [
      {
        id: 1,
        image: require("../assets/hotel2.jpg"),
        tag: "The little Nell",
        rating: "5"
      },
      {
        id: 2,
        image: require("../assets/regis.jpg"),
        tag: "St. Regis Hotel",
        rating: "4.3"
      },
      {
        id: 3,
        image: require("../assets/hotel3.jpg"),
        tag: "Limelight Snowmass",
        rating: "5"
      },
      {
        id: 4,
        image: require("../assets/hotel4.jpg"),
        tag: "W Aspen",
        rating: "4.6"
      }
    ]
  },
  {
    id: 2,
    title: "Food",
    component: "CompactCard",
    items: [
      {
        id: 1,
        image: require("../assets/iglo.jpg"),
        tag: "Meadow's Platos",
        rating: "5"
      },
      {
        id: 2,
        image: require("../assets/terrace.jpg"),
        tag: "Colorade Terrace",
        rating: "5.9"
      }
    ]
  },
  {
    id: 3,
    title: "Adventure",
    component: "ImageCard",
    items: [
      {
        id: 1,
        image: require("../assets/iglo.jpg"),
        tag: "Meadow's Platos",
        rating: "5"
      },
      {
        id: 2,
        image: require("../assets/regis.jpg"),
        tag: "St. Regis Hotel",
        rating: "4.3"
      }
    ]
  },
  {
    id: 4,
    title: "Nightlife",
    component: "ImageCard",
    items: [
      {
        id: 1,
        image: require("../assets/iglo.jpg"),
        tag: "Meadow's Platos",
        rating: "5"
      },
      {
        id: 2,
        image: require("../assets/regis.jpg"),
        tag: "St. Regis Hotel",
        rating: "4.3"
      }
    ]
  },
  {
    id: 5,
    title: "Sports",
    component: "ImageCard",
    items: []
  },
  {
    id: 6,
    title: "Culture",
    component: "ImageCard",
    items: []
  }
];
