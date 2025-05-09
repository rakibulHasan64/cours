import { SiDatabricks } from "react-icons/si";

function AboutBanner() {
   return (
      <>
         <div className="container mx-auto py-32 px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
               {/* Text Part */}
               <div className="md:w-1/2 space-y-6 text-gray-800">
                  <h2 className="text-2xl font-semibold flex items-center gap-2 text-purple-700">
                     <SiDatabricks className="text-3xl" />
                     আমাদের সম্পর্কে জানুন
                  </h2>
                  <p className="text-lg font-mono leading-relaxed">
                     আহমাদ’স আইটি ইনস্টিটিউট একটি আধুনিক প্রযুক্তি প্রশিক্ষণ কেন্দ্র, যেখানে বাস্তবভিত্তিক আইটি দক্ষতা উন্নয়নে গুরুত্ব দেওয়া হয়। আমরা ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন, ডিজিটাল মার্কেটিং ও সফটওয়্যার ডেভেলপমেন্টসহ বিভিন্ন কোর্স প্রদান করি। দেশের প্রথম আবাসিক আইটি প্রশিক্ষণ সুবিধার মাধ্যমে শিক্ষার্থীদের হাতে-কলমে অভিজ্ঞতা নিশ্চিত করি। আমাদের রয়েছে লাইভ ও ভিডিও ক্লাস, আজীবন সহায়তা ও ক্যারিয়ার প্লেসমেন্ট সুবিধা। দক্ষ প্রশিক্ষক ও আপডেটেড কারিকুলামসহ আমরা শিক্ষার্থীদের আইটি খাতে দক্ষ করে তুলতে প্রতিশ্রুতিবদ্ধ।
                  </p>
                  <p className="text-lg font-semibold text-purple-600">
                     আহমাদ’স আইটি ইনস্টিটিউট—আপনার স্বপ্ন পূরণের নির্ভরযোগ্য সহযোগী!
                  </p>
               </div>

               {/* Image Part */}
               <div className="md:w-1/2">
                  <img
                     className="w-full max-w-xl mx-auto"
                     src="https://www.ahmadsit.com/images/digital-marketing.png"
                     alt="Digital marketing illustration"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default AboutBanner;
