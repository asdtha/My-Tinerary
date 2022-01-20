import React from "react";
import {Link as Linkrouter } from 'react-router-dom';

const SignUp = () => {
  return (

    <>
    <div className="contenedor">
		
      <form action="" className="formulario">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Insert your name"
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Insert your Last Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            id="email"
          />
        </div>

        <button type="submit">Sign Up</button>

        <div className="change-form-message">
        <Linkrouter to="/signin"><p>Already have an account? Sign in here</p></Linkrouter> 
        </div>
      </form>
     
      </div>
      
    </>
  );
};

export default SignUp;
