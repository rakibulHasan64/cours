

function OurCoruse() {

   const courses = [
      {
         title: "কমপ্লিট ওয়েব ডেভলপমেন্ট + ইংলিশ",
         fee: "৬৫০০",
         duration: "১০ মাস",
         image: "https://www.ahmadsit.com/uploads/1740553915_web-development.png",
         link: "#",
      },
      {
         title: "ডিজিটাল মার্কেটিং + ইংলিশ",
         fee: "৬৫০০",
         duration: "৬ মাস",
         image: "https://www.ahmadsit.com/uploads/1740553926_digital-marketing.png",
         link: "#",
      },
      {
         title: "গ্রাফিক্স এন্ড ভিডিও এডিটিং + ইংলিশ",
         fee: "৬৫০০",
         duration: "৬ মাস",
         image: "https://www.ahmadsit.com/uploads/1740553935_graphic-design.png",
         link: "#",
      },
   ];
   return (
      <>
         
         <div className="container mx-auto py-16">
            <section className="py-12 bg-white text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের জনপ্রিয় কোর্স সমূহ</h2>
               <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                  আপনার দক্ষতা উন্নত করতে আমরা দিচ্ছি বেশ কয়েকটি বিষয়ের উপর প্রফেশনাল ট্রেনিং।
                  প্রতিটি কোর্স সাজানো হয়েছে হাতে-কলমে শেখার সুবিধে, বাস্তব প্রজেক্ট এবং অভিজ্ঞ মেন্টরদের গাইডলাইনের মাধ্যমে।
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                  {courses.map((course, index) => (
                     <div key={index} className="bg-gray-300 p-5 rounded-xl shadow-lg  hover:shadow-2xl transition overflow-hidden text-left">
                        <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                        <div className="p-5 bg-white">
                           <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                           <p className="text-sm mb-2">
                              কোর্স ফি - {course.fee}৳ (মাসিক) ➝ মেয়াদ - {course.duration}
                           </p>
                           <a
                              href={course.link}
                              className="inline-block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition"
                           >
                              বিস্তারিত দেখুন
                           </a>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
         
      </>
   );
}

export default OurCoruse;