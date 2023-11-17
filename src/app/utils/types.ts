export type ExperienceType = {
  role: string;
  company: string;
  description?: string;
  skills: string[];
  startDate: string;
  endDate?: string;
};

export class Experience {
  role: string;
  company: string;
  description?: string;
  skills: string[];
  startDate: string;
  endDate?: string;

  constructor({
    role,
    company,
    description,
    skills,
    startDate,
    endDate,
  }: ExperienceType) {
    this.role = role;
    this.company = company;
    this.description = description ?? "";
    this.skills = skills;
    this.startDate = startDate;
    this.endDate = endDate ?? "Today";
  }
}

export type EducationType = {
  level: string;
  etablishement: string;
  speciality?: string;
  startDate: string;
  endDate?: string;
};

export class Education {
  level: string;
  etablishement: string;
  speciality?: string;
  startDate: string;
  endDate?: string;

  constructor({
    level,
    etablishement,
    speciality,
    startDate,
    endDate,
  }: EducationType) {
    this.level = level;
    this.etablishement = etablishement;
    this.speciality = speciality;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export type ContactForm = {
  fullname: string;
  email: string;
  message: string;
};

export type ServiceType = {
  serviceName: string;
  imageSrc: string;
};

export class Service {
  serviceName: string;
  imageSrc: string;

  constructor({ serviceName, imageSrc }: ServiceType) {
    this.serviceName = serviceName;
    this.imageSrc = imageSrc;
  }
}
