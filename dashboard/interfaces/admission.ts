import { IStudent } from "./student";

export interface IAdmission {
    no: string;
    student: IStudent[];
    major1: string;
    major2: string;
    status: string;
    dateApplied: string;
  }