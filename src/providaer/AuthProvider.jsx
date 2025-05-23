import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AutContext } from "../context";
import { auth } from "../componet/auth/firevase.config";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


function AuthProvider({ children }) {
   const [isAdmin, setIsAdmin] = useState(false);
   const [user, setUser] = useState(null);
   const creatuser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const singin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }


   const singOut = () => {
      return signOut(auth)
   }

   const googleSignIn = () => {

      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
   };

    
   // useEffect(() => {
   //    const usnscribe= onAuthStateChanged(auth, (currentUser) => {
   //       if (currentUser) {
   //          console.log(currentUser);
   //          serUser(currentUser)

   //       } else {
   //          serUser(null)
   //       }
   //    });

   //    return () =>{
   //       usnscribe();
   //    }
   // },[])


   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);

            // Admin check
            if (currentUser.email === "fasterhasan0@gmail.com") {
               setIsAdmin(true);
            } else {
               setIsAdmin(false);
            }

         } else {
            setUser(null);
            setIsAdmin(false);
         }
      });

      return () => unsubscribe();
   }, []);
   
   const authIfo = {
      creatuser,
      singin,
      user,
      singOut,
      googleSignIn,
      isAdmin,
   }
   return (
      <AutContext.Provider value={authIfo}>
         
         {children}
      </AutContext.Provider>
   );
}

export default AuthProvider;