import React, { useState } from "react";
import { Link as Linkrouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {
  const [formSent, sentFormSent] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          password: "",
          country: "",
        }}
        validate={(values) => {
          let errors = {};

          //Name validation
          if (!values.name) {
            errors.name = "Please insert your name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "The name can only contain letters and spaces";
          }

          //Last Name validation
          if (!values.lastname) {
            errors.lastname = "Please insert your last name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
            errors.lastname = "The last name can only contain letters and spaces";
          }

          // Email validation
          if (!values.email) {
            errors.email = "Please insert your email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "The email can only contain letters, numbers, dots, hyphens and underscores";
          }
          //Password validation
          if (!values.password) {
            errors.password = "Please insert your password";
          }

          return errors;
        }}
        /* Function to send the form */
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values);
          console.log("Form sent");
          sentFormSent(true);
          setTimeout(() => sentFormSent(false), 4000);
        }}
      >
        {/* Render prop */}
        {({ errors }) => (
          <div className="contenedor">
            <Form className="formulario">
              {/* Name */}
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  id="name"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name}</div>}
                />
              </div>

              {/* LastName */}
              <div>
                <label htmlFor="lastname">Last Name</label>
                <Field
                  type="text"
                  name="lastname"
                  placeholder="Insert your Last Name"
                  id="lastname"
                />
                <ErrorMessage
                  name="lastname"
                  component={() => (
                    <div className="error">{errors.lastname}</div>
                  )}
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  id="email"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Insert your password"
                  id="password"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>

              <button type="submit">Sign Up</button>
              {formSent && <p className="exito">Form sent succesfully</p>}
              <div className="signup-form-message">
                <Linkrouter to="/signin">
                  <p className="signup-form-message">Already have an account? Sign In</p>
                </Linkrouter>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
