import React from "react";
import {Link as Linkrouter } from 'react-router-dom';


function Users () {
 return (
     <div className="user-links">
        <Linkrouter to="/signin" >Sign In</Linkrouter>
        <Linkrouter to="/signup" >Sign Up</Linkrouter>
     </div>
 )
}

export default Users;