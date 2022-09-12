import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownoptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioButtonOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];

  const checkBoxButtonOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "Option 2", value: "coption2" },
    { key: "Option 3", value: "coption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkboxOptions: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOptions: Yup.string().required("Required"),
    checkboxOptions: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("From date", values);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl control="input" type="email" name="email" label="Email" />
          <FormikControl control="textarea" name="description" label="Description" />
          <FormikControl control="select" name="selectOption" label="Select a topic" options={dropdownoptions} />
          <FormikControl control="radio" name="radioOptions" label="Radio Topic" options={radioButtonOptions} />
          <FormikControl control="checkbox" name="checkboxOptions" label="Checkbox Topic" options={checkBoxButtonOptions} />
          <FormikControl control="date" name="birthDate" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
