import {  useContext } from "react";
import { AutContext } from "../../context";
import { Navigate, useLocation } from "react-router";


function PrivateRoute({Children}) {
  

   const { user } = useContext(AutContext);
   const location = useLocation();


   
   
    if (user) {
       return Children;
   }
   
   return <Navigate state={location.pathname} to={"/signup"}></Navigate>
}

export default PrivateRoute;