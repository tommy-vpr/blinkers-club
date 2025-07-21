"use client";

import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconCircleLetterB,
} from "@tabler/icons-react";

const sections = [
  {
    title: "SHOP",
    links: ["Products", "Merch"],
  },
  {
    title: "COMMUNITY",
    links: ["Twitter", "Facebook", "Instagram"],
  },
  {
    title: "RESOURCES",
    links: ["COA", "Contact"],
  },
];

export default function NeonFooter() {
  return (
    <div className="relative bg-[#000] text-white overflow-hidden border-t border-gray-400/10">
      {/* Glow Background */}
      <div
        className="absolute h-96 w-[600px] inset-0 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, #0d9488 0%, transparent 70%)",
        }}
      />
      <div
        className="translate-y-[40px] relative z-10 max-w-7xl mx-auto px-6 py-16 pb-12 
      flex flex-col gap-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="rounded-full  text-gray-200 h-24 w-24 flex justify-center items-center">
            <IconCircleLetterB size={96} />
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-widest text-white/60">
                  {section.title}
                </span>
                <IconArrowRight size={16} className="text-white/40" />
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/80 hover:text-white transition duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 text-gray-200">
          <IconBrandFacebook />
          <IconBrandTwitter />
          <IconBrandInstagram />
        </div>
        <p className="text-center w-full text-xs text-zinc-700 p-4 border-t border-gray-700/20">
          © Biz {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

// export default function NeonFooter() {
//   return (
//     <footer className="relative z-10 w-full bg-black/80 backdrop-blur-md border-t border-white/10 text-white">
//       {/* Glow Background */}
//       <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-400/20 blur-3xl opacity-60 pointer-events-none z-0" />

//       {/* Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
//         {sections.map((section) => (
//           <div key={section.title}>
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-xs font-bold tracking-widest text-white/60">
//                 {section.title}
//               </span>
//               <IconArrowRight size={16} className="text-white/40" />
//             </div>
//             <ul className="space-y-2">
//               {section.links.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-sm text-white/80 hover:text-white transition duration-150"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// }
