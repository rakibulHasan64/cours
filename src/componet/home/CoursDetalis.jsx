import { useLoaderData, useParams } from "react-router-dom";

function CourseDetails() {
   const { id } = useParams();  
   const data = useLoaderData();  
   // const = course.find(course => course.id === id);




   if (!data) return <p>কোর্সটি পাওয়া যায়নি।</p>;

   return (
      <div className="max-w-6xl mx-auto py-10 px-4 font-roboto">
         <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className=" font-roboto">
               <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
               <p className="text-gray-600 mb-4">{data.description}</p>
               <ul className="mb-4 space-y-2">
                  <li>💸 কোর্স ফি: {data.price}৳</li>
                  <li>📅 মেয়াদ: {data.duration}</li>
                  <li>👨‍🏫 প্রশিক্ষক: {data.instructor}</li>
               </ul>
               <div className="flex gap-4 mb-4  font-roboto">
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg">এখনই ভর্তি হন</button>
               </div>
            </div>
            <div>
               <img src={data?.image} alt={data?.title} className="rounded-xl shadow-lg" />
            </div>
         </div>

         <div className="mt-10  font-roboto">
            <h2 className="text-2xl font-bold  font-roboto mb-4 text-pink-600">✅ আপনি যা যা শিখবেন:</h2>
            <ul className="list-disc pl-6 space-y-2">
               {data?.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
               ))}
            </ul>
         </div>

         <div className="mt-10  font-roboto">
            <h2 className="text-2xl font-bold mb-4 text-green-600  font-roboto">🎯 কোর্স শেষে যা পাবেন:</h2>
            <ul className="list-disc pl-6 space-y-2  font-roboto">
               {data.benefits.map((benefit, i) => (
                  <li className=" font-roboto" key={i}>{benefit}</li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default CourseDetails;
