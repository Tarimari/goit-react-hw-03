import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  // .min(7, "Must consist of 7 numbers")
  // .max(7)
  // .positive("Must be positive")
  // .integer("Must be integer")
  // .required("Required"),
});

export default function SearchBox({ setPhonebook, phonebook }) {
  const searchName = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, action) => {
        const val = {
          ...values,
          id: nanoid(),
        };
        setPhonebook([...phonebook, val]);
        action.resetForm();
      }}
      validationSchema={UserSchema}
    >
      <Form className={css.container}>
        <label htmlFor={searchName}>Name</label>
        <Field className={css.elem} name="name" id={searchName} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={searchName}>Number</label>
        <Field className={css.elem} name="number" id={searchName} />
        <ErrorMessage name="number" component="span" />
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
