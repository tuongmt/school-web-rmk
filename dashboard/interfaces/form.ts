import { languageEnum } from "./enum/language";

export interface IForm {
  id?: string;
  title: languageEnum | string;
  content: string;
  type: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
