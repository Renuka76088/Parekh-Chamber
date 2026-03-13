import React from "react";
import { motion } from "framer-motion";
import {
  Globe, Phone, Mail, MapPin, Users, FileText, Briefcase,
  Image as ImageIcon, MessageCircle, Calendar, Gavel, 
  Map, Bell, Search, LayoutGrid, Newspaper, HeartHandshake,
  ShieldCheck, Headset, Share2, MousePointerClick, ChevronRight
} from "lucide-react";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer";

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ backgroundColor: "#F5F5DC" }}
    whileTap={{ scale: 0.98 }}
    className="flex gap-4 md:gap-5 p-5 md:p-6 border-b border-[#D7CCC8] sm:border-r bg-white transition-all cursor-pointer group"
  >
    <div className="text-[#8B4513] group-hover:scale-110 transition-transform duration-300 shrink-0">
      {React.cloneElement(icon, { size: 28 })}
    </div>

    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-semibold text-[#3E2723] mb-1 flex justify-between items-center">
        {title}
        <ChevronRight size={16} className="text-[#A67B5B] md:hidden" />
      </h3>

      <p className="text-sm text-[#6D4C41] leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Home = () => {
  return (
    <>
    
    <PageHeader/>
    <div className="bg-[#FAF9F6] text-[#2D1B0D] font-sans overflow-x-hidden selection:bg-[#E0C9A6]">
      
      {/* HERO */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center overflow-hidden">
        
        <img 
          src="https://images.unsplash.com/photo-1581096698025-df9c0eca9eab?w=1200&auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Textile Texture"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 md:via-[#FAF9F6]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          
          {/* FIXED TEXT ALIGNMENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#3E2723] leading-tight mb-6">
              Gateway to Global
              <br />
              <span className="text-[#8B4513] font-semibold">
                Textile Opportunities
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#5D4037] mb-8 leading-relaxed">
              Supporting Indian manufacturers and traders with advanced trade facilitation and chamber management services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5D4037] text-white px-8 py-4 text-lg font-semibold rounded-sm shadow-xl hover:bg-[#3E2723] transition-all">
                Join the Chamber
              </button>

              <button className="border-2 border-[#5D4037] text-[#5D4037] px-8 py-4 text-lg font-semibold rounded-sm hover:bg-white transition-all">
                Our Associates
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* SERVICES HUB */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b-2 border-[#D7CCC8] pb-6 gap-4">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723]">
              Digital Member Portal
            </h2>

            <p className="text-[#8B4513] text-lg mt-1">
              Organized tools for textile growth
            </p>
          </div>

          <span className="text-[#A67B5B] font-semibold flex items-center gap-2 text-sm">
            <MousePointerClick size={18}/> Click to open e-form
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#D7CCC8] shadow-sm">
          
          <FeatureCard icon={<Gavel/>} title="e-Auction" desc="Participate in transparent digital textile auctions." />
          <FeatureCard icon={<FileText/>} title="e-Quotation" desc="Submit and manage trade quotes online." />
          <FeatureCard icon={<Search/>} title="Trade Enquiry" desc="Get global textile trade leads and enquiries." />
          
          <FeatureCard icon={<ShieldCheck/>} title="Tender & Contract" desc="View and apply for official textile industry tenders." />
          <FeatureCard icon={<Briefcase/>} title="Chamber Service" desc="Certification, trade counseling, and advisory." />
          <FeatureCard icon={<LayoutGrid/>} title="Management" desc="Dedicated administrative support for your business." />

          <FeatureCard icon={<Calendar/>} title="Appointment" desc="Pre-book your physical meeting with officials." />
          <FeatureCard icon={<Bell/>} title="Notice Board" desc="Real-time alerts on policy changes and news." />
          <FeatureCard icon={<Newspaper/>} title="Circulars & Blog" desc="Official documents, newsletters, and insights." />

          <FeatureCard icon={<ImageIcon/>} title="Media Gallery" desc="Visual journey of our events and exhibitions." />
          <FeatureCard icon={<Users/>} title="Career Page" desc="Find specialized talent for the industry." />
          <FeatureCard icon={<Headset/>} title="Live Support" desc="Instant assistance for member queries." />

        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] cursor-pointer"
        >
          <MessageCircle size={30} fill="white" />
        </motion.div>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Home;
