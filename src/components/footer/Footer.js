import React from "react";
import { Link as Linkrouter } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center bg-purple-600 py-5 custom-footer">
        <div className="flex flex-col custom-footer">
          <div className="flex justify-evenly items-center text-2xl font-bold link-footer">
            <Linkrouter to="/" className="hover:text-purple-300 link-footer-home">
              Home
            </Linkrouter>
            
            <Linkrouter to="/cities" className="hover:text-purple-300 link-footer-city">
              Cities
            </Linkrouter>
          </div>
          <div className="flex items-center justify-evenly text-2xl py-10 div-icons">
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="hover:text-purple-300 custom-icons">
            <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="hover:text-purple-300 custom-icons">
            <FaInstagram />
            </a>
            <a href="https://www.whatsapp.com/" rel="noreferrer" target="_blank" className="hover:text-purple-300 custom-icons">
            <FaWhatsapp />
            </a>
          </div>
          <div className="flex items-center ">
            <p className="text-center">
              &copy; {year} MyTinerary Inc. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
