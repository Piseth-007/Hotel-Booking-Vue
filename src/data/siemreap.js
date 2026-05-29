export const siemreap = [
  {
    id: 1,
    title: "Viroth's Hotel & Resort",
    slug: "viroth-hotel-resort",
    destination: "siem-reap",
    type: "Luxury Resort",
    stars: 5,
    featured: true,
    trending: true,
    location: {
      city: "Siem Reap",
      country: "Cambodia",
      address: "2.5km from Angkor Wat",
    },
    coordinates: {
      lat: 13.4125,
      lng: 103.8667,
    },
    nearbyLandmarks: ["Angkor Wat", "Pub Street", "Old Market"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 245,
    oldPrice: 320,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: false,
    rating: 8.9,
    ratingText: "Very Good",
    reviews: 1245,
    description: "Elegant luxury resort near Angkor Wat with tropical gardens.",
    available: true,
    roomsLeft: 4,
    cancellation: "Free cancellation available",
    amenities: [
      { name: "Swimming Pool", icon: "waves" },
      { name: "Free WiFi", icon: "wifi" },
      { name: "Spa", icon: "flower" },
      { name: "Restaurant", icon: "utensils" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in & Check-out",
        items: [
          "Check-in after 2:00 PM",
          "Check-out before 12:00 PM",
          "Early check-in subject to availability",
        ],
      },

      {
        title: "House Rules",
        items: [
          "No smoking inside property",
          "No pets allowed",
          "Quiet hours after 10:00 PM",
        ],
      },

      {
        title: "Cancellation Policy",
        items: [
          "Free cancellation within 48 hours",
          "50% refund up to 7 days before arrival",
          "No refund for same-day cancellation",
        ],
      },

      {
        title: "Safety & Property",
        items: [
          "Security cameras in common areas",
          "Fire extinguisher available",
          "First aid kit provided",
        ],
      },

      {
        title: "Payment",
        items: [
          "Credit cards accepted",
          "Pay at property available",
          "Deposit may be required",
        ],
      },

      {
        title: "Amenities Usage",
        items: [
          "Pool open from 7 AM - 9 PM",
          "Gym access included",
          "Free WiFi throughout property",
        ],
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },

  {
    id: 2,
    title: "Angkor Paradise Villa",
    slug: "angkor-paradise-villa",
    destination: "siem-reap",
    type: "Boutique Hotel",
    stars: 4,
    featured: false,
    trending: false,
    location: {
      city: "Siem Reap",
      country: "Cambodia",
      address: "Near Pub Street",
    },
    coordinates: {
      lat: 13.355,
      lng: 103.856,
    },
    nearbyLandmarks: ["Pub Street", "Night Market"],
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 120,
    oldPrice: 180,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 842,
    description: "Modern boutique stay in the heart of Siem Reap nightlife.",
    available: true,
    roomsLeft: 2,
    cancellation: "Non-refundable",
    amenities: [
      { name: "Free Breakfast", icon: "utensils" },
      { name: "Free WiFi", icon: "wifi" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in & Check-out",
        items: [
          "Check-in after 2:00 PM",
          "Check-out before 12:00 PM",
          "Early check-in subject to availability",
        ],
      },

      {
        title: "House Rules",
        items: [
          "No smoking inside property",
          "No pets allowed",
          "Quiet hours after 10:00 PM",
        ],
      },

      {
        title: "Cancellation Policy",
        items: [
          "Free cancellation within 48 hours",
          "50% refund up to 7 days before arrival",
          "No refund for same-day cancellation",
        ],
      },

      {
        title: "Safety & Property",
        items: [
          "Security cameras in common areas",
          "Fire extinguisher available",
          "First aid kit provided",
        ],
      },

      {
        title: "Payment",
        items: [
          "Credit cards accepted",
          "Pay at property available",
          "Deposit may be required",
        ],
      },

      {
        title: "Amenities Usage",
        items: [
          "Pool open from 7 AM - 9 PM",
          "Gym access included",
          "Free WiFi throughout property",
        ],
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },

  {
    id: 3,
    title: "Koh Rong Ocean Escape",
    slug: "koh-rong-ocean-escape",
    destination: "koh-rong",
    type: "Beach Resort",
    stars: 5,
    featured: true,
    trending: true,
    location: {
      city: "Koh Rong",
      country: "Cambodia",
      address: "Long Beach",
    },
    coordinates: {
      lat: 10.695,
      lng: 103.242,
    },
    nearbyLandmarks: ["Long Beach"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 310,
    oldPrice: 420,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: false,
    rating: 9.5,
    ratingText: "Exceptional",
    reviews: 2150,
    description: "Luxury beachfront villas with crystal-clear ocean views.",
    available: true,
    roomsLeft: 6,
    cancellation: "Free cancellation available",
    amenities: [
      { name: "Private Beach", icon: "waves" },
      { name: "Cocktail Bar", icon: "glass-water" },
      { name: "Free WiFi", icon: "wifi" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in",
        description: "Check-in after 2:00 PM",
      },
      {
        title: "Check-out",
        description: "Check-out before 12:00 PM",
      },
      {
        title: "Cancellation",
        description: "Free cancellation within 48 hours of booking",
      },
      {
        title: "Pets",
        description: "Pets are not allowed",
      },
      {
        title: "Smoking",
        description: "No smoking inside the property",
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },

  {
    id: 4,
    title: "Phnom Penh Royal Palace Hotel",
    slug: "phnom-penh-royal-palace-hotel",
    destination: "phnom-penh",
    type: "City Hotel",
    stars: 5,
    featured: true,
    trending: false,
    location: {
      city: "Phnom Penh",
      country: "Cambodia",
      address: "Near Royal Palace",
    },
    coordinates: {
      lat: 11.5564,
      lng: 104.9282,
    },
    nearbyLandmarks: ["Royal Palace", "Riverside"],
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 185,
    oldPrice: 240,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.7,
    ratingText: "Excellent",
    reviews: 950,
    description: "Luxury city hotel overlooking Phnom Penh riverside.",
    available: true,
    roomsLeft: 5,
    cancellation: "Free cancellation available",
    amenities: [
      { name: "Infinity Pool", icon: "waves" },
      { name: "Gym", icon: "dumbbell" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in",
        description: "Check-in after 2:00 PM",
      },
      {
        title: "Check-out",
        description: "Check-out before 12:00 PM",
      },
      {
        title: "Cancellation",
        description: "Free cancellation within 48 hours of booking",
      },
      {
        title: "Pets",
        description: "Pets are not allowed",
      },
      {
        title: "Smoking",
        description: "No smoking inside the property",
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },

  {
    id: 5,
    title: "Battambang Heritage Stay",
    slug: "battambang-heritage-stay",
    destination: "battambang",
    type: "Heritage Hotel",
    stars: 4,
    featured: false,
    trending: true,
    location: {
      city: "Battambang",
      country: "Cambodia",
      address: "City Center",
    },
    coordinates: {
      lat: 13.0957,
      lng: 103.2022,
    },
    nearbyLandmarks: ["Bamboo Train"],
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 95,
    oldPrice: 140,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 8.5,
    ratingText: "Very Good",
    reviews: 640,
    description: "Traditional Cambodian heritage stay with colonial charm.",
    available: true,
    roomsLeft: 3,
    cancellation: "Free cancellation available",
    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Restaurant", icon: "utensils" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in",
        description: "Check-in after 2:00 PM",
      },
      {
        title: "Check-out",
        description: "Check-out before 12:00 PM",
      },
      {
        title: "Cancellation",
        description: "Free cancellation within 48 hours of booking",
      },
      {
        title: "Pets",
        description: "Pets are not allowed",
      },
      {
        title: "Smoking",
        description: "No smoking inside the property",
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },

  {
    id: 6,
    title: "Kampot Riverside Retreat",
    slug: "kampot-riverside-retreat",
    destination: "kampot",
    type: "Eco Resort",
    stars: 4,
    featured: true,
    trending: true,
    location: {
      city: "Kampot",
      country: "Cambodia",
      address: "Preaek Tuek Chhu",
    },
    coordinates: {
      lat: 10.6104,
      lng: 104.1815,
    },
    nearbyLandmarks: ["Pepper Farm"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1400&auto=format&fit=crop",
    ],
    price: 140,
    oldPrice: 190,
    currency: "USD",
    priceLabel: "night",
    taxesIncluded: true,
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 520,
    description: "Relaxing eco retreat along Kampot riverside.",
    available: true,
    roomsLeft: 4,
    cancellation: "Free cancellation available",
    amenities: [
      { name: "Kayak", icon: "waves" },
      { name: "Free WiFi", icon: "wifi" },
    ],
    rooms: [
      {
        id: 1,
        title: "Garden Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        oldPrice: 320,
        price: 285,
        badges: ["Free Breakfast", "Free Cancellation"],
        details: "1 King Bed • 2 Adults • 65 m²",
      },
    ],
    policies: [
      {
        title: "Check-in",
        description: "Check-in after 2:00 PM",
      },
      {
        title: "Check-out",
        description: "Check-out before 12:00 PM",
      },
      {
        title: "Cancellation",
        description: "Free cancellation within 48 hours of booking",
      },
      {
        title: "Pets",
        description: "Pets are not allowed",
      },
      {
        title: "Smoking",
        description: "No smoking inside the property",
      },
    ],

    host: {
      name: "Sokha Chan",
      role: "Super Host",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      joined: "Joined in 2021",
      languages: ["Khmer", "English"],
      responseRate: "98%",
      responseTime: "Within 1 hour",
    },

    reviewsData: [
      {
        id: 1,
        name: "David Kim",
        country: "South Korea",
        rating: 5,
        date: "May 2026",
        comment:
          "Amazing stay with beautiful views and very friendly staff. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        id: 2,
        name: "Sreyneang",
        country: "Cambodia",
        rating: 4,
        date: "April 2026",
        comment:
          "Very clean rooms and great location. Breakfast could be improved.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      },
      {
        id: 3,
        name: "John Smith",
        country: "USA",
        rating: 5,
        date: "March 2026",
        comment:
          "The host was helpful and the experience exceeded expectations.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
      },
    ],
  },
];
