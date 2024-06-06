import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black rounded-md text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="font-semibold">
            {new Date().toLocaleDateString()} - We Are Currently Open!
          </h5>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <h6 className="hover:text-gray-400 transition duration-300">
            Facebook
          </h6>
          <h6 className="hover:text-gray-400 transition duration-300">
            Twitter
          </h6>
          <h6 className="hover:text-gray-400 transition duration-300">
            Instagram
          </h6>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
