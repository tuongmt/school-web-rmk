import { DateRange } from "react-day-picker";
import { languageEnum } from "./enum/language";

export interface IPost {
  id?: string;
  title: string;
  content: string;
  language: ILanguage | string;
  author?: string;
  tags: string[];
  category: ICategory | string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILanguage {
  id?: string;
  name: string;
  code: languageEnum;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ICategory {
  id?: string;
  name: string;
  parent?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IFilterPost {
  title?: string;
  tag?: string;
  category?: string;
  language?: string;
  date?: DateRange;
}
