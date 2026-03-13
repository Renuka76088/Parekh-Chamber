import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, Clock, Send, 
  MapPin, ShieldCheck, Globe, 
  Navigation, ChevronRight
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#2D1B0D]">
      
      {/* --- SECTION 1: OFFICIAL HERO --- */}
      <section className="bg-[#3E2723] text-white py-24 px-8 border-b-8 border-[#A67B5B]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#A67B5B] font-bold uppercase tracking-[0.4em] mb-4 block text-sm">
              Official Correspondence
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Parekh Chamber <br/> 
              <span className="text-[#A67B5B] italic font-light">Contact Gateway</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto font-light leading-relaxed">
              Assisting textile manufacturers, exporters, and traders with dedicated administrative support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: ALIGNED QUICK CONTACT (No Overlap) --- */}
      <section className="py-0 px-0 bg-white border-b border-[#D7CCC8]">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-0 border-b border-[#D7CCC8]">
            {[
              { icon: <Phone />, title: "Head Office Line", detail: "+91 731 404 0000", sub: "10:00 AM - 07:00 PM" },
              { icon: <Mail />, title: "Chamber Email", detail: "admin@parekhchamber.com", sub: "Official Inquiries Only" },
              { icon: <Clock />, title: "Visiting Hours", detail: "Mon - Sat", sub: "Prior Appointment Recommended" }
            ].map((card, i) => (
              <div key={i} className="p-16 border-r last:border-r-0 border-[#D7CCC8] flex flex-col items-center text-center hover:bg-[#FAF9F6] transition-colors">
                <div className="text-[#8B4513] mb-6 p-4 bg-[#F4ECE1] rounded-full">{card.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#A67B5B] mb-2">{card.title}</h3>
                <p className="text-2xl font-bold text-[#3E2723] mb-2 tracking-tight">{card.detail}</p>
                <p className="text-sm text-[#6D4C41] font-medium">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: EMBEDDED MAP (BIG & CLEAR) --- */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3E2723]">Locate the Chamber</h2>
              <p className="text-lg text-[#A67B5B] font-bold mt-2">118, Regus AB Road, Indore, MP 452001</p>
            </div>
            <button className="hidden md:flex items-center gap-3 bg-[#3E2723] text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-[#8B4513] transition-colors">
              <Navigation size={18}/> Get Directions
            </button>
          </div>

          <div className="w-full h-[500px] border-8 border-[#F4ECE1] shadow-2xl relative overflow-hidden bg-gray-200">
            {/* GOOGLE MAP IFRAME START */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.890000!3d22.750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiA3NcKwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
              className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-125 opacity-80"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* GOOGLE MAP IFRAME END */}
            
            {/* Overlay for Branding */}
            <div className="absolute top-6 left-6 bg-[#3E2723] text-white p-6 shadow-2xl border-l-4 border-[#A67B5B]">
               <h4 className="font-bold text-xl mb-1">Parekh Chamber HQ</h4>
               <p className="text-sm opacity-80">Indore, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: ALIGNED FORM --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Form Side */}
          <div className="bg-white p-12 shadow-[20px_20px_0px_0px_rgba(166,123,91,0.1)] border border-[#D7CCC8]">
            <h2 className="text-4xl font-serif font-bold text-[#3E2723] mb-10">Administrative Inquiry</h2>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#A67B5B]">Contact Name</label>
                  <input type="text" className="w-full p-5 bg-[#FAF9F6] border border-[#D7CCC8] focus:border-[#8B4513] outline-none transition-all text-lg font-medium" placeholder="Ex: S.K. Parekh" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#A67B5B]">Phone Number</label>
                  <input type="text" className="w-full p-5 bg-[#FAF9F6] border border-[#D7CCC8] focus:border-[#8B4513] outline-none transition-all text-lg font-medium" placeholder="91-00000-00000" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-[#A67B5B]">Inquiry Department</label>
                <select className="w-full p-5 bg-[#FAF9F6] border border-[#D7CCC8] focus:border-[#8B4513] outline-none text-lg font-medium appearance-none">
                  <option>New Membership Registration</option>
                  <option>Export & Trade Disputes</option>
                  <option>Technical Upgradation Support</option>
                  <option>General Administration</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-[#A67B5B]">Detailed Message</label>
                <textarea rows="5" className="w-full p-5 bg-[#FAF9F6] border border-[#D7CCC8] focus:border-[#8B4513] outline-none text-lg font-medium resize-none" placeholder="Briefly describe your business requirement..."></textarea>
              </div>

              <button className="w-full bg-[#3E2723] text-white py-6 text-xl font-bold uppercase tracking-widest hover:bg-[#8B4513] transition-all flex items-center justify-center gap-4 group">
                Send Correspondence <Send size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Regional & Trust Side */}
          <div className="py-6">
            <h2 className="text-4xl font-serif font-bold text-[#3E2723] mb-12">Chamber Secretariat</h2>
            <div className="space-y-16">
              {[
                { city: "Indore (Main Office)", address: "118, Regus AB Road, Indore, MP 452001", phone: "0731-404XXXX" },
                { city: "Mumbai Branch", address: "Textile Market, BKC, Mumbai 400051", phone: "022-265XXXX" }
              ].map((office, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 w-16 h-16 bg-[#F4ECE1] text-[#8B4513] flex items-center justify-center rounded-none border border-[#D7CCC8]">
                    <MapPin size={32}/>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#3E2723] mb-2 uppercase tracking-tight">{office.city}</h4>
                    <p className="text-xl text-[#6D4C41] font-light mb-2 leading-relaxed">{office.address}</p>
                    <p className="text-[#8B4513] font-bold text-lg">Ph: {office.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 bg-[#3E2723] text-[#D7CCC8] relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-4">
                <ShieldCheck className="text-[#A67B5B]" size={48}/>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Member Privacy Protocol</h4>
                <p className="text-lg leading-relaxed opacity-80">
                  All shared data is strictly used for textile chamber operations as per the 2026 Digital Data Act.
                </p>
              </div>
              <Globe className="absolute -bottom-10 -right-10 text-white/5" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: MINIMAL FOOTER --- */}
      <footer className="bg-[#1B120B] text-[#A67B5B] py-12 px-8 text-center border-t border-white/10">
        <p className="text-sm tracking-[0.5em] font-bold uppercase">Parekh Chamber of Textile • Official Helpdesk</p>
      </footer>

    </div>
  );
};

export default ContactPage;