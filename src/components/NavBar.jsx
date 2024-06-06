import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyBrand</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : undefined
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : undefined
              }
            >
              Service
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
