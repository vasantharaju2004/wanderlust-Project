const sampleListings = [
   {
    title: "Stay near Taj Mahal, Agra",
    description: "Incredible views of the iconic monument.",
    image: {
      filename: "wanderlust/agra_taj",
      url: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9"
    },
    price: 2000,
    location: "Agra",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [78.0421, 27.1751] }
  },
  {
    title: "Pink City Heritage Stay, Jaipur",
    description: "Traditional experience near Hawa Mahal.",
    image: {
      filename: "wanderlust/jaipur_pink",
      url: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4"
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [75.8577, 26.9124] }
  },
  {
    title: "Lake Pichola Views, Udaipur",
    description: "Charming stay beside the peaceful lake.",
    image: {
      filename: "wanderlust/udaipur_lake",
      url: "https://images.unsplash.com/photo-1526570739371-4a02bd7d933b"
    },
    price: 2500,
    location: "Udaipur",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Coffee Estate Retreat, Coorg",
    description: "Surrounded by lush plantations and mist.",
    image: {
      filename: "wanderlust/coorg_estate",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    price: 2200,
    location: "Coorg",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [76.1647, 12.3375] }
  },
  {
    title: "Beachfront Hut, Goa",
    description: "Relax by the waves at this beach refuge.",
    image: {
      filename: "wanderlust/goa_beach",
      url: "https://images.unsplash.com/photo-1483721310020-03333e577078"
    },
    price: 1500,
    location: "Goa",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Hill Station Escape, Ooty",
    description: "Cool climate and scenic Nilgiri hills.",
    image: {
      filename: "wanderlust/ooty_hill",
      url: "https://images.unsplash.com/photo-1511732353669-5e7a0b8d83d8"
    },
    price: 2300,
    location: "Ooty",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [76.6950, 11.4110] }
  },
  {
    title: "Valley of Flowers Cabin, Uttarakhand",
    description: "Springtime blooms and alpine magic.",
    image: {
      filename: "wanderlust/valley_flowers",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    price: 2700,
    location: "Uttarakhand",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [30.7046, 78.5636] }
  },
  {
    title: "Desert Camp near Jaisalmer",
    description: "Golden dunes and starlit nights in the desert.",
    image: {
      filename: "wanderlust/jaisalmer_dunes",
      url: "https://images.unsplash.com/photo-1576675783610-7bee37b5f3b8"
    },
    price: 1900,
    location: "Jaisalmer",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [70.9126, 26.9127] }
  },
  {
    title: "Toy Train View Stay, Darjeeling",
    description: "Watch the trains and hills from your window.",
    image: {
      filename: "wanderlust/darjeeling_train",
      url: "https://images.unsplash.com/photo-1573137428166-4654e579d254"
    },
    price: 2100,
    location: "Darjeeling",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [88.2627, 27.0360] }
  },
  {
    title: "Spiti Valley Retreat, Himachal",
    description: "High-altitude tradition and remote vistas.",
    image: {
      filename: "wanderlust/spiti_valley",
      url: "https://images.unsplash.com/photo-1525852376204-34a5d706f0dc"
    },
    price: 2500,
    location: "Spiti Valley",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [78.0000, 32.1234] }
  },
];

module.exports = { data: sampleListings };