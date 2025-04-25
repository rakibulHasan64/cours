
import { Laptop, Sparkles, Wifi, Building2, BatteryCharging } from 'lucide-react';
function Servise() {

   const stats = [
      {
         icon: <BatteryCharging className="w-10 h-10 text-black z-10 relative" />,
         label: "২৪ ঘন্টা জেনারেটরের সুবিধা",
         color: "from-purple-600 to-pink-500",
      },
      {
         icon: <Building2 className="w-10 h-10 text-black z-10 relative" />,
         label: "১০০% আবাসিক ব্যবস্থাপনা",
         color: "from-pink-600 to-fuchsia-500",
      },
      {
         icon: <Sparkles className="w-10 h-10 text-black z-10 relative" />,
         label: "২৪ ঘন্টা আবাসিক শিক্ষক সহায়তা",
         color: "from-yellow-600 to-amber-500",
      },
      {
         icon: <Wifi className="w-10 h-10 text-black z-10 relative" />,
         label: "২৪ ঘন্টা ইন্টারনেট সুবিধা",
         color: "from-purple-700 to-indigo-500",
      },
   ];
   return (
      <>
         
         <div className="bg-[#073E3E]">
            <div className="container mx-auto py-14">
               <h3 className="text-center py-2 text-white text-3xl md:text-4xl font-bold font-roboto">আমাদের সুবিধা সমূহ</h3>
               <p className="text-center text-white font-roboto py-2 mt-3">আমাদের সুবিধার মধ্যে রয়েছে উন্নতমানের পরিষেবা, দ্রুত সাপোর্ট, ব্যবহারবান্ধব প্ল্যাটফর্ম, নিরাপত্তা ও নির্ভরযোগ্যতা, এবং প্রয়োজন<br /> অনুযায়ী কাস্টম সমাধান, যা আপনাকে সেরা অভিজ্ঞতা প্রদান করবে।</p>

               <div className="py-13 ">
                  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                     {stats.map((item, idx) => (
                        <div
                           key={idx}
                           className="bg-white shadow rounded-xl text-center py-10 px-6 relative overflow-hidden"
                        >
                           <div className="relative flex justify-center mb-4">
                              {item.icon}
                              <div
                                 className={`absolute w-20 h-20 -bottom-4 -left-6 rounded-full bg-gradient-to-tr ${item.color}`}
                                 style={{
                                    clipPath: "circle(50% at 100% 50%)",
                                    zIndex: 0,
                                 }}
                              ></div>
                           </div>
                           <h3 className="text-lg font-bold z-10 relative">{item.label}</h3>
                        </div>
                     ))}
                  </div>
               </div>


            </div>
         </div>
         
      </>
   );
}

export default Servise;



