export interface City {
  name: string;
  slug: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  coverImage: string;
}

export const cities: City[] = [
  {
    name: "New York City",
    slug: "new-york",
    state: "NY",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
    population: 8804190,
    coverImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    state: "CA",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
    population: 3898747,
    coverImage: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&q=80",
  },
  {
    name: "Chicago",
    slug: "chicago",
    state: "IL",
    coordinates: {
      lat: 41.8781,
      lng: -87.6298,
    },
    population: 2746388,
    coverImage: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80",
  },
  {
    name: "Houston",
    slug: "houston",
    state: "TX",
    coordinates: {
      lat: 29.7604,
      lng: -95.3698,
    },
    population: 2313000,
    coverImage: "https://images.unsplash.com/photo-1548519853-8d6b94cd1b1f?auto=format&fit=crop&q=80",
  },
  {
    name: "Phoenix",
    slug: "phoenix",
    state: "AZ",
    coordinates: {
      lat: 33.4484,
      lng: -112.0740,
    },
    population: 1608139,
    coverImage: "https://images.unsplash.com/photo-1558645836-e44122a743ee?auto=format&fit=crop&q=80",
  },
  {
    name: "Philadelphia",
    slug: "philadelphia",
    state: "PA",
    coordinates: {
      lat: 39.9526,
      lng: -75.1652,
    },
    population: 1603797,
    coverImage: "https://images.unsplash.com/photo-1601332069884-b8b1790ee7f7?auto=format&fit=crop&q=80",
  },
  {
    name: "San Antonio",
    slug: "san-antonio",
    state: "TX",
    coordinates: {
      lat: 29.4241,
      lng: -98.4936,
    },
    population: 1547253,
    coverImage: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80",
  },
  {
    name: "San Diego",
    slug: "san-diego",
    state: "CA",
    coordinates: {
      lat: 32.7157,
      lng: -117.1611,
    },
    population: 1386932,
    coverImage: "https://images.unsplash.com/photo-1538097304804-2a1b932466a9?auto=format&fit=crop&q=80",
  },
  {
    name: "Dallas",
    slug: "dallas",
    state: "TX",
    coordinates: {
      lat: 32.7767,
      lng: -96.7970,
    },
    population: 1304379,
    coverImage: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?auto=format&fit=crop&q=80",
  },
  {
    name: "San Jose",
    slug: "san-jose",
    state: "CA",
    coordinates: {
      lat: 37.3382,
      lng: -121.8863,
    },
    population: 1013240,
    coverImage: "https://images.unsplash.com/photo-1567714912050-16e285c8f13c?auto=format&fit=crop&q=80",
  },
];