import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight, ArrowRight, BarChart3 } from "lucide-react";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryData = [
    {
      id: "01",
      title: "INDORE TEXTILE EXPO",
      tag: "CORE EXHIBITION",
      year: "2026",
      image: "https://images.unsplash.com/photo-1558444454-574517600790?w=1200&q=80",
      desc: "The premier platform for textile innovation, showcasing MP's manufacturing strength to global buyers."
    },
    {
      id: "02",
      title: "GLOBAL TRADE SUMMIT",
      tag: "INTERNATIONAL",
      year: "2026",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
      desc: "Strategic leadership summit connecting Indian manufacturers with European and US export councils."
    },
    {
      id: "03",
      title: "TECH-LOOM WORKSHOP",
      tag: "DIGITAL TRANSFORMATION",
      year: "2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
      desc: "Upskilling our members with the latest in AI-driven weaving technology and automated quality control."
    },
    {
      id: "04",
      title: "SUSTAINABLE FABRIC MEET",
      tag: "RESEARCH & DEV",
      year: "2025",
      image: "https://images.unsplash.com/photo-1524292332709-b33366a7f145?w=1200&q=80",
      desc: "Focusing on organic cotton processing and zero-waste manufacturing for a greener future."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#2D1B0D] font-sans">
      
      {/* --- TOP HEADER --- */}
      <div className="flex flex-col md:flex-row border-b-2 border-[#D7CCC8]">
        <div className="p-10 md:w-2/3 border-r-2 border-[#D7CCC8]">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#A67B5B]"></span>
            <span className="text-[#A67B5B] uppercase tracking-[0.4em] font-bold text-sm">Media Archives</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-[#1A1A1A]">
            THE JOURNAL <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #2D1B0D" }}>OF EXCELLENCE</span>
          </h1>
        </div>
        <div className="p-10 md:w-1/3 flex flex-col justify-end bg-[#F4ECE1]">
          <p className="text-xl text-[#5D4037] font-medium leading-relaxed mb-6">
            Documenting the milestones of Parekh Chamber since 1985. Every frame tells a story of growth.
          </p>
          <div className="flex items-center gap-2 text-[#8B4513] font-bold">
            <BarChart3 size={20} />
            <span className="uppercase tracking-widest text-xs">2.5k Members Represented</span>
          </div>
        </div>
      </div>

      {/* --- SHARP GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[600px]">
        {galleryData.map((item, idx) => (
          <div 
            key={item.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedItem(item)}
            className="relative group border-r-2 border-b-2 border-[#D7CCC8] cursor-pointer overflow-hidden bg-[#FDFDFC]"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  hoveredIndex === idx ? "scale-105 opacity-100" : "scale-100 opacity-60"
                }`}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-5xl font-black text-[#D7CCC8] group-hover:text-[#A67B5B]/50 transition-colors uppercase tracking-tighter">
                  {item.id}
                </span>
                <div className="bg-[#D7CCC8] p-3 group-hover:bg-[#A67B5B] transition-colors">
                  <Plus className="text-white" size={24} />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#A67B5B] uppercase block mb-2">
                  {item.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black leading-tight uppercase tracking-tighter text-[#1A1A1A] group-hover:mb-4 transition-all">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col md:flex-row overflow-y-auto"
          >
            <div className="md:w-3/5 h-[40vh] md:h-full relative border-r-2 border-[#D7CCC8]">
              <img src={selectedItem.image} className="w-full h-full object-cover" alt="" />
              <button onClick={() => setSelectedItem(null)} className="absolute top-10 left-10 bg-[#2D1B0D] text-white p-5 hover:bg-[#A67B5B] transition-all">
                <X size={30} />
              </button>
            </div>
            <div className="md:w-2/5 p-12 md:p-24 flex flex-col justify-center">
              <span className="text-[#A67B5B] text-sm font-bold tracking-[0.3em] mb-6 uppercase">{selectedItem.tag} // {selectedItem.year}</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 text-[#1A1A1A]">{selectedItem.title}</h2>
              <p className="text-2xl text-[#5D4037] font-medium leading-relaxed mb-12 border-l-4 border-[#A67B5B] pl-8">{selectedItem.desc}</p>
              <button className="bg-[#2D1B0D] text-white px-12 py-6 text-xl font-black uppercase tracking-widest flex justify-between items-center hover:bg-[#A67B5B] transition-all">
                Access Report <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <div className="p-10 flex justify-between items-center border-t-2 border-[#D7CCC8] text-[#8B4513] text-xs font-bold tracking-[0.4em] uppercase">
        <span>Archive Source: PC-A26</span>
        <span>Indore Textile Governance</span>
      </div>
    </div>
  );
};

export default Gallery;