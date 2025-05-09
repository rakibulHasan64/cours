import React from 'react';
import Naver from './Naver';
import { Link, useNavigate } from 'react-router';

function ErrorPage() {

   const navigate = useNavigate();
   return (
      <>
         <Naver />
         <div className="flex flex-col font-roboto  justify-center items-center h-screen bg-gray-50 p-4">
            <p className="text-purple-700 font-semibold text-xl mb-4">
               ✨ স্বাগতম! আপনাকে পেয়ে আমরা আনন্দিত
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900 text-center mb-6">
               ৪০৪ | পেজটি পাওয়া যায়নি
            </h1>
            <p className="text-gray-700 text-center mb-6">
               আপনি যে পেজটি খুঁজছেন তা আমাদের কাছে নেই। দুঃখিত!
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
               <button
                  onClick={() => navigate(-1)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
               >
                  হোম পেজে ফিরে যান
               </button>
            </div>
         </div>
      </>
      
   );
}

export default ErrorPage;
