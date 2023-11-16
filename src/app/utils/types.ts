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
