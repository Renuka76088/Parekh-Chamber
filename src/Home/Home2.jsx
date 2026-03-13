import React, { useState, useEffect } from "react";

import {
  Mail ,
  CheckCircle,
  Sparkles,
  Palette,
  Scissors,
  Shirt,
  Grid,
  Star,
  Phone,
  Plus,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Layers
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import SafetySection from "./SafetySection";
import FAQSection from "./Faqs";
import BlogSection from "./BlogSection";
import Header from "./Header";



const slides = [
    {
        img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/06/banner456.jpg",
        title1: "THE FABRICS OF",
        title2: "CIVILIZATION.",
        desc: "We’ve One Mission to be the Best Textile Company in NY."
    },
    {
        img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/06/banner1234.jpg",
        title1: "TEXTILES ART HAS",
        title2: "VERSATILE FASHION",
        desc: "We’ve One Mission to be the Best Textile Company in NY."
    }
];

const portfolio = [
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/09-610x750.jpg",
    category: "Dyeing",
    title: "Cotton Fabric"
  },
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/05-610x750.jpg",
    category: "Machine Made",
    title: "Silk Fabric"
  },
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/08-610x750.jpg",
    category: "Stitching",
    title: "Fabric Linean"
  },
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/03-610x750.jpg",
    category: "Manufacture",
    title: "Wool Fabric"
  },
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/01-610x750.jpg",
    category: "Printing",
    title: "Georgette Fabric"
  },
  {
    img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/portfolio2-610x750.jpg",
    category: "Hand Loom",
    title: "Leather Fabric"
  }
];

