import { Experience, ExperienceType } from "./types";
const template = "%s ← Parfait's Space";

const experiences: Array<ExperienceType> = [
  new Experience({
    role: "FullStack Dvelopper",
    company: "Open Si",
    startDate: "21/12/2021",
    skills: [
      "HTML && CSS",
      "NestJs",
      "VueJs",
      "Tailwind",
      "Django",
      "Figma",
      "PostgreSQl",
    ],
  }),
  new Experience({
    role: "FullStack Dvelopper",
    company: "Webcoom",
    startDate: "21/12/2021",
    description:
      " Anim occaecar reprehenderit commodo commodo. In exercitation eiusmod qui anim irure tempor consectetur tempor elit incididunt laboris ut.",
    skills: [
      "HTML && CSS",
      "Laravel",
      "VueJs",
      "NuxtJs",
      "Tailwind CSS",
      "Bootstrap",
      "Django",
      "Flutter",
      "Figma",
      "MySql",
    ],
    endDate: "31/09/2023",
  }),
  new Experience({
    role: "Intership Frontend Dvelopper",
    company: "C2I-startup",
    startDate: "01/07/2020",
    skills: ["HTML && CSS", "Firebase", "VueJs"],
    endDate: "31/10/2020",
  }),
];

export { template, experiences };
