import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Search, ArrowUpRight, Clock, 
  Filter, Newspaper, Cpu, Globe, Factory,
  ChevronRight, Calendar, Bookmark
} from "lucide-react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Insights", icon: <Newspaper size={18}/> },
    { id: "Manufacturing", label: "Modern Manufacturing", icon: <Factory size={18}/> },
    { id: "Technology", label: "Digital Tech", icon: <Cpu size={18}/> },
    { id: "Global Trade", label: "Export & Global", icon: <Globe size={18}/> },
  ];

  const allBlogs = [
    {
      id: 1,
      category: "Manufacturing",
      title: "Sustainability in Weaving: The 2026 Roadmap",
      desc: "How traditional Indian looms are adopting solar power to reduce operational costs by 40%.",
      author: "Robert Parekh",
      date: "Mar 12, 2026",
      read: "5 min",
      img: "https://media.istockphoto.com/id/1851837825/photo/a-woman-works-on-an-industrial-loom.webp?a=1&b=1&s=612x612&w=0&k=20&c=5N6D1UchhOrBRKty7GlMdPUIkkxA2qsqWgy1B0dKoPo="
    },
    {
      id: 2,
      category: "Technology",
      title: "AI in Fabric Inspection: Zero Defect Goal",
      desc: "Integrating computer vision into the dyeing process to ensure 100% color consistency.",
      author: "Admin",
      date: "Mar 10, 2026",
      read: "8 min",
      img: "https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      category: "Global Trade",
      title: "New Export Hubs: Why Vietnam is Watching India",
      desc: "Strategic analysis of the shifting supply chain and India's competitive edge in 2026.",
      author: "Global Desk",
      date: "Mar 05, 2026",
      read: "12 min",
      img: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      category: "Manufacturing",
      title: "The Renaissance of Hand-Spun Khadi",
      desc: "How luxury brands are returning to the roots of Indian textile for high-end fashion lines.",
      author: "S. K. Verma",
      date: "Feb 28, 2026",
      read: "6 min",
      img: "https://media.istockphoto.com/id/1446459501/photo/young-man-working-in-a-block-printing-factory-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=6qpSGpvuscPEznjgTvwi1UcuFqIxmbKONsrxKncvVwM="
    }
  ];

  // Filtering Logic
  const filteredBlogs = activeCategory === "All" 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-serif text-[#2D1B0D]">
      
      {/* --- HERO: EDITORIAL HEADER --- */}
      <section className="pt-24 pb-16 px-8 border-b-4 border-[#3E2723] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#A67B5B] font-bold uppercase tracking-widest text-sm mb-4">
               <span className="w-12 h-[2px] bg-[#A67B5B]"></span> The Chamber Journal
            </div>
            <h1 className="text-7xl font-bold text-[#3E2723] leading-none mb-6">
              Industry <span className="text-[#8B4513] italic font-light">Intelligence.</span>
            </h1>
            <p className="text-2xl text-[#6D4C41] font-light leading-relaxed">
              Decoding the complexities of the textile industry through expert research and verified data.
            </p>
          </div>
          <div className="hidden lg:block bg-[#F4ECE1] p-8 border-l-8 border-[#8B4513] w-80">
            <h4 className="font-bold text-sm uppercase mb-2">Today's Highlight</h4>
            <p className="italic text-lg">"Global cotton prices expected to stabilize by Q3 2026."</p>
          </div>
        </div>
      </section>

      {/* --- FUNCTIONAL NAVIGATION & FILTERING --- */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-[#D7CCC8]">
        <div className="max-w-7xl mx-auto px-8 flex overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-10 py-6 text-lg font-bold transition-all whitespace-nowrap border-b-4 ${
                activeCategory === cat.id 
                ? "border-[#8B4513] text-[#8B4513] bg-[#FDF5E6]" 
                : "border-transparent text-[#A67B5B] hover:text-[#3E2723]"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-20">
        
        {/* --- DYNAMIC BLOG GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={blog.id}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-xl border border-[#D7CCC8]">
                  <img 
                    src={blog.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    alt={blog.title}
                  />
                  <div className="absolute top-0 right-0 bg-white/90 backdrop-blur p-4 text-[#8B4513] font-bold text-sm tracking-widest uppercase">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-[#A67B5B] text-sm font-sans font-bold mb-4 uppercase">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {blog.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {blog.read} Read</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#3E2723] mb-4 leading-tight group-hover:underline decoration-[#8B4513] underline-offset-8">
                    {blog.title}
                  </h3>
                  <p className="text-xl text-[#6D4C41] font-light leading-relaxed mb-8">
                    {blog.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="flex justify-between items-center pt-6 border-t border-[#D7CCC8]">
                   <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#3E2723] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-sm font-bold tracking-wider">{blog.author}</span>
                   </div>
                   <button className="flex items-center gap-2 font-bold text-[#8B4513] hover:translate-x-2 transition-transform">
                     Read More <ArrowUpRight size={20}/>
                   </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* --- EMPTY STATE (If no results) --- */}
        {filteredBlogs.length === 0 && (
          <div className="py-40 text-center">
            <BookOpen size={80} className="mx-auto text-[#D7CCC8] mb-6 opacity-40" />
            <h3 className="text-3xl font-bold text-[#3E2723]">No Articles Found</h3>
            <p className="text-xl text-[#A67B5B]">Try switching to a different category.</p>
          </div>
        )}

        {/* --- PROFESSIONAL NEWSLETTER --- */}
        <section className="mt-40 bg-[#3E2723] text-white p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl">
           <div className="relative z-10 lg:max-w-2xl text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
              <p className="text-2xl text-[#D7CCC8] font-light mb-10 leading-relaxed">
                Join our premium list of 5,000+ textile leaders to receive monthly market forecasts and policy whitepapers.
              </p>
           </div>
           <div className="relative z-10 w-full lg:w-96">
              <div className="bg-white/10 p-2 flex flex-col gap-4 border border-white/20">
                <input 
                  type="email" 
                  placeholder="Official Email Address" 
                  className="w-full p-5 bg-white text-[#3E2723] text-lg font-bold outline-none"
                />
                <button className="w-full bg-[#8B4513] text-white py-5 font-bold uppercase tracking-widest hover:bg-[#A67B5B] transition-all">
                  Join The Inner Circle
                </button>
              </div>
           </div>
           {/* Textile Pattern Overlay */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cross-stitch.png')` }} />
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1B120B] py-16 px-8 text-center">
         <div className="flex justify-center gap-12 mb-8 opacity-40">
            <Bookmark /> <Newspaper /> <BookOpen />
         </div>
         <p className="text-sm tracking-[0.4em] uppercase text-[#A67B5B] font-bold">
            Verified Educational Content • Parekh Chamber • 2026
         </p>
      </footer>

    </div>
  );
};

export default BlogPage;