export interface Service {
  id: string;
  title: string;
  description: string;
}
export type Services = Service[];

export const services: Services = [
  {
    id: "website-design",
    title: "Website Design",
    description:
      "We create beautiful, functional websites that drive results. Our design process focuses on user experience, conversion optimization, and brand consistency across all touchpoints. From simple landing pages to complex e-commerce solutions, we deliver designs that make an impact.",
  },
  {
    id: "development",
    title: "Development",
    description:
      "Our development team builds robust, scalable solutions using modern technologies. We specialize in responsive websites, custom applications, and content management systems that are easy to maintain and update. We focus on performance, security, and code quality.",
  },
  {
    id: "digital-marketing",
    title: "Marketing",
    description:
      "Drive traffic and generate leads with our comprehensive digital marketing services. We create data-driven strategies that include SEO, content marketing, social media, and paid advertising to help you reach your target audience and achieve measurable results.",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Leverage the power of artificial intelligence to streamline your business operations. From chatbots and automated customer service to data analysis and predictive modeling, we implement AI solutions that save time, reduce costs, and improve decision-making.",
  },
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "We help you create a strong and memorable brand identity. From logo design to brand guidelines, we ensure your brand stands out and resonates with your target audience.",
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Our experts provide strategic consulting to help you navigate challenges and seize opportunities. We offer insights and solutions tailored to your business needs.",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    description:
      "We build powerful e-commerce platforms that enhance user experience and drive sales. From product catalogs to secure payment gateways, we deliver solutions tailored to your business.",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Optimize your website to rank higher in search engine results. Our SEO services include keyword research, on-page optimization, and link building to improve visibility and drive organic traffic.",
  },
  {
    id: "nuxt-web-app",
    title: "Nuxt Web App Development",
    description:
      "We specialize in building high-performance web applications using Nuxt.js. Our solutions are scalable, fast, and tailored to meet your business needs.",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "We provide end-to-end software development services, creating custom solutions tailored to your business needs. From initial concept to deployment, we ensure quality, scalability, and performance.",
  },
];
