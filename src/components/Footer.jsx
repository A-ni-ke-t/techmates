import logo from "../assets/logo.png"; // Optional: if you have a logo

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 px-4 text-neutral-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start text-sm">
        
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Techmates Logo" className="h-10 w-auto p-2" />
            {/* <span className="text-lg font-semibold text-white">Techmate’s technologies</span> */}
          </div>
          <p className="mt-4 max-w-xs text-neutral-500">
            Building smarter software for your vision. Let’s craft innovation together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#expertise" className="hover:text-white transition">Expertise</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white">Contact</h3>
          <a href="mailto:techmatestechy@gmail.com" className="hover:text-white transition">
            techmatestechy@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Techmate technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
