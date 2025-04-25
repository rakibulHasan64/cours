import {  useContext } from "react";
import { AutContext } from "../../context";
import { Navigate } from "react-router";


function PrivateRoute({Children}) {
  

   const {user}=useContext(AutContext)
   
   
    if (user) {
       return Children;
   }
   
   return <Navigate to={"/signup"}></Navigate>
}

export default PrivateRoute;