// data/stays.js

export const stays = [
  {
    id: 1,

    // Basic Info
    title: "Viroth's Hotel & Resort",
    slug: "viroth-hotel-resort",

    destination: "siem-reap",

    location: {
      city: "Siem Reap",
      country: "Cambodia",
      address: "2.5km from Angkor Wat",
    },

    // Media
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1400&auto=format&fit=crop",
    ],

    // Price
    price: 245,
    priceLabel: "night",
    currency: "USD",

    // Rating
    rating: 8.9,
    ratingText: "Very Good",

    // Stay Info
    type: "Luxury Resort",
    stars: 5,

    // Amenities
    amenities: [
      {
        name: "Swimming Pool",
        icon: "waves",
      },

      {
        name: "Free WiFi",
        icon: "wifi",
      },

      {
        name: "Spa",
        icon: "flower",
      },

      {
        name: "Restaurant",
        icon: "utensils",
      },
    ],

    // Nearby
    nearbyLandmarks: ["Angkor Wat", "Pub Street", "Old Market"],

    // Booking
    available: true,

    roomsLeft: 4,

    cancellation: "Free cancellation available",

    // Description
    description:
      "Elegant luxury resort near Angkor Wat with tropical gardens, spa facilities, and premium Khmer hospitality.",

    // Review
    reviews: 1245,

    featured: true,

    trending: true,
  },

  {
    id: 2,

    title: "Angkor Paradise Villa",

    slug: "angkor-paradise-villa",

    destination: "siem-reap",

    location: {
      city: "Siem Reap",
      country: "Cambodia",
      address: "Near Pub Street",
    },

    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop",

    gallery: [],

    price: 120,

    priceLabel: "night",

    currency: "USD",

    rating: 9.2,

    ratingText: "Excellent",

    type: "Boutique Hotel",

    stars: 4,

    amenities: [
      {
        name: "Free Breakfast",
        icon: "utensils",
      },

      {
        name: "Free WiFi",
        icon: "wifi",
      },
    ],

    nearbyLandmarks: ["Pub Street", "Night Market"],

    available: true,

    roomsLeft: 2,

    cancellation: "Non-refundable",

    description: "Modern boutique stay in the heart of Siem Reap nightlife.",

    reviews: 842,

    featured: false,

    trending: false,
  },

  {
    id: 3,

    title: "Koh Rong Ocean Escape",

    slug: "koh-rong-ocean-escape",

    destination: "koh-rong",

    location: {
      city: "Koh Rong",
      country: "Cambodia",
      address: "Long Beach",
    },

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",

    gallery: [],

    price: 310,

    priceLabel: "night",

    currency: "USD",

    rating: 9.5,

    ratingText: "Exceptional",

    type: "Beach Resort",

    stars: 5,

    amenities: [
      {
        name: "Private Beach",
        icon: "waves",
      },

      {
        name: "Cocktail Bar",
        icon: "glass-water",
      },

      {
        name: "Free WiFi",
        icon: "wifi",
      },
    ],

    nearbyLandmarks: ["Long Beach"],

    available: true,

    roomsLeft: 6,

    cancellation: "Free cancellation available",

    description: "Luxury beachfront villas with crystal-clear ocean views.",

    reviews: 2150,

    featured: true,

    trending: true,
  },
];
