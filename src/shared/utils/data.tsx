import {
  card1,
  card2,
  card3,
  card4,
  homecard4,
  homecard5,
  homecard6,
  homecard7,
  homecard8,
  homecard9,
  homecard10,
  homecard12,
  homecard13,
  homecard14,
  homecard15,
  homecard16,
  aboutcard1,
  aboutcard2,
  aboutcard3,
  aboutcard4,
  aboutcard5,
  aboutcard6,
  aboutcard7,
  aboutcard8,
} from "@/assets/images/images";

export const dataCards = [
  {
    id: 1,
    img: card1,
    alt: "card-1",
    title: "cards.card1.title",
    text: "cards.card1.text",
  },
  {
    id: 2,
    img: card2,
    alt: "card-2",
    title: "cards.card2.title",
    text: "cards.card2.text",
  },
  {
    id: 3,
    img: card3,
    alt: "card-3",
    title: "cards.card3.title",
    text: "cards.card3.text",
  },
  {
    id: 4,
    img: card4,
    alt: "card-4",
    title: "cards.card4.title",
    text: "cards.card4.text",
  },
];

// Education & Training cards
export const educationCardData = [
  { id: 1, img: homecard8, title: "cards.card1.title", text: "cards.card1.text" },
  { id: 2, img: homecard12, title: "cards.card2.title", text: "cards.card2.text" },
  { id: 3, img: homecard9, title: "cards.card3.title", text: "cards.card3.text" },
  { id: 4, img: homecard10, title: "cards.card4.title", text: "cards.card4.text" },
];

// Market Research cards images
export const marketResearchData = [
  { id: 1, src: homecard4 },
  { id: 2, src: homecard5 },
  { id: 3, src: homecard6 },
  { id: 4, src: homecard7 },
];

// Event Feedback cards images
export const EventFeedbackData = [
  { id: 1, src: homecard13 },
  { id: 2, src: homecard14 },
  { id: 3, src: homecard15 },
  { id: 4, src: homecard16 },
];

// Leadership cards images
export const LeadershipData = [
  { id: 1, src: aboutcard1 },
  { id: 2, src: aboutcard2 },
  { id: 3, src: aboutcard3 },
  { id: 4, src: aboutcard4 },
  { id: 5, src: aboutcard5 },
  { id: 6, src: aboutcard6 },
  { id: 7, src: aboutcard7 },
  { id: 8, src: aboutcard8 },
];

// Home page plans data
export const homaPlans = [
  {
    plan: "card1.plan",
    price: "card1.price",
    responses: "card1.responses",
    btn: "card1.btn",
  },
  {
    plan: "card2.plan",
    price: "card2.price",
    responses: "card2.responses",
    btn: "card2.btn",
  },
  {
    plan: "card3.plan",
    price: "card3.price",
    responses: "card3.responses",
    btn: "card3.btn",
  },
];

// FAQ Data
export const FAQData = [
  { id: 1 },
  { id: 2, hasFormTypes: true },
  { id: 3 },
  { id: 4 },
  { id: 5, hasLink: true, linkHref: "/pricing" },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

// Form Types Data
export const FormTypesData = Array.from({ length: 36 }, (_, i) => ({ id: i + 1 }));
