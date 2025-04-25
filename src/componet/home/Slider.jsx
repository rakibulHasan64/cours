




import { useState } from "react";

const images = [
   "https://www.ahmadsit.com/uploads/1741514819_Screenshot_2.jpg",
   "https://www.ahmadsit.com/uploads/1741514819_Screenshot_2.jpg",
   "https://www.ahmadsit.com/uploads/1741514819_Screenshot_2.jpg",
   "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241259.jpg?semt=ais_hybrid&w=740",
];

 function Slider() {
   const [index, setIndex] = useState(0);

   const prev = () => {
      setIndex(index === 0 ? images.length - 2 : index - 2);
   };

   const next = () => {
      setIndex(index + 2 >= images.length ? 0 : index + 2);
   };

   return (
      <div className="max-w-6xl mx-auto px-4 py-20 ">
         
         <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
               ছাত্রদের মুখেই শুনুন সাফল্যের গল্প
            </h2>
            <p className="text-gray-600 py-2">
               প্রতিটি সাফল্যের পেছনে আছে অধ্যবসায়, অধ্যবসায় ও একাগ্রতা। আমাদের ছাত্রদের সাফল্যের গল্পগুলো তাদের জীবন্ত উদাহরণ।
            </p>
         </div>

         {/* স্লাইডার */}
         <div className="relative flex items-center justify-center space-y-8">
            {/* বাম বাটন */}
            <button
               onClick={prev}
               className="absolute left-2 md:left-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-md"
            >
               ❮
            </button>

            {/* ইমেজ */}
            <div className="flex gap-6 overflow-hidden">
               {images.slice(index, index + 2).map((img, idx) => (
                  <div key={idx} className="w-64 h-40 md:w-96 md:h-56 rounded-lg overflow-hidden">
                     <img
                        src={img}
                        alt="Student Story"
                        className="w-full h-full object-cover"
                     />
                  </div>
               ))}
            </div>

            {/* ডান বাটন */}
            <button
               onClick={next}
               className="absolute right-2 md:right-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-md"
            >
               ❯
            </button>
         </div>

         {/* নিচের আলাদা সেকশন */}
         <div className="text-center mt-16 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
               এক্সক্লুসিভ সলিউশনস
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
               দেশের প্রথম আমরাই দিচ্ছি আবাসিক ব্যবস্থাপনার আইটি প্রশিক্ষণ। তাই, আধুনিক প্রযুক্তি প্রতিষ্টান হিসেবে এক্সক্লুসিভ সলিউশনস সর্বদা রয়েছে আপনার পাশে।
            </p>
         </div>
      </div>
   );
}
export default Slider;