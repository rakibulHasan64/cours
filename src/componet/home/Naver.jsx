import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Naver() {
   const [togle, setTogle] = useState(false);

   const handler = () => {
      setTogle(!togle);
   };

   const navLinkClass = ({ isActive }) =>
      isActive
         ? 'text-blue-700 font-bold underline'
         : 'hover:text-blue-600';

   return (
      <>
         <nav className='py-6 px-4 relative border-b-[1px] border-gray-400'>
            <div className="flex items-center container mx-auto justify-between">
               <div>
                  <h1 className='text-3xl font-roboto'>It</h1>
               </div>

               <div className="hidden md:block">
                  <ul className='flex items-center gap-7 text-xl font-roboto'>
                     <li><NavLink to="/" className={navLinkClass}>হোম</NavLink></li>
                     <li><NavLink to="/about" className={navLinkClass}>আমাদের সম্পর্কে</NavLink></li>
                     <li><NavLink to="/courses" className={navLinkClass}>কোর্সসমূহ</NavLink></li>
                     <li><NavLink to="/success" className={navLinkClass}>সাফল্যের গল্প</NavLink></li>
                  </ul>
               </div>

               <div className="hidden md:flex gap-4">
                  <NavLink to="/contact" className="text-lg font-bold font-roboto py-2 px-4 bg-blue-700 rounded-xl text-white">
                     যোগাযোগ
                  </NavLink>
                  <NavLink to="/signin" className={({ isActive }) =>
                     `text-lg font-bold font-roboto py-2 px-4 border rounded-xl ${isActive ? "border-blue-700 text-blue-700 underline" : "border-blue-700 text-blue-700"}`
                  }>
                     Sign In
                  </NavLink>
                  <NavLink to="/signup" className={({ isActive }) =>
                     `text-lg font-bold font-roboto py-2 px-4 bg-green-600 rounded-xl ${isActive ? "text-white underline" : "text-white"}`
                  }>
                     Sign Up
                  </NavLink>
               </div>

               <div onClick={handler} className="text-2xl block md:hidden">
                  <FiMenu />
               </div>
            </div>

            {
               togle && (
                  <div className="absolute top-0 left-0 w-64 h-screen bg-amber-500 shadow-md p-6 z-50 transition-transform duration-300 ease-in-out">
                     <div className="flex justify-between items-center mb-6">
                        <h1 className='text-2xl font-roboto'>It</h1>
                        <button onClick={handler} className='text-2xl'>
                           <IoClose />
                        </button>
                     </div>
                     <ul className='flex flex-col gap-4 text-lg font-roboto'>
                        <li><NavLink to="/" className={navLinkClass}>হোম</NavLink></li>
                        <li><NavLink to="/about" className={navLinkClass}>আমাদের সম্পর্কে</NavLink></li>
                        <li><NavLink to="/courses" className={navLinkClass}>কোর্সসমূহ</NavLink></li>
                        <li><NavLink to="/success" className={navLinkClass}>সাফল্যের গল্প</NavLink></li>
                        <li>
                           <NavLink to="/contact" className="w-full block text-left text-lg font-bold font-roboto py-2 px-4 bg-blue-700 rounded-xl text-white">
                              যোগাযোগ
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to="/signin" className={({ isActive }) =>
                              `w-full block text-left text-lg font-bold font-roboto py-2 px-4 border rounded-xl bg-white ${isActive ? "border-blue-700 text-blue-700 underline" : "border-blue-700 text-blue-700"}`
                           }>
                              Sign In
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to="/signup" className={({ isActive }) =>
                              `w-full block text-left text-lg font-bold font-roboto py-2 px-4 bg-green-600 rounded-xl ${isActive ? "text-white underline" : "text-white"}`
                           }>
                              Sign Up
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               )
            }
         </nav>
      </>
   );
}

export default Naver;



