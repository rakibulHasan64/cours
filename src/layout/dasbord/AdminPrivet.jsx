
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AutContext } from "../../context";

function AdminRoute({ children }) {
   const { user, isAdmin } = useContext(AutContext);
   const location = useLocation();

   if (user && isAdmin) {
      return children;
   }

   return <Navigate to="/" state={{ from: location }} replace />;
}

export default AdminRoute;
