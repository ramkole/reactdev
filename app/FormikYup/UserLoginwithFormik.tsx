"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schema";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const UserForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
