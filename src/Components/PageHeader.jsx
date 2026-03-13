import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Share2, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About Us", path: "/about" },
    { name: "Circular", path: "/circular" },
    { name: "Pages", path: "#" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const pagesDropdown = [
    "e-Auction",
    "e-Quotation",
    "Trade Enquiry",
    "Tender & Contract",
    "Chamber Service"
  ];

  const homeDropdown = [
    { name: "Home 1", path: "/home-1" },
    { name: "Home 2", path: "/home-2" },
    { name: "Home 3", path: "/home-3" },
  ];

  const dropdownClass =
    "absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-xl w-56 border border-gray-100 overflow-hidden z-50";

  return (
    <>
      {/* TOP BAR */}

      <header className="bg-[#3E2723] text-[#D7CCC8] py-2 px-4 md:px-8 text-sm border-b border-[#A67B5B]">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div className="flex gap-6">

            <span className="flex items-center gap-2">
              <Phone size={14} /> +91 731 404 XXXX
            </span>

            <span className="hidden md:flex items-center gap-2 border-l border-[#A67B5B] pl-6">
              <Mail size={14} /> info@parekhchamber.com
            </span>

          </div>

          <div className="hidden sm:flex items-center gap-4">
            <Share2 size={16} />
          </div>

        </div>

      </header>

      {/* NAVBAR */}

      <nav className="bg-white shadow-lg sticky top-0 z-[100]">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}

          <Link to="/" className="flex flex-col">

            <span className="text-2xl font-bold text-[#3E2723]">
              PAREKH <span className="text-[#8B4513]">CHAMBER</span>
            </span>

            <span className="text-[#A67B5B] text-[10px] uppercase tracking-[0.3em] font-bold">
              Of Textile Industry
            </span>

          </Link>

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex gap-8 text-lg font-semibold">

            {/* HOME */}

            <div
              className="relative"
              onMouseEnter={() => setIsHomeOpen(true)}
              onMouseLeave={() => setIsHomeOpen(false)}
            >

              <button className="flex items-center gap-1 text-[#3E2723] hover:text-[#8B4513]">
                Home <ChevronDown size={18} />
              </button>

              <AnimatePresence>

                {isHomeOpen && (

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={dropdownClass}
                  >

                    {homeDropdown.map((item, i) => (

                      <Link
                        key={i}
                        to={item.path}
                        className="block px-6 py-3 text-[#3E2723] hover:bg-[#F5EFE6] border-b border-gray-50 last:border-0"
                      >
                        {item.name}
                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <Link to="/about" className="text-[#3E2723] hover:text-[#8B4513]">
              About Us
            </Link>

            <Link to="/circular" className="text-[#3E2723] hover:text-[#8B4513]">
              Circular
            </Link>

            {/* PAGES */}

            <div
              className="relative"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >

              <button className="flex items-center gap-1 text-[#3E2723] hover:text-[#8B4513]">
                Pages <ChevronDown size={18} />
              </button>

              <AnimatePresence>

                {isPagesOpen && (

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={dropdownClass}
                  >

                    {pagesDropdown.map((item, i) => (

                      <Link
                        key={i}
                        to="#"
                        className="block px-6 py-3 text-[#3E2723] hover:bg-[#F5EFE6] border-b border-gray-50 last:border-0"
                      >
                        {item}
                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <Link to="/blog" className="text-[#3E2723] hover:text-[#8B4513]">
              Blog
            </Link>

            <Link to="/contact" className="text-[#3E2723] hover:text-[#8B4513]">
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-[#3E2723]"
          >
            <Menu size={30} />
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-white p-6 overflow-y-auto"
          >

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-xl font-bold text-[#3E2723]">
                Menu
              </h2>

              <button onClick={() => setIsMenuOpen(false)}>
                <X size={30} />
              </button>

            </div>

            <div className="flex flex-col gap-5 text-lg">

              {/* HOME MOBILE */}

              <button
                onClick={() => setIsHomeOpen(!isHomeOpen)}
                className="flex justify-between items-center font-semibold text-[#3E2723]"
              >
                Home <ChevronDown size={18} />
              </button>

              {isHomeOpen && (

                <div className="pl-4 flex flex-col gap-3">

                  {homeDropdown.map((item, i) => (

                    <Link
                      key={i}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-600"
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              )}

              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>

              <Link to="/circular" onClick={() => setIsMenuOpen(false)}>
                Circular
              </Link>

              {/* PAGES MOBILE */}

              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex justify-between items-center font-semibold text-[#3E2723]"
              >
                Pages <ChevronDown size={18} />
              </button>

              {isPagesOpen && (

                <div className="pl-4 flex flex-col gap-3">

                  {pagesDropdown.map((item, i) => (

                    <Link
                      key={i}
                      to="#"
                      className="text-gray-600"
                    >
                      {item}
                    </Link>

                  ))}

                </div>

              )}

              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
};

export default PageHeader;
