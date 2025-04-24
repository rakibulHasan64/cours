import React from 'react';

function Foote() {
   return (
      <>
         <footer className='bg-gray-300 py-8'>
            <div className="container mx-auto">
               <div className="flex items-center justify-between">
                  <div className="hidden md:block">
                     <ul className='flex items-center gap-7 text-xl font-roboto'>
                        <li>হোম</li>
                        <li>আমাদের সম্পর্কে</li>
                        <li>কোর্সসমূহ</li>
                        <li>সাফল্যের গল্প</li>
                     </ul>
                  </div>

                  <div className="text-xl font-roboto">
                     © 2021 Ahmad's IT Institute
                  </div>
               </div>
            </div>
         </footer>
         
      </>
   );
}

export default Foote;