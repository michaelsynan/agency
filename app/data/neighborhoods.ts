export interface Neighborhood {
  id: number;
  name: string;
  city: string;
  region: string;
  description: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export type Neighborhoods = Neighborhood[];

export const neighborhoods: Neighborhoods = [
  {
    id: 1,
    name: "Scranton",
    city: "Scranton",
    region: "Northeastern PA",
    description:
      "Scranton is a historic city known for its industrial heritage, vibrant downtown, and proximity to the Pocono Mountains.",
    image: "/scranton.jpg",
    seoTitle: "Web Design & Marketing in Scranton PA",
    seoDescription:
      "Digital services for businesses in Scranton, Pennsylvania. Web design, development, and marketing for local growth.",
  },
  {
    id: 2,
    name: "Dunmore",
    city: "Dunmore",
    region: "Northeastern PA",
    description:
      "Dunmore is a close-knit community adjacent to Scranton, offering small-town charm and easy access to city amenities.",
    image: "/dunmore.jpg",
    seoTitle: "Web Design & Marketing in Dunmore PA",
    seoDescription:
      "Digital solutions for Dunmore businesses. Web design, development, and marketing for local success.",
  },
  {
    id: 3,
    name: "Carbondale",
    city: "Carbondale",
    region: "Northeastern PA",
    description:
      "Carbondale is a historic borough north of Scranton, known for its rail history and welcoming neighborhoods.",
    image: "/carbondale.jpg",
    seoTitle: "Web Design & Marketing in Carbondale PA",
    seoDescription:
      "Web design and marketing services for Carbondale businesses. Grow your presence in NEPA.",
  },
  {
    id: 4,
    name: "Pocono Mountains",
    city: "Pocono Mountains",
    region: "Northeastern PA",
    description:
      "The Pocono Mountains region is famous for its resorts, outdoor recreation, and scenic beauty.",
    image: "/poconos.jpg",
    seoTitle: "Web Design & Marketing in the Poconos",
    seoDescription:
      "Digital services for businesses in the Pocono Mountains. Web design, development, and marketing for tourism and local companies.",
  },
  {
    id: 5,
    name: "Philadelphia",
    city: "Philadelphia",
    region: "Southeastern PA",
    description:
      "Philadelphia is Pennsylvania's largest city, rich in history, culture, and business opportunities.",
    image: "/philadelphia.jpg",
    seoTitle: "Web Design & Marketing in Philadelphia PA",
    seoDescription:
      "Web design, development, and marketing for Philadelphia businesses. Serving Center City, Fishtown, and more.",
  },
  {
    id: 6,
    name: "Pittsburgh",
    city: "Pittsburgh",
    region: "Western PA",
    description:
      "Pittsburgh is a dynamic city known for its tech industry, universities, and vibrant neighborhoods.",
    image: "/pittsburgh.jpg",
    seoTitle: "Web Design & Marketing in Pittsburgh PA",
    seoDescription:
      "Digital solutions for Pittsburgh businesses. Web design, development, and marketing for the Steel City.",
  },
  {
    id: 7,
    name: "Clarks Summit",
    city: "Clarks Summit",
    region: "Northeastern PA",
    description:
      "Clarks Summit is a suburban borough near Scranton, known for its family-friendly atmosphere and local businesses.",
    image: "/clarks-summit.jpg",
    seoTitle: "Web Design & Marketing in Clarks Summit PA",
    seoDescription:
      "Web design and marketing for Clarks Summit businesses. Serving the Abingtons and NEPA.",
  },
  {
    id: 8,
    name: "Wilkes-Barre",
    city: "Wilkes-Barre",
    region: "Northeastern PA",
    description:
      "Wilkes-Barre is a city along the Susquehanna River, offering a mix of commerce, culture, and education.",
    image: "/wilkes-barre.jpg",
    seoTitle: "Web Design & Marketing in Wilkes-Barre PA",
    seoDescription:
      "Digital services for Wilkes-Barre businesses. Web design, development, and marketing for Luzerne County.",
  },
];
