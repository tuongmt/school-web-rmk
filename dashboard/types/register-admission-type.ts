export type AdmissionsType = {
  no: string;
  student: StudentType[];
  major1: string;
  major2: string;
  status: string;
  dateApplied: string;
};

export type StudentType = {
  no: string;
  name: string;
  email: string;
  phoneNumber: string;
  CCCD: string;
  gender: string;
  graduationYear: number;
  highSchoolProvince: string;
  highSchoolName: string;
  registrationId: string;
};