const Home2 = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const card =
    "border p-6 relative bg-[#f7f7f7] transition duration-300 hover:-translate-y-2 hover:shadow-xl group";


    return (
        <div className="font-[Rubik] bg-white">

          <Header/>
            {/* HERO SLIDER */}

        <section className="relative h-[520px] md:h-[720px] w-full overflow-hidden">

  {slides.map((item, index) => (

    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        slide === index ? "opacity-100" : "opacity-0"
      }`}
    >

      {/* IMAGE */}

      <img
        src={item.img}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}

      <div className="
        absolute
        top-1/2
        left-1/2
        md:left-20
        transform
        -translate-x-1/2
        -translate-y-1/2
        md:translate-x-0
        text-center
        md:text-left
        text-white
        px-6
        max-w-xl
      ">

        <p className="mb-4 tracking-widest text-xs md:text-sm uppercase">
          Factory • Textile • Business
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {item.title1}
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {item.title2}
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-200">
          {item.desc}
        </p>

        <button className="mt-6 md:mt-8 bg-orange-600 hover:bg-white hover:text-orange-600 border-2 border-orange-600 px-6 md:px-8 py-3 md:py-4 font-bold transition">
          OUR SERVICES +
        </button>

      </div>

    </div>

  ))}

</section>



            {/* PRODUCTION SECTION */}

            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}

                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            We Give Top Production <br />
                            From Every Angle.
                        </h2>

                    </div>

                    {/* CARDS */}

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* CARD 1 */}

                        <div className="relative bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 group">

                            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-500 transition">

                                <Layers className="text-orange-600 group-hover:text-white" size={28} />

                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                                Choose For Many Fabrics and Textiles materials for your production
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                We classified it on the basis of material, design and by craft.
                            </p>

                            <span className="absolute right-8 top-6 text-gray-100 text-8xl font-bold">
                                01
                            </span>

                        </div>

                        {/* CARD 2 */}

                        <div className="relative bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 group">

                            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-500 transition">

                                <Palette className="text-orange-600 group-hover:text-white" size={28} />

                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                                Create Your Design Only for the Fabric Production and Natural Fabrics
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                With its rapid growth over the last four decades, since 1970
                            </p>

                            <span className="absolute right-8 top-6 text-gray-100 text-8xl font-bold">
                                02
                            </span>

                        </div>

                        {/* CARD 3 */}

                        <div className="relative bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition duration-300 group">

                            <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-lg mb-6 group-hover:bg-orange-500 transition">

                                <Shirt className="text-orange-600 group-hover:text-white" size={28} />

                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                                Choose from various fabric types that are stretchy and comfortable.
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Fabiflex is a leading export textile service globally.
                            </p>

                            <span className="absolute right-8 top-6 text-gray-100 text-8xl font-bold">
                                03
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}

                    <div className="relative">

                        <img
                            src="https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/image1-1.jpg"
                            className="rounded-xl shadow-lg w-full"
                        />

                        {/* EXPERIENCE BOX */}

                        <div className="absolute bottom-10 left-6 bg-white shadow-xl px-8 py-6 rounded-lg">

                            <h3 className="text-4xl font-bold text-orange-600">
                                25+
                            </h3>

                            <p className="text-gray-700 text-sm leading-tight">
                                Year experience <br /> in Fabiflex
                            </p>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}

                    <div>

                        <p className="text-orange-600 font-semibold mb-3 uppercase tracking-wider">
                            Get informed
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Let’s Build Something Creative together
                        </h2>

                        {/* ICON TEXT */}

                        <div className="flex items-start gap-4 mb-6">

                            <div className="bg-orange-100 p-3 rounded-lg">
                                <Sparkles className="text-orange-600" />
                            </div>

                            <p className="text-gray-700 text-lg">
                                We’re in this business <span className="font-bold text-gray-900">Since 1987</span> and we provide the best service
                            </p>

                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            It is additionally connected with the production of clothes. The crude material
                            of textiles is the fiber which might be regular regenerated.
                        </p>

                        {/* LIST */}

                        <ul className="space-y-4">

                            <li className="flex items-start gap-3">

                                <CheckCircle className="text-orange-500 mt-1" size={20} />

                                <p className="text-gray-700">
                                    It can be very well produced using fiber, yarn, texture, or mix.
                                </p>

                            </li>

                            <li className="flex items-start gap-3">

                                <CheckCircle className="text-orange-500 mt-1" size={20} />

                                <p className="text-gray-700">
                                    It is one of the most extensive terms applied to the clothing industry.
                                </p>

                            </li>

                            <li className="flex items-start gap-3">

                                <CheckCircle className="text-orange-500 mt-1" size={20} />

                                <p className="text-gray-700">
                                    It might be a finished or unfinished item. It has no particular use.
                                </p>

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

    <section className="bg-[#e9e9e9] py-24">

      <div className="max-w-6xl mx-auto relative">


        {/* HEADING */}

        <div className="bg-[#ef3e32] text-white text-center py-12 w-[65%] mx-auto font-bold text-3xl uppercase tracking-wide transition hover:scale-105">
          TAKE LOOK INTO OUR
          <br />
          BEST SERVICES AND PRODUCTION
        </div>


        {/* MAIN BOX */}

        <div className="bg-white shadow-lg p-10 mt-[-40px]">

          <div className="grid md:grid-cols-3 gap-6">


            {/* CARD 1 */}

            <div className={card}>
              <div className="flex gap-4 items-start">
                <Palette className="text-gray-700 group-hover:text-red-500 transition group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                    Fabric Design
                  </h3>
                  <p className="text-[#ef3e32] text-xs font-bold uppercase">
                    Manufacture
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                It is the process of transfer dyes from the aqueous solution to the fiber surface
              </p>

              <p className="text-[#ef3e32] text-sm font-semibold mt-4">
                READ MORE +
              </p>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-[#ef3e32] transition group-hover:rotate-45" />
            </div>


            {/* CARD 2 */}

            <div className={card}>
              <div className="flex gap-4 items-start">
                <Scissors className="text-gray-700 group-hover:text-red-500 transition group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                    Stitch Fabric
                  </h3>
                  <p className="text-[#ef3e32] text-xs font-bold uppercase">
                    Fabric Printing
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                Stitches are the fundamental elements of sewing, knitting and lace-making
              </p>

              <p className="text-[#ef3e32] text-sm font-semibold mt-4">
                READ MORE +
              </p>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-[#ef3e32] transition group-hover:rotate-45" />
            </div>


            {/* CARD 3 */}

            <div className={card}>
              <div className="flex gap-4 items-start">
                <Shirt className="text-gray-700 group-hover:text-red-500 transition group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                    Decoration Art
                  </h3>
                  <p className="text-[#ef3e32] text-xs font-bold uppercase">
                    Fabric Dyeing
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                It is the process of transfer dyes from the aqueous solution to the fiber surface
              </p>

              <p className="text-[#ef3e32] text-sm font-semibold mt-4">
                READ MORE +
              </p>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-[#ef3e32] transition group-hover:rotate-45" />
            </div>


            {/* CARD 4 */}

            <div className={card}>
              <div className="flex gap-4 items-start">
                <Grid className="text-gray-700 group-hover:text-red-500 transition group-hover:scale-110" size={32} />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                    Inter Design
                  </h3>
                  <p className="text-[#ef3e32] text-xs font-bold uppercase">
                    Web Fabric
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                Have been engaged with modern units for all requirements of design bleach.
              </p>

              <p className="text-[#ef3e32] text-sm font-semibold mt-4">
                READ MORE +
              </p>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-[#ef3e32] transition group-hover:rotate-45" />
            </div>


            {/* RATING CARD */}

            <div className="border p-6 bg-[#f7f7f7] flex flex-col items-center justify-center text-center transition hover:shadow-xl hover:-translate-y-2">

              <img
                src="https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/logo-dark.svg"
                className="w-28 mb-3 transition hover:scale-110"
              />

              <div className="flex text-orange-400 mb-2">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>

              <p className="text-sm text-gray-600">
                Rated <span className="text-[#ef3e32] font-bold">4.7</span> out of 5 based on over
                <span className="text-[#ef3e32] font-bold"> 1000+ </span>
                Reviews
              </p>

            </div>


            {/* CONSULTING CARD */}

            <div
              className="text-white p-6 flex flex-col justify-center relative overflow-hidden group"
            >

              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789)"
                }}
              />

              <div className="relative z-10">

                <h3 className="text-xl font-bold">
                  GET YOUR <span className="text-[#ef3e32]">FREE</span> CONSULTING
                </h3>

                <p className="text-sm mt-2 mb-4">
                  All Fabrics are textiles in Products.
                </p>

                <p className="flex items-center gap-2 text-sm">
                  <Phone size={16} /> Call :
                  <span className="text-[#ef3e32] font-bold">
                    123 456 78910
                  </span>
                </p>

                <button className="border border-white px-4 py-2 mt-4 text-sm transition hover:bg-white hover:text-black">
                  JOIN US NOW
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* BUTTON */}

        <div className="text-center mt-12">

          <button className="border border-white bg-[#ef3e32] text-white px-8 py-3 text-sm uppercase tracking-wide transition hover:bg-black hover:scale-105">

            VIEW MORE SERVICES +

          </button>

        </div>

      </div>
</section>

<section className="w-full">

  {/* RED CTA */}

  <div className="bg-[#ef3e32] py-16 flex justify-center">

    <button className="border border-white text-white px-10 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition">

      VIEW MORE SERVICES +

    </button>

  </div>


  {/* PORTFOLIO SLIDER */}

  <Swiper
    modules={[Autoplay]}
    slidesPerView={5}
    spaceBetween={0}
    loop={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false
    }}
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 }
    }}
  >

    {portfolio.map((item, index) => (

      <SwiperSlide key={index}>

        <div className="group relative h-[500px] overflow-hidden">

          {/* IMAGE */}

          <img
            src={item.img}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-[#0c1d2b]/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

            {/* PLUS BUTTON */}

            <div className="w-14 h-14 bg-[#ef3e32] flex items-center justify-center text-white cursor-pointer hover:scale-110 transition">

              <Plus size={26} />

            </div>

          </div>

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

</section>
< SafetySection/>
<FAQSection/>
<BlogSection/>

   <footer className="bg-gray-900 text-gray-300 pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT */}

        <div>

          <h2 className="text-2xl font-bold text-white mb-4">
            Fabiflex
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We bring revolutionary textile manufacturing solutions with
            modern technology and sustainable fabric production.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>New York, USA</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+1 800 123 4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@fabiflex.com</span>
            </div>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">Services</li>
            <li className="hover:text-red-500 cursor-pointer">Blog</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>

          </ul>

        </div>

        {/* SERVICES */}

        <div>

          <h3 className="text-lg font-semibold text-white mb-6">
            Services
          </h3>

          <ul className="space-y-3">

            <li className="hover:text-red-500 cursor-pointer">
              Fabric Manufacturing
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Textile Design
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Custom Printing
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Fabric Export
            </li>

            <li className="hover:text-red-500 cursor-pointer">
              Quality Inspection
            </li>

          </ul>

        </div>

        {/* NEWSLETTER */}

        <div>

          <h3 className="text-lg font-semibold text-white mb-6">
            Newsletter
          </h3>

          <p className="text-gray-400 mb-5">
            Subscribe to get latest textile industry updates.
          </p>

          <div className="flex">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-800 text-white outline-none"
            />

            <button className="bg-red-500 px-5 font-semibold hover:bg-red-600 transition">
              Send
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">

        © {new Date().getFullYear()} Fabiflex. All Rights Reserved.

      </div>

    </footer>

        </div>
    );
};

export default Home2;
