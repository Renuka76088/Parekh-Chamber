import React from "react";
import { Target, TrendingUp, ShieldCheck, Quote } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#2D1B0D] font-sans selection:bg-[#A67B5B] selection:text-white">

      {/* SECTION 1 */}
      <section className="relative flex flex-col lg:flex-row border-b border-[#D7CCC8]">

        <div className="lg:w-3/5 p-10 md:p-16 border-r border-[#D7CCC8]">

          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-10 bg-[#8B4513]"></span>
            <span className="text-[#8B4513] uppercase tracking-widest text-sm font-semibold">
              About Our Chamber
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#1A1A1A]">
            Building Trust in <br /> Textile Trade
          </h1>

          <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed max-w-xl">
            Parekh Chamber of Textile is a professional platform supporting
            manufacturers, traders and exporters across India. Since 1992,
            we have helped businesses connect, collaborate and grow through
            reliable trade services and industry networks.
          </p>

        </div>

        <div className="lg:w-2/5 relative bg-[#F4ECE1]">

          <img
            src="https://images.unsplash.com/photo-1599078631114-247fd5f31d22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
            className="w-full h-full object-cover"
            alt="Textile Industry"
          />

          <div className="absolute bottom-0 right-0 bg-[#3E2723] text-white p-8">
            <p className="text-4xl font-bold">30+</p>
            <p className="text-xs uppercase tracking-widest opacity-70">
              Years of Service
            </p>
          </div>

        </div>

      </section>


      {/* SECTION 2 */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[#D7CCC8]">

        {[
          {
            icon: <Target size={28}/>,
            title: "Our Mission",
            desc: "To support textile businesses with modern digital tools and create opportunities for efficient trade and collaboration."
          },
          {
            icon: <TrendingUp size={28}/>,
            title: "Our Vision",
            desc: "To strengthen India's textile trade ecosystem by connecting manufacturers, traders and global partners."
          },
          {
            icon: <ShieldCheck size={28}/>,
            title: "Our Commitment",
            desc: "We maintain transparency, reliability and professional standards for all our members and trade services."
          }
        ].map((item, idx) => (

          <div key={idx} className="p-10 border-r last:border-r-0 border-[#D7CCC8] hover:bg-[#F4ECE1] transition">

            <div className="text-[#8B4513] mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-[#1A1A1A]">
              {item.title}
            </h3>

            <p className="text-[#5D4037] leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </section>


      {/* SECTION 3 */}
      <section className="py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center gap-14">

        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            className="w-full border-8 border-[#F4ECE1]"
            alt="Chairman"
          />
        </div>

        <div className="md:w-2/3">

          <Quote size={40} className="text-[#A67B5B] mb-5"/>

          <p className="text-xl text-[#1A1A1A] leading-relaxed mb-8">
            Parekh Chamber focuses on building a transparent and trusted
            textile trade platform where businesses can grow through
            collaboration, innovation and strong industry support.
          </p>

          <div className="flex items-center gap-4">

            <div className="w-12 h-[2px] bg-[#8B4513]"></div>

            <div>
              <p className="text-lg font-semibold">
                Shri R. K. Parekh
              </p>

              <p className="text-sm text-[#8B4513]">
                Founding Chairman
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* SECTION 4 */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#D7CCC8]">

        {[
          { label: "Active Members", val: "5000+" },
          { label: "Partner Cities", val: "150+" },
          { label: "Years Experience", val: "30+" },
          { label: "Trade Value", val: "₹500Cr+" }
        ].map((stat, i) => (

          <div key={i} className="p-10 border-r last:border-r-0 border-[#D7CCC8] text-center bg-[#F4ECE1]">

            <p className="text-4xl font-bold text-[#1A1A1A] mb-2">
              {stat.val}
            </p>

            <p className="text-sm text-[#8B4513] font-medium">
              {stat.label}
            </p>

          </div>

        ))}

      </section>


      {/* SECTION 5 */}
      <section className="py-20 bg-[#3E2723] text-center text-white px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Join the Parekh Chamber Network
        </h2>

        <p className="max-w-xl mx-auto text-lg mb-10 opacity-90">
          Become part of a trusted textile trade community and
          access professional services designed to support
          business growth and industry collaboration.
        </p>

        <button className="bg-white text-[#3E2723] px-12 py-4 text-lg font-semibold hover:bg-[#A67B5B] hover:text-white transition">
          Apply for Membership
        </button>

      </section>

    </div>
  );
};

export default AboutUs;
