// function Footer() {
//     return (
//       <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 mt-auto">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-center md:text-left">
//             &copy; {new Date().getFullYear()} Cargo Management. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a
//               href="#"
//               className="hover:text-blue-500 transition duration-300 text-sm"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="hover:text-blue-500 transition duration-300 text-sm"
//             >
//               Contact
//             </a>
//             <a
//               href="#"
//               className="hover:text-blue-500 transition duration-300 text-sm"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  
//   export default Footer;




  import React from "react";

function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white py-8 mt-auto"
      style={{ backgroundImage: "url(/stars-bg.png)" }} // Place your starry bg in /public
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-10 mb-4">
          <a href="#about" className="hover:text-blue-500 transition duration-300 text-sm">About</a>
          <a href="#contact" className="hover:text-blue-500 transition duration-300 text-sm">Contact</a>
          <a href="#github" className="hover:text-blue-500 transition duration-300 text-sm">GitHub</a>
        </div>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Cargo Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

//////////////////////////////////////
import { Link } from 'react-router-dom';

<div className="flex justify-center gap-4 text-sm text-white mt-4">
  <Link to="/about" className="hover:underline">About</Link>
  <Link to="/contact" className="hover:underline">Contact</Link>
  <a href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
</div>
