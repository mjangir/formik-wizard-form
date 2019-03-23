import React from "react";
import { Field } from "formik";

export default ({ touched, errors }) => (
  <div>
    <label>Address Line 1*: </label>
    <Field name="addressLine1" id="addressLine1" />
    {touched.addressLine1 && typeof errors.addressLine1 === "string" && errors.addressLine1}
    <br />
    <br />
    <label>Address Line 2: </label>
    <Field name="addressLine2" id="addressLine2" />
    <br/><br/>
    <label>Country: </label>
    <Field name="country" id="country" />
  </div>
);
