import * as yup from "yup";

export const teacherSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  age: yup.number().integer().positive().required(),
  gender: yup.string().required(),
  email: yup.string().email().required(),
  salary: yup.number().integer().positive().required(),
  address: yup.string().min(3).required(),
  contact: yup.string().min(11).required(),
  experience: yup.string().required(),
  isMarried: yup.boolean().required(),
});
