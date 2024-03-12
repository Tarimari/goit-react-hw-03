// import { Formik, Form, Field } from "formik";
// import { useId } from "react";
import css from "./SearchBox.module.css";
export default function SearchBox({ searchBar, setSearchBar }) {
  // const searchName = useId();
  // return (
  //   <Formik
  //     initialValues={{
  //       name: "",
  //     }}
  //     onSubmit={(values, action) => {
  //       setSearchBar(values.name.toLowerCase());
  //       action.resetForm();
  //     }}
  //   >
  //     <Form>
  //       <label htmlFor={searchName}>Find contact by name</label>
  //       <Field name="name" id={searchName} />
  //     </Form>
  //   </Formik>
  // );

  const handleChange = (evt) => {
    setSearchBar(evt.target.value);
  };

  return (
    <div className={css.container}>
      <label htmlFor="searchName">Find contact by name</label>
      <input
        className={css.elem}
        type="text"
        id="searchName"
        value={searchBar}
        onChange={handleChange}
      />
      <p>{searchBar}</p>
    </div>
  );
}
