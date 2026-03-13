import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import SidebarLayout from "./SidebarLayout";
import Navbar from "./Navbar";

const Home3 = () => {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden">
      {/* Navbar is already w-full inside its own component */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1636986056375-184676d8ca14?w=1200"
          className="absolute w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-[#0b2a44]/75"></div>

        {/* Content Wrapper - Must match SidebarLayout's max-w-7xl and px-6 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <motion.p className="uppercase tracking-[0.2em] text-orange-400 mb-2 text-xs font-bold">
              Textile • Fabric • Manufacturing
            </motion.p>
            <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Textile<br />Manufacturing
            </motion.h1>
            <motion.p className="mt-4 text-gray-200 text-base md:text-lg">
              Delivering high quality fabrics and innovative textile solutions globally.
            </motion.p>
            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-8 py-3 font-bold text-sm uppercase">Explore</button>
              <button className="border-2 border-white px-8 py-3 font-bold text-sm uppercase">Contact</button>
            </div>
          </div>
        </div>
      </section>

      {/* SIDEBAR LAYOUT - Iska wrapper ab Hero ke content se perfect align hoga */}
      <SidebarLayout />
      
      {/* Extra space bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home3;
