import logo from "../assets/Chromarc logo.jpeg";

const Navbar = () => {
  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo + Branding */}
          <button 
            onClick={goHome}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="Chromarc Logo"
              className="w-12 h-12 object-contain hover:rotate-6 transition duration-300"
            />

            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Chromarc
              </h1>

              <p className="text-xs text-gray-400 tracking-wider">
                DIGITAL GROWTH AGENCY
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a
                href="#services"
                className="hover:text-cyan-400 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#work"
                className="hover:text-cyan-400 transition"
              >
                Work
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
            Free Audit
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;