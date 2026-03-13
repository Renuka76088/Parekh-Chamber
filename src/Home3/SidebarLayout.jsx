import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const menuItems = [
  "Home", "About Us", "Contact Us", "Our Chamber Service", "Our Chamber Management",
  "Trade Enquiry (e-Form)", "e-Quotation (e-Form)", "e-Auction (e-Form)",
  "Tender & Contract", "Career Page", "Circular", "Blog", "Visit with Appointment",
  "Notice Board", "Media Gallery", "Our Textile Associates (India Map)",
];

const SidebarLayout = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePageChange = (item) => {
    setActivePage(item);
    setIsSidebarOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* MOBILE TRIGGER */}
      <div className="md:hidden mb-6">
        <button onClick={() => setIsSidebarOpen(true)} className="flex items-center justify-between bg-[#3E2723] text-white px-6 py-4 rounded-xl w-full font-bold">
          MENU <Menu />
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* SIDEBAR: Desktop = Static, Mobile = Fixed Drawer */}
        <aside className={`
          ${isSidebarOpen ? "fixed inset-0 z-50 bg-white p-8" : "hidden md:block"} 
          md:w-72 md:sticky md:top-10 md:h-fit md:bg-transparent md:p-0
        `}>
          
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center mb-8 md:hidden">
            <h2 className="text-xl font-bold">Navigation</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-gray-100 rounded-full"><X /></button>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item}
                  onClick={() => handlePageChange(item)}
                  className={`cursor-pointer px-5 py-3 rounded-xl font-medium transition ${
                    activePage === item 
                      ? "bg-pink-500 text-white shadow-lg" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="flex-1 w-full">
            {activePage === "Home" && <HomePage />}
            {activePage === "About Us" && <AboutUs />}
            {activePage === "Contact Us" && <ContactUs />}
            {/* ... other pages */}
            <div className="mt-10 p-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-800">{activePage} Content</h2>
                <p className="mt-4 text-gray-600">Dynamic content for {activePage} goes here.</p>
            </div>
        </main>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/91731404XXXX" target="_blank" rel="noreferrer" 
         className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SidebarLayout;