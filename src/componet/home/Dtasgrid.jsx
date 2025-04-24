import { Laptop, Sparkles } from 'lucide-react';

function Dtasgrid() {
   const stats = [
      {
         icon: <Laptop className="w-10 h-10 text-black z-10 relative" />,
         label: "200+ ছাত্র",
         color: "from-purple-600 to-pink-500",
      },
      {
         icon: <Laptop className="w-10 h-10 text-black z-10 relative" />,
         label: "6+ ব্যাচ",
         color: "from-pink-600 to-fuchsia-500",
      },
      {
         icon: <Sparkles className="w-10 h-10 text-black z-10 relative" />,
         label: "95% সাফল্য",
         color: "from-yellow-600 to-amber-500",
      },
      {
         icon: <Laptop className="w-10 h-10 text-black z-10 relative" />,
         label: "7+ শিক্ষক",
         color: "from-purple-700 to-indigo-500",
      },
   ];

   return (
      <div className="bg-gray-100 py-12">
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
   );
}

export default Dtasgrid;
