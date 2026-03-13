import React from "react";
import { Globe, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2D1B0D] text-[#D7CCC8] pt-20 pb-10 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 border-b border-[#A67B5B]/30 pb-16">

          {/* About */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">
              Parekh Chamber
            </h3>

            <p className="text-lg leading-relaxed opacity-80 mb-6">
              Established as the bridge between traditional craft and modern trade. 
              Empowering 5000+ members.
            </p>

            <div className="flex gap-4">
              <span className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#8B4513] cursor-pointer transition">
                <MessageCircle />
              </span>

              <span className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#8B4513] cursor-pointer transition">
                <Globe />
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 underline decoration-[#A67B5B] underline-offset-8">
              Contact Details
            </h4>

            <div className="space-y-6">

              <div className="flex gap-4">
                <MapPin className="text-[#A67B5B]" size={24} />
                <p className="text-lg">
                  Suite 118, Textile Center <br />
                  MG Road, Bengaluru - 560001
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#A67B5B]" size={24} />
                <p className="text-lg">+91 98765 43210</p>
              </div>

            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/5 p-8 rounded-sm border border-white/10">
            <h4 className="text-white font-bold text-xl mb-4">
              Digital Connect
            </h4>

            <p className="text-sm mb-6 italic">
              Stay updated on the go with our WhatsApp integration.
            </p>

            <button className="w-full bg-[#25D366] text-white py-3 rounded-sm font-bold text-lg flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Open WhatsApp
            </button>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm italic">

          <p>
            © 2026 Parekh Chamber of Textile. Fully SEO Friendly & Mobile Responsive Design.
          </p>

          <div className="flex gap-8">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
