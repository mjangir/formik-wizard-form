import React from "react";
import { Field } from "formik";

export default ({ touched, errors }) => (
  <div>
    <label>Email*: </label>
    <Field name="email" id="email" />
    {touched.email && typeof errors.email === "string" && errors.email}
    <br />
    <br />
    <label>Phone: </label>
    <Field name="phone" id="phone" />
    <br />
    <br />
    <label>Mobile: </label>
    <Field name="mobile" id="mobile" />
  </div>
);
