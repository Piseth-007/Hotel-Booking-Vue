export const kep = [
  {
    id: 1,
    title: "Kep Ocean Retreat",
    slug: "kep-ocean-retreat",
    destination: "kep",
    type: "Beach Resort",
    stars: 5,

    featured: true,
    trending: true,

    location: {
      city: "Kep",
      country: "Cambodia",
      address: "Kep Beach",
    },

    coordinates: {
      lat: 10.4829,
      lng: 104.3167,
    },

    nearbyLandmarks: ["Crab Market", "Kep Beach"],

    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1400&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1400",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400",
    ],

    price: 210,
    oldPrice: 290,

    currency: "USD",
    priceLabel: "night",

    taxesIncluded: true,

    rating: 9.1,
    ratingText: "Excellent",

    reviews: 720,

    description: "Luxury beachside resort overlooking Kep coastline.",

    available: true,

    roomsLeft: 5,

    cancellation: "Free cancellation available",

    amenities: [
      { name: "Private Beach", icon: "waves" },
      { name: "Spa", icon: "flower" },
      { name: "Pool", icon: "waves" },
      { name: "WiFi", icon: "wifi" },
    ],

    rooms: [
      {
        id: 1,
        name: "Ocean Deluxe",
        price: 210,
        capacity: "2 Guests",
        size: "38m²",
        beds: "1 King Bed",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },

      {
        id: 2,
        name: "Family Sea Suite",
        price: 295,
        capacity: "4 Guests",
        size: "60m²",
        beds: "2 Queen Beds",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    policies: [
      {
        title: "Check In",
        items: ["From 2:00 PM", "Passport required"],
      },

      {
        title: "Check Out",
        items: ["Before 12:00 PM"],
      },

      {
        title: "Property Rules",
        items: ["No smoking indoors", "Pets not allowed"],
      },
    ],

    host: {
      name: "Kep Ocean Group",
      responseRate: "99%",
      responseTime: "30 mins",
      joined: "Since 2018",
    },

    reviewsData: [
      {
        id: 1,
        name: "Emma",
        rating: 5,
        comment: "Beautiful private beach and amazing breakfast.",
        date: "2026-03-11",
      },

      {
        id: 2,
        name: "Dara",
        rating: 4,
        comment: "Very relaxing resort near the sea.",
        date: "2026-02-20",
      },
    ],
  },

  {
    id: 2,
    title: "Sunset Crab Resort",
    slug: "sunset-crab-resort",
    destination: "kep",
    type: "Luxury Resort",
    stars: 5,

    featured: true,
    trending: false,

    location: {
      city: "Kep",
      country: "Cambodia",
      address: "Near Crab Market",
    },

    coordinates: {
      lat: 10.4901,
      lng: 104.305,
    },

    nearbyLandmarks: ["Crab Market", "Kep Beach"],

    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400",
    ],

    price: 260,
    oldPrice: 340,

    currency: "USD",

    priceLabel: "night",

    taxesIncluded: true,

    rating: 9.4,
    ratingText: "Exceptional",

    reviews: 920,

    description: "Elegant seaside luxury retreat with sunset views.",

    available: true,

    roomsLeft: 3,

    cancellation: "Free cancellation available",

    amenities: [
      { name: "Infinity Pool", icon: "waves" },
      { name: "Restaurant", icon: "utensils" },
      { name: "Spa", icon: "flower" },
    ],

    rooms: [
      {
        id: 1,
        name: "Luxury Sunset Room",
        price: 260,
        capacity: "2 Guests",
        size: "45m²",
        beds: "1 King Bed",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      },

      {
        id: 2,
        name: "Premium Villa",
        price: 360,
        capacity: "4 Guests",
        size: "70m²",
        beds: "2 King Beds",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      },
    ],

    policies: [
      {
        title: "Check In",
        items: ["From 3 PM", "ID required"],
      },

      {
        title: "Check Out",
        items: ["Before 11 AM"],
      },

      {
        title: "Cancellation",
        items: ["Free cancellation within 48 hours"],
      },
    ],

    host: {
      name: "Sunset Collection",
      responseRate: "98%",
      responseTime: "1 hour",
      joined: "Since 2017",
    },

    reviewsData: [
      {
        id: 1,
        name: "Michael",
        rating: 5,
        comment: "Amazing sunset views and great food.",
        date: "2026-03-15",
      },
    ],
  },
  {
    id: 3,
    title: "Kep Hillside Escape",
    slug: "kep-hillside-escape",
    destination: "kep",
    type: "Boutique Resort",
    stars: 4,
    featured: false,
    trending: true,

    location: {
      city: "Kep",
      country: "Cambodia",
      address: "Hillside Road",
    },

    coordinates: {
      lat: 10.481,
      lng: 104.31,
    },

    nearbyLandmarks: ["Kep National Park"],

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400",

    gallery: [],

    price: 145,
    oldPrice: 190,

    currency: "USD",
    priceLabel: "night",

    taxesIncluded: true,

    rating: 8.8,
    ratingText: "Excellent",

    reviews: 340,

    description: "Quiet hillside retreat near nature trails.",

    available: true,

    roomsLeft: 6,

    cancellation: "Free cancellation available",

    amenities: [
      { name: "Pool", icon: "waves" },
      { name: "WiFi", icon: "wifi" },
    ],

    rooms: [
      {
        id: 1,
        name: "Garden Room",
        price: 145,
        capacity: "2 Guests",
        size: "32m²",
        beds: "1 King Bed",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      },
    ],

    policies: [
      {
        title: "Check In",
        items: ["From 2 PM"],
      },
    ],

    host: {
      name: "Kep Escape Group",
      responseRate: "97%",
      responseTime: "1 hour",
      joined: "2019",
    },

    reviewsData: [
      {
        id: 1,
        name: "John",
        rating: 5,
        comment: "Peaceful location.",
        date: "2026-03-15",
      },
    ],
  },

  {
    id: 4,
    title: "Blue Ocean Kep Resort",
    slug: "blue-ocean-kep-resort",
    destination: "kep",
    type: "Beach Resort",
    stars: 5,
    featured: true,
    trending: true,
    location: {
      city: "Kep",
      country: "Cambodia",
      address: "Beach Road",
    },
    coordinates: {
      lat: 10.485,
      lng: 104.317,
    },
    nearbyLandmarks: ["Kep Beach"],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400",
    gallery: [],
    price: 240,
    oldPrice: 310,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 650,
    description: "Luxury beach experience overlooking the sea.",
    available: true,
    roomsLeft: 3,
    cancellation: "Free cancellation available",

    amenities: [
      { name: "Spa", icon: "flower" },
      { name: "Pool", icon: "waves" },
    ],

    rooms: [
      {
        id: 1,
        name: "Ocean Suite",
        price: 240,
        capacity: "2 Guests",
        size: "45m²",
        beds: "King Bed",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      },
    ],

    policies: [
      {
        title: "Check Out",
        items: ["Before 12 PM"],
      },
    ],

    host: {
      name: "Blue Hospitality",
      responseRate: "99%",
      responseTime: "30 mins",
      joined: "2018",
    },

    reviewsData: [
      {
        id: 1,
        name: "Anna",
        rating: 5,
        comment: "Amazing beach.",
        date: "2026-02-11",
      },
    ],
  },

  {
    id: 5,
    title: "Crab Market Boutique Hotel",
    slug: "crab-market-boutique-hotel",
    destination: "kep",
    type: "Boutique Hotel",
    stars: 4,
    featured: false,
    trending: true,
    location: {
      city: "Kep",
      country: "Cambodia",
      address: "Crab Market Area",
    },
    coordinates: {
      lat: 10.49,
      lng: 104.305,
    },
    nearbyLandmarks: ["Crab Market"],
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1400",
    gallery: [],
    price: 130,
    oldPrice: 170,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.7,
    ratingText: "Very Good",
    reviews: 280,
    description: "Small boutique stay near seafood markets.",
    available: true,
    roomsLeft: 7,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Restaurant", icon: "utensils" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 6,
    title: "Palm Breeze Villas",
    slug: "palm-breeze-villas",
    destination: "kep",
    type: "Luxury Villa",
    stars: 5,
    featured: true,
    trending: false,
    location: { city: "Kep", country: "Cambodia", address: "Palm Street" },
    coordinates: { lat: 10.486, lng: 104.311 },
    nearbyLandmarks: ["National Park"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400",
    gallery: [],
    price: 320,
    oldPrice: 420,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.5,
    ratingText: "Exceptional",
    reviews: 840,
    description: "Luxury villa with private pools.",
    available: true,
    roomsLeft: 2,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Private Pool", icon: "waves" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 7,
    title: "Kep Bay Resort",
    slug: "kep-bay-resort",
    destination: "kep",
    type: "Resort",
    stars: 4,
    featured: false,
    trending: true,
    location: { city: "Kep", country: "Cambodia", address: "Bay Road" },
    coordinates: { lat: 10.483, lng: 104.309 },
    nearbyLandmarks: ["Kep Beach"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400",
    gallery: [],
    price: 180,
    oldPrice: 240,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.9,
    ratingText: "Excellent",
    reviews: 410,
    description: "Modern bay-side resort.",
    available: true,
    roomsLeft: 4,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Pool", icon: "waves" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 8,
    title: "Sea Breeze Lodge",
    slug: "sea-breeze-lodge",
    destination: "kep",
    type: "Lodge",
    stars: 3,
    featured: false,
    trending: false,
    location: { city: "Kep", country: "Cambodia", address: "Ocean Road" },
    coordinates: { lat: 10.488, lng: 104.315 },
    nearbyLandmarks: ["Beach"],
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1400",
    gallery: [],
    price: 95,
    oldPrice: 120,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.3,
    ratingText: "Good",
    reviews: 180,
    description: "Affordable beachside stay.",
    available: true,
    roomsLeft: 9,
    cancellation: "Free cancellation available",
    amenities: [{ name: "WiFi", icon: "wifi" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 9,
    title: "Kep Garden Retreat",
    slug: "kep-garden-retreat",
    destination: "kep",
    type: "Eco Resort",
    stars: 4,
    featured: true,
    trending: false,
    location: { city: "Kep", country: "Cambodia", address: "Garden Road" },
    coordinates: { lat: 10.479, lng: 104.304 },
    nearbyLandmarks: ["Butterfly Farm"],
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1400",
    gallery: [],
    price: 160,
    oldPrice: 210,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.8,
    ratingText: "Excellent",
    reviews: 300,
    description: "Green eco-friendly retreat.",
    available: true,
    roomsLeft: 5,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Garden", icon: "flower" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 10,
    title: "Secret Beach Resort",
    slug: "secret-beach-resort",
    destination: "kep",
    type: "Beach Resort",
    stars: 5,
    featured: true,
    trending: true,
    location: { city: "Kep", country: "Cambodia", address: "Hidden Beach" },
    coordinates: { lat: 10.478, lng: 104.313 },
    nearbyLandmarks: ["Hidden Beach"],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1400",
    gallery: [],
    price: 290,
    oldPrice: 370,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.6,
    ratingText: "Exceptional",
    reviews: 980,
    description: "Private luxury beach resort.",
    available: true,
    roomsLeft: 2,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Private Beach", icon: "waves" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 11,
    title: "Sunrise Kep Hotel",
    slug: "sunrise-kep-hotel",
    destination: "kep",
    type: "Hotel",
    stars: 4,
    featured: false,
    trending: true,
    location: { city: "Kep", country: "Cambodia", address: "Sunrise Road" },
    coordinates: { lat: 10.487, lng: 104.308 },
    nearbyLandmarks: ["Ocean Viewpoint"],
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400",
    gallery: [],
    price: 170,
    oldPrice: 220,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.9,
    ratingText: "Excellent",
    reviews: 450,
    description: "Great sunrise views.",
    available: true,
    roomsLeft: 5,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Breakfast", icon: "utensils" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },

  {
    id: 12,
    title: "Island View Resort",
    slug: "island-view-resort",
    destination: "kep",
    type: "Resort",
    stars: 5,
    featured: true,
    trending: true,
    location: { city: "Kep", country: "Cambodia", address: "Island Road" },
    coordinates: { lat: 10.48, lng: 104.312 },
    nearbyLandmarks: ["Rabbit Island Port"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400",
    gallery: [],
    price: 275,
    oldPrice: 350,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.3,
    ratingText: "Exceptional",
    reviews: 760,
    description: "Luxury resort with island views.",
    available: true,
    roomsLeft: 4,
    cancellation: "Free cancellation available",
    amenities: [{ name: "Spa", icon: "flower" }],
    rooms: [],
    policies: [],
    host: {},
    reviewsData: [],
  },
];
