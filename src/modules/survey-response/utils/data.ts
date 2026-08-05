import { Survey } from "../types/survey";
import { responseHeroImage } from "@/assets/images/images";
export const mockSurvey: Survey = {
  id: "survey-1",

  title: "Frontend Training Survey",

  description: "Help us improve the training experience.",

  coverImage: responseHeroImage,

  deadline: "10 May 2026",

  duration: "5 - 7 minutes",

  questions: [
    {
      id: "q1",
      number: 1,
      type: "radio",
      question: "What's your favorite language?",
      required: true,
      choices: ["JavaScript", "Python", "Go"],
    },

    {
      id: "q2",
      number: 2,
      type: "text",
      question: "ما اسمك ؟",
      required: true,
      maxLength: 500,
    },

    {
      id: "q3",
      number: 3,
      type: "text",
      question: "ما رأيك في التدريب ؟",
      required: true,
      maxLength: 500,
    },
  ],
};
