import { Outlet } from "react-router";
import Naver from "../componet/home/Naver";
import Foote from "../componet/home/Foote";


function Outlas() {
   return (
      <>
         
         <Naver />
         <Outlet />
         <Foote />
         
      </>
   );
}

export default Outlas;