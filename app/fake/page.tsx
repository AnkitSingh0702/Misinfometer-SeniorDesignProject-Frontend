// import React from "react";

// import Navbar from "@/components/navbar/nav";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "predictor",
// };

// function page() {
//   return (
//     <div >
      
//       {/* navbar component */}
//       <Navbar />

//       <div className="container px-5 py-10 mx-auto justify-center">
//         <div className="flex flex-col text-center w-full mb-20">
//           <h1 className="text-5xl p-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#5ea67d] via-[#197966] to-[#1e9381]">
//             Fake News Detection
//           </h1>
//           <p className=" text-slate-500 lg:w-2/3 mx-auto leading-relaxed text-base">
//             In the age of misinformation, the quest to discern truth from
//             falsehood has become paramount. Through advanced algorithms and
//             vigilant fact-checking, fake news detection tools stand as guardians
//             of credibility in the digital realm. They sift through the noise,
//             empowering users to navigate the vast sea of information with
//             clarity and confidence.
//           </p>
//         </div>
//         <div className=" ml-[20.5rem] max-w-2xl  flex   gap-4   text-zinc-200 rounded-lg border group border-zinc-800 bg-zinc-800/40 shadow-xl shadow-zinc-950/40 p-4  overflow-hidden">
//           <div>
//             <label
//               htmlFor="first_name"
//               className="block mb-2 text-sm font-bold text-gray-400 dark:text-white"
//             >
//               DISPLAY NEWS
//             </label>

//             <input
//               type="text"
//               id="first_name"
//               className="outline-none p-5 w-[30rem]  rounded-lg border border-zinc-800 text-black dark:text-white bg-zinc-800/40"
//               placeholder="Enter the News"
//               required
//             />
//             <button className=" ml-9 py-4 px-6 bg-gradient-to-tl from-[#266141] via-[#00856b] to-[#095348]  rounded-lg  ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold">
//               {" "}
//               Check It{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;

import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/navbar/nav";
import GetNews from "./getnews";

export const metadata: Metadata = {
  title: "predictor",
};

function Page() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl p-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#5ea67d] via-[#197966] to-[#1e9381]">
            Fake News Detection
          </h1>
          <p className="text-slate-500 lg:w-2/3 mx-auto leading-relaxed text-base">
            In the age of misinformation, the quest to discern truth from
            falsehood has become paramount. Through advanced algorithms and
            vigilant fact-checking, fake news detection tools stand as guardians
            of credibility in the digital realm. They sift through the noise,
            empowering users to navigate the vast sea of information with
            clarity and confidence.
          </p>
        </div>
        <GetNews />
      </div>
    </div>
  );
}

export default Page;

