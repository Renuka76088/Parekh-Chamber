import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon, Info, Phone, Briefcase, Settings, FileSearch, 
  FileEdit, Gavel, ShieldCheck, UserPlus, Newspaper, BookOpen, 
  CalendarCheck, Bell, Image as ImageIcon, Map, MessageSquare, 
  Navigation, Share2, Search
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // All Services Data
  const services = [
    { id: "Home", label: "Home", icon: <HomeIcon size={20}/>, content: <HomeView /> },
    { id: "About", label: "About Us", icon: <Info size={20}/>, content: <SimpleText title="About Our Legacy" text="Parekh Chamber of Textile has been the backbone of the industry for over 30 years, bridging the gap between traditional weavers and global markets." /> },
    { id: "Auction", label: "e-Auction", icon: <Gavel size={20}/>, content: <FormPlaceholder title="e-Auction (e-Form)" desc="Participate in transparent digital textile auctions. Fill the form below to register your bid." /> },
    { id: "Quotation", label: "e-Quotation", icon: <FileEdit size={20}/>, content: <FormPlaceholder title="e-Quotation (e-Form)" desc="Submit and manage trade quotes online for bulk orders." /> },
    { id: "Enquiry", label: "Trade Enquiry", icon: <Search size={20}/>, content: <FormPlaceholder title="Trade Enquiry (e-Form)" desc="Get global textile trade leads and enquiries directly in your inbox." /> },
    { id: "Tender", label: "Tender & Contract", icon: <ShieldCheck size={20}/>, content: <SimpleText title="Official Tenders" text="View latest government and private textile contracts available for bidding." /> },
    { id: "ChamberService", label: "Chamber Service", icon: <Briefcase size={20}/>, content: <SimpleText title="Our Chamber Services" text="We provide Certification of Origin, trade counseling, and legal advisory for all members." /> },
    { id: "ChamberMgmt", label: "Chamber Management", icon: <Settings size={20}/>, content: <SimpleText title="Management Support" text="Dedicated administrative support to help you manage your textile business operations." /> },
    { id: "Appointment", label: "Appointment", icon: <CalendarCheck size={20}/>, content: <FormPlaceholder title="Visit with Appointment" desc="Pre-book your physical meeting with our chamber officials." /> },
    { id: "Notice", label: "Notice Board", icon: <Bell size={20}/>, content: <SimpleList title="Notice Board" items={["New GST Norms for Fabric", "Annual General Meeting 2026", "Export Subsidy Updates"]} /> },
    { id: "Circular", label: "Circulars & Blog", icon: <BookOpen size={20}/>, content: <SimpleList title="Circulars & Industry Insights" items={["March 2026 Export Policy", "Sustainable Weaving Trends", "Market Analysis Report"]} /> },
    { id: "Gallery", label: "Media Gallery", icon: <ImageIcon size={20}/>, content: <MediaGallery /> },
    { id: "Career", label: "Career Page", icon: <UserPlus size={20}/>, content: <SimpleText title="Careers in Textile" text="Find specialized talent or apply for roles within the leading textile firms of India." /> },
    { id: "Contact", label: "Contact Us", icon: <Phone size={20}/>, content: <ContactView /> },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-serif text-[#2D1B0D]">
      
      {/* --- TOP HEADER --- */}
      <div className="bg-[#3E2723] text-[#D7CCC8] py-3 px-8 flex justify-between items-center border-b border-[#A67B5B]">
        <div className="text-sm font-sans tracking-widest uppercase">Official Chamber Portal • 2026</div>
        <div className="flex gap-6 text-sm">
          <span className="flex items-center gap-2"><Phone size={14}/> Support: +91 XXXXX XXXXX</span>
        </div>
      </div>

      {/* --- BANNER --- */}
      <section className="relative h-[350px] bg-[#4B3621] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30 grayscale">
          <img src="https://images.unsplash.com/photo-1524292332623-3a5aae4d1e09?q=80&w=2000" className="w-full h-full object-cover" alt="Banner" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">PAREKH CHAMBER OF TEXTILE</h1>
          <p className="text-xl text-[#D7CCC8] max-w-2xl mx-auto italic">Tradition of Quality, Trust of Generations.</p>
        </div>
      </section>

      {/* --- FIXED NAVIGATION STRIP --- */}
      <div className="sticky top-0 z-50 bg-white shadow-xl border-b border-[#D7CCC8]">
        <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar">
          <div className="flex whitespace-nowrap py-1">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-3 px-8 py-5 text-lg font-semibold transition-all border-b-4 ${
                  activeTab === s.id 
                  ? "border-[#8B4513] text-[#8B4513] bg-[#FDF5E6]" 
                  : "border-transparent text-[#6D4C41] hover:bg-slate-50"
                }`}
              >
                <span className={activeTab === s.id ? "text-[#8B4513]" : "text-[#A67B5B]"}>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- DYNAMIC CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-8 py-16 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {services.find(s => s.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1B120B] text-[#D7CCC8] py-12 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Parekh Chamber</h4>
            <p className="opacity-70 leading-relaxed text-lg">Empowering India's textile heritage with modern trade tools.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Contact</h4>
            <p className="text-lg">info@parekhchamber.com</p>
            <p className="text-lg">+91 XXXXX XXXXX</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-4 mb-4 text-[#A67B5B]">
              <Share2 /> <Navigation /> <Map />
            </div>
            <p className="text-sm opacity-50">© 2026 | Mobile Responsive | SEO Friendly</p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP --- */}
      <div className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl cursor-pointer text-white">
        <MessageSquare size={30} fill="currentColor" />
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS FOR PAGES ---

function HomeView() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6 text-[#3E2723]">Welcome to the Member Portal</h2>
        <p className="text-xl leading-relaxed text-[#6D4C41] mb-8">
          Use the navigation bar above to access our various e-forms, trade enquiries, and circulars. 
          This portal is designed for ease of use for all our senior members.
        </p>
        <div className="bg-[#EFEBE9] p-6 border-l-8 border-[#A67B5B]">
          <h4 className="font-bold text-[#3E2723]">Today's Notice:</h4>
          <p className="italic underline">Annual General Meeting scheduled for April 5th, 2026.</p>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1558273109-8077b84aa0f9?q=80&w=800" className="rounded-sm shadow-2xl" alt="Loom" />
    </div>
  );
}

function MediaGallery() {
  const photos = [
    "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
    "https://images.unsplash.com/photo-1524292332623-3a5aae4d1e09",
    "https://images.unsplash.com/photo-1528469133791-9b0582ae79f2",
    "https://images.unsplash.com/photo-1558273109-8077b84aa0f9",
    "https://images.unsplash.com/photo-1444491741275-3747c53c99b4",
    "https://images.unsplash.com/photo-1544441893-675973e31985"
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Chamber & Textile Heritage Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((url, i) => (
          <div key={i} className="group overflow-hidden bg-slate-200 aspect-video rounded-sm shadow-md">
            <img src={`${url}?q=80&w=600`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactView() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">Reach Our Office</h2>
        <div className="space-y-6 text-xl text-[#5D4037]">
          <p className="flex gap-4 items-center"><MapPin className="text-[#A67B5B]" /> Textile Center, MG Road, Bengaluru</p>
          <p className="flex gap-4 items-center"><Phone className="text-[#A67B5B]" /> 080-2234XXXX</p>
          <p className="flex gap-4 items-center"><Mail className="text-[#A67B5B]" /> support@parekhchamber.com</p>
        </div>
        <div className="mt-10 h-64 bg-[#EFEBE9] flex items-center justify-center text-[#A67B5B] border border-[#D7CCC8]">
          <Map size={40} className="mr-4" /> Google Map View Integration
        </div>
      </div>
      <div className="bg-white p-8 shadow-xl border border-[#D7CCC8]">
        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#FAF9F6] border border-[#D7CCC8] text-lg outline-none" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#FAF9F6] border border-[#D7CCC8] text-lg outline-none" />
          <textarea placeholder="Message" className="w-full p-4 bg-[#FAF9F6] border border-[#D7CCC8] text-lg h-32 outline-none"></textarea>
          <button className="bg-[#4B3621] text-white px-8 py-3 text-lg font-bold">Submit Enquiry</button>
        </div>
      </div>
    </div>
  );
}

function FormPlaceholder({ title, desc }) {
  return (
    <div className="max-w-2xl bg-white p-10 shadow-2xl border-t-8 border-[#8B4513]">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-[#6D4C41] mb-8">{desc}</p>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-bold text-sm uppercase">Member Name</label>
            <input type="text" className="w-full p-4 border border-[#D7CCC8] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="font-bold text-sm uppercase">Membership No.</label>
            <input type="text" className="w-full p-4 border border-[#D7CCC8] outline-none" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-bold text-sm uppercase">Subject</label>
          <input type="text" className="w-full p-4 border border-[#D7CCC8] outline-none" />
        </div>
        <button className="w-full bg-[#8B4513] text-white py-4 text-xl font-bold hover:bg-[#3E2723]">Submit Digital Form</button>
      </div>
    </div>
  );
}

function SimpleText({ title, text }) {
  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-bold mb-6 text-[#3E2723]">{title}</h2>
      <p className="text-2xl leading-relaxed text-[#5D4037]">{text}</p>
    </div>
  );
}

function SimpleList({ title, items }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 border-l-4 border-[#A67B5B] shadow-sm flex justify-between items-center group cursor-pointer hover:bg-[#FDF5E6]">
            <span className="text-xl font-medium">{item}</span>
            <FileSearch className="text-[#A67B5B] group-hover:scale-125 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MapPin = ({ className }) => <MapPinIcon className={className} />;
import { MapPin as MapPinIcon } from "lucide-react";

export default About;