import React, { useState } from "react";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  return (
    <>

      {/* FLOATING SUPPORT BAR */}

      <div className="fixed right-0 top-1/3 z-50 flex flex-col shadow-lg">

        <button className="bg-[#1c1c1c] text-white px-4 py-3 hover:bg-orange-500">
          Support
        </button>

        <button className="bg-[#1c1c1c] text-white px-4 py-3 border-t border-gray-600 hover:bg-orange-500">
          Customization
        </button>

        <button className="bg-orange-500 text-white px-4 py-3 border-t hover:bg-orange-600">
          Buy Now
        </button>

      </div>

      {/* TOP BAR */}

      <div className="bg-orange-500 text-white text-sm">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-2">

          <div className="flex items-center gap-3">

            <span className="hidden md:block">
              Welcome to Industry & Factory Business Theme
            </span>

            <button className="bg-white text-orange-600 px-3 py-1 text-xs font-semibold">
              GET A FREE QUOTE
            </button>

          </div>

          <div className="flex items-center gap-2 md:gap-4">

            <MapPin size={16} />

            <span className="hidden md:block">
              Jos Mnheles Hutyio, 1430 Marasil
            </span>

          </div>

        </div>

      </div>

      {/* HEADER */}

      <header className="sticky top-0 z-40 bg-[#1c1c1c] text-white shadow-md">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

          {/* LOGO */}

          <div className="text-xl md:text-2xl font-bold tracking-wide">
            PAREKH CHAMBER
          </div>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            <div className="relative group">

              <button className="flex items-center gap-1 hover:text-orange-500">
                Home <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">

                <div className="bg-white text-black w-44 shadow-lg border">

                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home 1
                  </Link>

                  <Link to="/home-2" className="block px-4 py-2 hover:bg-gray-100">
                    Home 2
                  </Link>

                  <Link to="/home-3" className="block px-4 py-2 hover:bg-gray-100">
                    Home 3
                  </Link>

                </div>

              </div>

            </div>

            <Link to="/about" className="hover:text-orange-500">About</Link>
            <Link to="/services" className="hover:text-orange-500">Services</Link>
            <Link to="/projects" className="hover:text-orange-500">Projects</Link>
            <Link to="/blog" className="hover:text-orange-500">Blog</Link>
            <Link to="/contact" className="hover:text-orange-500">Contact</Link>

          </nav>

          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

        </div>

      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-50 bg-black/60 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >

        {/* MENU PANEL */}

        <div
          className={`bg-white w-full h-full transform transition duration-300 overflow-y-auto ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >

          {/* HEADER */}

          <div className="flex justify-between items-center p-6 border-b">

            <h2 className="text-xl font-bold">Menu</h2>

            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>

          </div>

          {/* MENU ITEMS */}

          <nav className="flex flex-col text-lg p-6 gap-4">

            {/* HOME DROPDOWN */}

            <button
              onClick={() => setHomeOpen(!homeOpen)}
              className="flex justify-between items-center font-medium"
            >
              Home
              <ChevronDown />
            </button>

            {homeOpen && (

              <div className="pl-4 flex flex-col gap-3 text-gray-600">

                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home 1
                </Link>

                <Link to="/home-2" onClick={() => setMenuOpen(false)}>
                  Home 2
                </Link>

                <Link to="/home-3" onClick={() => setMenuOpen(false)}>
                  Home 3
                </Link>

              </div>

            )}

            <hr />

            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          </nav>

        </div>

      </div>

    </>
  );
};

export default Header;
