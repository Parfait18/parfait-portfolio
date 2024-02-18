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
    startDate: "November 2023",
    skills: [
      "HTML && CSS",
      "NestJs",
      "VueJs",
      "Tailwind",
      "Figma",
      "PostgreSQl",
      "MongoDb",
    ],
  }),
  new Experience({
    role: "FullStack Developer",
    company: "Webcoom",
    startDate: "December 2021",
    endDate: "October 2023",
    // description:
    //   " Anim occaecar reprehenderit commodo commodo. In exercitation eiusmod qui anim irure tempor consectetur tempor elit incididunt laboris ut.",
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
  }),
  new Experience({
    role: "Intership Frontend Developer",
    company: "C2I-startup",
    startDate: "July 2020",
    skills: ["HTML && CSS", "Firebase", "VueJs"],
    endDate: "October 2020",
  }),
];

const educations: Array<EducationType> = [
  new Education({
    level: "Master",
    etablishement: "Institut de Mathématique et Sciences Physique (IMSP)",
    speciality: "Information's System",
    startDate: "10/2019",
    endDate: "10/2021",
  }),
  new Education({
    level: "Bachelor",
    etablishement: "Institut de Technlogie de Lokossa (IUT)",
    speciality: "Genie Electrique et Informatique Industriel (GEII)",
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
