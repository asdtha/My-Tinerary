import React, {useState} from "react";
import { Link as Linkrouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignIn = () => {
  const [formSent, sentFormSent] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errors = {};
    // Email validation
          if (!valores.email) {
            errors.email = "Please insert your email";
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errors.email = "The email can only contain letters, numbers, dots, hyphens and underscores"
          }
          //Password validation
          if (!valores.password) {
            errors.password = "Please insert your password";
          } 

          return errors;
        }}
        onSubmit={(valores, {resetForm}) => {
          resetForm();
          console.log(valores);
          console.log("Form sent");
          sentFormSent(true);
          setTimeout(() => sentFormSent(false), 4000);
        }}
      >
         {({ errors }) => (
          <div className="contenedor">
            <Form className="formulario" >
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  id="email"           
                />
                <ErrorMessage name="email" component={() => (
                  <div className="error">{errors.email}</div>
                )} />
               
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Insert your password"
                  id="password"
      
                />
                <ErrorMessage name="email" component={() => (
                 <div className="error">{errors.password}</div>
                )} />
             
              </div>

              <button type="submit">Sign In</button>
             {formSent && <p className="exito">Form sent succesfully</p>}

              <div className="change-form-message">
                <Linkrouter to="/signup">
                  <p>Don't have an account yet? Sign Up here</p>
                </Linkrouter>
              </div>
            </Form>
          </div>
        )}
       {/*  {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <div className="contenedor">
            <Form className="formulario" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Insert your password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
             {touched.password && errors.password && <div className="error">{errors.password}</div>}

              </div>

              <button type="submit">Sign In</button>
             {formSent && <p className="exito">Form sent succesfully</p>}

              <div className="change-form-message">
                <Linkrouter to="/signup">
                  <p>Don't have an account yet? Sign Up here</p>
                </Linkrouter>
              </div>
            </Form>
          </div>
        )} */}
      </Formik>
    </>
  );
};

export default SignIn;
