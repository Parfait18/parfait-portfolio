import {
  Experience,
  ExperienceType,
  Education,
  EducationType,
  ServiceType,
  Service,
} from "./types";
const template = "%s ← Parfait's Space";

const experiences: Array<ExperienceType> = [
  new Experience({
    role: "FullStack Developer",
    company: "Open Si",
    startDate: "12/2021",
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
    role: "FullStack Developer",
    company: "Webcoom",
    startDate: "12/2021",
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
    endDate: "09/2023",
  }),
  new Experience({
    role: "Intership Frontend Developer",
    company: "C2I-startup",
    startDate: "01/07/2020",
    skills: ["HTML && CSS", "Firebase", "VueJs"],
    endDate: "10/2020",
  }),
];

const educations: Array<EducationType> = [
  new Education({
    level: "Master",
    etablishement: "Institut de Technlogie de Lokossa",
    speciality: "Information's System",
    startDate: "10/2019",
    endDate: "10/2021",
  }),
  new Education({
    level: "Bachelor",
    etablishement: "Institut de Mathématique et Sciences Physique (IMSP)",
    speciality: "Genie Electrique et Informatique Industriel",
    startDate: "10/2019",
    endDate: "10/2021",
  }),

  new Education({
    level: "Baccalauréat , Série C",
    etablishement: "Cours de Soutiens Scolaire (CSS) de Cotonou ",
    startDate: "10/2009",
    endDate: "10/2015",
  }),
];

const services: Array<ServiceType> = [
  new Service({
    serviceName: "Frontend Developement",
    imageSrc: "/images/frondev.png",
  }),
  new Service({
    serviceName: "Backend Developement",
    imageSrc: "/images/backdev.png",
  }),

  new Service({
    serviceName: "Mobile Developement",
    imageSrc: "/images/mobiledev.png",
  }),
];

export { template, experiences, educations };
