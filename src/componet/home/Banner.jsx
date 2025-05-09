import { useState } from "react";
import { ArrowBigDown, ArrowBigLeft, PlayCircle } from "lucide-react";
import Modal from "react-modal";

Modal.setAppElement('#root');

function Banner() {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   return (
      <>
         <div className=" container mx-auto py-32 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="space-y-6">
               {/* Text Part */}
               <p className="text-purple-700 font-semibold">
                  ✨ স্বাগতম! আপনাকে পেয়ে আমরা আনন্দিত
               </p>
               <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
                  আপনাকে দক্ষ করতে আপনার পাশে <br />
                  <span className="text-purple-600">আহমাদ’স আইটি ইনস্টিটিউট</span>
               </h1>
               <p className="text-gray-700">
                  আহমাদ’স আইটি ইনস্টিটিউট আপনার ক্যারিয়ার গড়ার নির্ভরযোগ্য ঠিকানা!
               </p>
               <div className="flex gap-4 flex-wrap">
                  <button className="bg-purple-600 text-white px-6 py-3 flex items-center rounded-xl hover:bg-purple-700 transition">
                     <ArrowBigLeft/>সকল কোর্স দেখুন
                  </button>
                  <button className="border border-purple-600 text-purple-600 px-6 py-3 flex items-center rounded-xl hover:bg-purple-100 transition">
                     <ArrowBigLeft />এখনই ভর্তি হন
                  </button>
               </div>
            </div>

            {/* Image & Play button */}
            <div className="relative w-full max-w-xl mx-auto">
               {/* Background Layer */}
               <div
                  className="absolute -top-18 inset-0 bg-center bg-contain bg-no-repeat z-0 h-[500px]"
                  style={{ backgroundImage: "url('https://www.ahmadsit.com/images/bg-design.png')" }}
               ></div>


               {/* Foreground Image */}
               <img
                  src="https://www.ahmadsit.com/uploads/1740550940_banner-img.jpg"
                  alt="Institute students"
                  className="relative z-10 rounded-xl shadow-md w-full"
               />
               <button
                  onClick={() => setModalIsOpen(true)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-purple-600 rounded-full p-4 hover:scale-110 transition duration-300 z-20"
               >
                  <PlayCircle className="text-purple-600 w-10 h-10" />
               </button>
            </div>
         </div>

         {/* Modal */}
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="YouTube Video"
            className="w-11/12 md:w-3/4 max-w-3xl mx-auto my-20 bg-white p-4 rounded-xl shadow-xl outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
         >
            <div className="relative w-full h-0 pb-[56.25%]">
               <iframe
                  className="absolute top-0 left-0 w-full h-full rounded"
                  src="https://www.youtube.com/embed/XXXXXXXXXXX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
            </div>
            <button
               onClick={() => setModalIsOpen(false)}
               className="absolute top-2 right-4 text-white hover:text-red-500 text-xl font-bold"
            >
               ✕
            </button>
         </Modal>
      </>
   );
}

export default Banner;
