// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "../src/components/navbar";
// import Footer from "../src/components/footer";
// import Home from "../src/scenes/home";
// import Register from "../src/scenes/register";
// import Login from "../src/scenes/login";
// import Management from "../src/scenes/management";
// import StatsPage from "../src/scenes/stats";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-space bg-cover bg-center text-white flex flex-col">
//         <Navbar />
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/management" element={<Management />} />
//             <Route path="/stats" element={<StatsPage />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// // import Footer from "./Footer";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-black text-white">
//       {/* Main Content */}
//       <main className="flex-grow">
//         <section id="about" className="min-h-screen py-16 px-6 bg-black">
//           <h2 className="text-4xl font-bold mb-6 text-center">About the Team</h2>
//           <p className="text-lg text-center max-w-2xl mx-auto">
//             This project was built with 💻 by the awesome team <strong>Infinite Loopers</strong>:
//           </p>
//           <ul className="mt-4 text-center space-y-2">
//             <li>👩‍💻 Teammate 1 – Frontend Dev</li>
//             <li>👨‍💻 Teammate 2 – Backend Dev</li>
//             <li>🧠 Teammate 3 – Logic & Design</li>
//             <li>🌐 Teammate 4 – API & Integration</li>
//           </ul>
//         </section>

//         <section id="contact" className="min-h-screen py-16 px-6 bg-gray-900">
//           <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
//           <p className="text-lg text-center">
//             Reach us at: <a href="mailto:loopers@example.com" className="text-blue-400 underline">loopers@example.com</a>
//           </p>
//         </section>

//         <section id="github" className="min-h-screen py-16 px-6 bg-black">
//           <h2 className="text-4xl font-bold mb-6 text-center">GitHub</h2>
//           <p className="text-center text-lg">
//             Check out our repo:{" "}
//             <a
//               href="https://github.com/your-repo-link"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 underline"
//             >
//               github.com/your-repo-link
//             </a>
//           </p>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;











import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import Home from "../src/scenes/home";
import Register from "../src/scenes/register";
import Login from "../src/scenes/login";
import Management from "../src/scenes/management";
import StatsPage from "../src/scenes/stats";
import About from "./scenes/about";
import Contact from "./scenes/contact";




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space bg-cover bg-center text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/management" element={<Management />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


