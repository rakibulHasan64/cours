import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const menuItems = [
   { icon: <FaHome />, label: "Home", link: "/dasbordhome" },
   { icon: <FaUser />, label: "Profile", link: "/profile" },
   { icon: <FaCog />, label: "Settings", link: "/settings" },
];

function DashBord() {
   return (
      <main className="w-11/12 mx-auto py-6">
         <div className="grid grid-cols-12 gap-4">
            {/* Sidebar */}
            <aside className="col-span-2 bg-gray-100 p-4 rounded-xl min-h-screen">
               <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
               <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                     <li key={index}>
                        <NavLink
                           to={item.link}
                           className={({ isActive }) =>
                              `flex items-center gap-3 px-2 py-1 rounded-md ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                              }`
                           }
                        >
                           {item.icon} <span>{item.label}</span>
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </aside>

            {/* Main Content */}
            <section className="col-span-10">
               <Outlet />
            </section>
         </div>
      </main>
   );
}

export default DashBord;
