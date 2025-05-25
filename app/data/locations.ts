export interface Location {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  tag?: string; // Optional tag field
  mapLink: string;
  image: string; // Location image
  zipCode?: string; // Optional zip code
  features?: string[]; // Optional array of features/amenities
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  officeType?: "Main" | "Branch" | "Coworking" | "Virtual";
  featured?: boolean; // Added featured property
}

// Type for the array of locations
export type Locations = Location[];

export const locations: Locations = [
  {
    id: 1,
    name: "Pennsylvania Office",
    city: "Pennsylvania",
    state: "PA",
    address: "966 Ridge Avenue",
    phone: "1-800-657-6893",
    email: "hello@formworkstudios.com",
    image: "/pa.jpg",
    description:
      "Our main Pennsylvania office location providing full-service web development, design, and digital marketing solutions.",
    tag: "Main Office",
    mapLink: "https://maps.google.com/?q=966+Ridge+Avenue+Pennsylvania",
    features: ["Client Meetings", "Development Team", "Design Studio"],
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed",
    },
    officeType: "Main",
    featured: true,
  },
  {
    id: 2,
    name: "New York City Office",
    city: "Queens",
    state: "NY",
    address: "61-25 97th Street 12R",
    phone: "1-800-657-6893",
    email: "hello@formworkstudios.com",
    image: "/china-town-nyc.webp",
    description:
      "Our New York City location serving clients throughout the NYC metropolitan area with comprehensive digital services.",
    tag: "NYC Branch",
    mapLink: "https://maps.google.com/?q=61-25+97th+Street+12R+Queens+NY",
    features: [
      "Client Consultations",
      "Project Management",
      "Strategy Sessions",
    ],
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "By Appointment",
      sunday: "Closed",
    },
    officeType: "Branch",
    featured: true,
  },
];
