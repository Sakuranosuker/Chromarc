import logo from "../assets/Chromarc logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Chromarc"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Chromarc
                </h3>

                <p className="text-sm text-gray-400">
                  Digital Growth Agency
                </p>
              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Helping businesses grow through strategic marketing,
              powerful branding, high-converting websites,
              and performance-driven campaigns.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="font-semibold text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

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
                  Portfolio
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

          </div>

          {/* Contact */}
          <div>

            <h4 className="font-semibold text-lg mb-5">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">

              <p>
                📧 chromarcservices@gmail.com
              </p>

              <p>
                📱 +91 74394 46412
              </p>

              <p>
                📍 Kolkata, India
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Chromarc.
              All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Designed & Developed by Chromarc
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;