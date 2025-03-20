// import React from "react";
// import { FaLock } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <header className="bg-[#1E293B] py-6 px-20 flex items-center justify-between shadow-md">
//       <div className="flex items-center gap-2">
//         <div className="relative rounded-full flex items-center justify-center"></div>
//         <span className="text-teal-400 text-2xl font-semibold">E-Suq</span>
//       </div>

//       <nav className="flex space-x-6">
//         <NavLink to="/">
//           <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
//             Home
//           </a>
//         </NavLink>

//         <NavLink to="/product">
//           <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
//             Product
//           </a>
//         </NavLink>

//         <a href="#" className="text-teal-400 text-2xl hover:text-teal-300">
//           Contact
//         </a>
//       </nav>

//       <div className="flex items-center space-x-4">
//         <NavLink to="/register">
//           <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
//             Register
//           </button>
//         </NavLink>

//         <NavLink to="/CustomerLogin">
//           <button className="border border-teal-400 text-teal-400 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white">
//             Login
//           </button>
//         </NavLink>
//         <FaLock className="text-teal-400 text-xl cursor-pointer" />
//         <div className="flex gap-5 items-center">
//           <div className="text-xl bg-orange-400 w-12 rounded-full">
//             <p className="text-center pt-2 ">J</p>
//           </div>
//           <div>
//             {" "}
//             <button className="text-xl bg-orange-500 w-12 h-12 rounded-2xl px-2">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  // Retrieve customer data from localStorage
  const handleLogOut = () => {
    localStorage.clear();
  };
  const customerLogin = localStorage.getItem("customer");

  return (
    <header className="bg-gray-900 py-4 px-10 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="text-teal-400 text-3xl font-bold">E-Suq</div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className="text-gray-300 text-lg hover:text-teal-400 transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="text-gray-300 text-lg hover:text-teal-400 transition"
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-300 text-lg hover:text-teal-400 transition"
        >
          Contact
        </NavLink>
      </nav>

      {/* Conditional Rendering for Authenticated vs Non-Authenticated Users */}
      {customerLogin ? (
        <div className="flex items-center gap-3">
          <FaLock className="text-teal-400 text-xl cursor-pointer" />
          <div className="text-xl bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold">
            {JSON.parse(customerLogin).fullName[0]}
          </div>

          <NavLink to="/CustomerLogin">
            <button
              onClick={handleLogOut}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Logout
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <NavLink to="/register">
            <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition">
              Register
            </button>
          </NavLink>
          <NavLink to="/CustomerLogin">
            <button className="border border-teal-400 text-teal-400 px-5 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition">
              Login
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
