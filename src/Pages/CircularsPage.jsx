import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, FileText, Download, Calendar, 
  Filter, ChevronRight, Bell, Mail, 
  ExternalLink, ArrowDownToLine, BookOpen
} from "lucide-react";

const CircularsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const circulars = [
    { id: "PC/2026/08", date: "March 10, 2026", title: "New Export Incentive Scheme for Cotton Textiles", category: "Policy", priority: "High" },
    { id: "PC/2026/07", date: "March 05, 2026", title: "Amendment in GST Rates for Man-made Fibers", category: "Taxation", priority: "Medium" },
    { id: "PC/2026/06", date: "Feb 28, 2026", title: "Annual General Meeting - Notice & Agenda", category: "Chamber News", priority: "High" },
    { id: "PC/2026/05", date: "Feb 22, 2026", title: "Revised Standards for Sustainable Weaving", category: "Guidelines", priority: "Low" },
    { id: "PC/2026/04", date: "Feb 15, 2026", title: "Trade Fair Opportunity: Milan Textile Expo", category: "Events", priority: "Medium" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-serif text-[#2D1B0D]">
      
      {/* --- PAGE HEADER --- */}
      <section className="bg-[#3E2723] text-[#D7CCC8] py-20 px-8 text-center border-b-8 border-[#A67B5B]">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Official Circulars & Notifications
          </motion.h1>
          <p className="text-xl opacity-80 leading-relaxed font-light">
            Stay updated with the latest policy changes, trade circulars, and industry notifications 
            issued by the Parekh Chamber of Textile.
          </p>
        </div>
      </section>

      {/* --- SEARCH & FILTER STRIP --- */}
      <section className="sticky top-0 z-30 bg-white shadow-lg border-b border-[#D7CCC8]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A67B5B]" />
            <input 
              type="text" 
              placeholder="Search by Circular Number or Keywords..."
              className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border border-[#D7CCC8] text-lg focus:border-[#8B4513] outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 px-6 py-4 bg-[#EFEBE9] border border-[#D7CCC8] font-bold text-[#3E2723] hover:bg-[#D7CCC8] transition">
              <Filter size={20}/> Filter Category
            </button>
            <button className="flex items-center gap-2 px-6 py-4 bg-[#8B4513] text-white font-bold hover:bg-[#3E2723] transition">
              <Bell size={20}/> Get Alerts
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-16">
        
        {/* --- MUST READ / FEATURED CIRCULAR --- */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-sans font-bold text-[#A67B5B] mb-6">Latest Important Notification</h2>
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white border-l-[12px] border-[#8B4513] p-10 shadow-2xl flex flex-col md:flex-row gap-10 items-center justify-between"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#8B4513] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Priority: High</span>
                <span className="text-[#A67B5B] font-bold">Ref: PC/2026/09</span>
              </div>
              <h3 className="text-3xl font-bold text-[#3E2723] mb-4">Implementation of Quality Control Orders for Technical Textiles 2026</h3>
              <p className="text-xl text-[#6D4C41] leading-relaxed mb-6">
                Important guidelines for all members regarding the mandatory certification of technical textile products as per the new government regulations.
              </p>
              <div className="flex gap-6">
                <button className="flex items-center gap-2 font-bold text-[#8B4513] text-lg underline underline-offset-8">
                  Read Full Document <ChevronRight size={18}/>
                </button>
              </div>
            </div>
            <div className="shrink-0">
               <button className="w-24 h-24 rounded-full bg-[#FAF9F6] border-2 border-dashed border-[#A67B5B] flex flex-col items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all">
                  <ArrowDownToLine size={30} />
                  <span className="text-[10px] font-bold mt-1 uppercase">PDF</span>
               </button>
            </div>
          </motion.div>
        </div>

        {/* --- CIRCULAR LIST AREA --- */}
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] font-sans font-bold text-[#A67B5B] mb-6">Archived Circulars</h2>
          
          <div className="bg-white border border-[#D7CCC8]">
            {/* Table Header - Only visible on desktop */}
            <div className="hidden md:grid grid-cols-6 gap-4 p-6 bg-[#EFEBE9] border-b border-[#D7CCC8] font-bold uppercase text-xs tracking-widest text-[#5D4037]">
              <div className="col-span-1">Ref. Number</div>
              <div className="col-span-1">Issue Date</div>
              <div className="col-span-2">Subject Title</div>
              <div className="col-span-1 text-center">Category</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* List Rows */}
            {circulars.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "#FDFBF7" }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 p-8 border-b border-[#D7CCC8] last:border-0 items-center"
              >
                <div className="col-span-1 font-bold font-sans text-[#A67B5B]">{item.id}</div>
                <div className="col-span-1 flex items-center gap-2 text-[#6D4C41]">
                   <Calendar size={16}/> {item.date}
                </div>
                <div className="col-span-1 md:col-span-2">
                   <h4 className="text-xl font-bold text-[#3E2723] group-hover:text-[#8B4513]">{item.title}</h4>
                </div>
                <div className="col-span-1 text-center">
                   <span className="inline-block px-4 py-1 rounded-full bg-[#EFEBE9] text-[#5D4037] text-sm font-bold">
                     {item.category}
                   </span>
                </div>
                <div className="col-span-1 flex justify-end gap-4">
                   <button title="View Online" className="p-3 bg-white border border-[#D7CCC8] text-[#A67B5B] hover:text-[#8B4513] transition shadow-sm">
                      <BookOpen size={20}/>
                   </button>
                   <button title="Download PDF" className="p-3 bg-[#3E2723] text-white hover:bg-[#8B4513] transition shadow-md">
                      <Download size={20}/>
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SUBSCRIPTION FOOTER --- */}
        <section className="mt-24 bg-[#EFEBE9] p-12 border-t-4 border-[#8B4513] text-center">
           <h3 className="text-3xl font-bold text-[#3E2723] mb-4">Never Miss an Official Update</h3>
           <p className="text-xl text-[#6D4C41] mb-8 max-w-2xl mx-auto">
             Enter your email or mobile number to receive instant notifications of new circulars directly on your phone.
           </p>
           <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter Email / Membership No." 
                className="flex-1 px-6 py-4 border border-[#D7CCC8] outline-none text-lg" 
              />
              <button className="bg-[#8B4513] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#3E2723] transition shadow-xl">
                Subscribe
              </button>
           </div>
        </section>

      </main>

      {/* --- QUICK CONTACT FOOTER --- */}
      <footer className="bg-[#1B120B] text-[#D7CCC8] py-8 text-center border-t border-white/10">
         <p className="text-sm opacity-50 tracking-widest uppercase">Official Communication Portal • 2026 • Secure & Verified</p>
      </footer>

    </div>
  );
};

export default CircularsPage;