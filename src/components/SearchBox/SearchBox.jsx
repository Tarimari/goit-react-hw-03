import { Formik, Form, Field } from "formik";
import { useId } from "react";

export default function SearchBox({ setSearchBar }) {
  const searchName = useId();

  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, action) => {
        setSearchBar(values.name.toLowerCase());
        action.resetForm();
      }}
    >
      <Form>
        <label htmlFor={searchName}>Find contact by name</label>
        <Field name="name" id={searchName} />
      </Form>
    </Formik>
  );
}
