import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  username: Yup.string().lowercase("lowercase"),
});

export default function SearchBox() {
  const searchName = useId();
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
      }}
      validationSchema={UserSchema}
    >
      <Form>
        <label htmlFor={searchName}>Find contact by name</label>
        <Field type="text" name="name" id={searchName} />
        <ErrorMessage name="name" component="span" />
      </Form>
    </Formik>
  );
}
