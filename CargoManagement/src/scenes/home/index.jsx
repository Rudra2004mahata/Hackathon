import { useNavigate } from "react-router-dom";
import HText from "../../shared/HText"

function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <HText>Welcome Astronomer</HText>
      <div className="flex flex-col gap-4 w-40">
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl transition"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-2xl transition"
        >
          Login
        </button>
      </div>
    </main>
  );
}

export default Home;


// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <section id="about" className="min-h-screen py-16 px-6 bg-black text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center">About the Team</h2>
//         <p className="text-lg text-center max-w-2xl mx-auto">
//           This project was built with 💻 by the awesome team <strong>Infinite Loopers</strong>:
//         </p>
//         <ul className="mt-4 text-center space-y-2">
//           <li>👩‍💻 Teammate 1 – Frontend Dev</li>
//           <li>👨‍💻 Teammate 2 – Backend Dev</li>
//           <li>🧠 Teammate 3 – Logic & Design</li>
//           <li>🌐 Teammate 4 – API & Integration</li>
//         </ul>
//       </section>

//       <section id="contact" className="min-h-screen py-16 px-6 bg-gray-900 text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
//         <p className="text-lg text-center">
//           Reach us at: <a href="mailto:loopers@example.com" className="text-blue-400 underline">loopers@example.com</a>
//         </p>
//       </section>

//       <section id="github" className="min-h-screen py-16 px-6 bg-black text-white">
//         <h2 className="text-4xl font-bold mb-6 text-center">GitHub</h2>
//         <p className="text-center text-lg">
//           Check out our repo:{" "}
//           <a
//             href="https://github.com/your-repo-link"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 underline"
//           >
//             github.com/your-repo-link
//           </a>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Home;
