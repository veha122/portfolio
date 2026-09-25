import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from 'react-icons/hi';

const Navbar = () => {
  const navLinks = [
    { name: "ទំព័រដើម", path: "/" },
    { name: "ការអប់រំ", path: "/education" },
    { name: "ជំនាញ", path: "/skill" },
    { name: "គម្រោង", path: "/project" },
    { name: "បទពិសោធន៍", path: "/experience" },
    { name: "អំពី", path: "/about" },
    // { name: "video", path: "/video" }
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md w-full z-50 fixed top-0 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold">
          Hello, I'm <span className="text-emerald-600">Som Veha</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} className={({ isActive }) =>
                  `transition duration-300 ${isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-500"
                  }`
                }>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenu className="text-2xl dark:text-black" />
          </button>

          {/* Profile image */}
          <div className="hidden md:block">
            <img src="/assets/images/somveha.png" alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      <div
        className={`md:hidden  overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="px-4 flex flex-col space-y-5">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // auto close when click link
              className={({ isActive }) =>
                `block px-4 py-3 text-black font-medium rounded-lg transition-colors duration-200
                 ${isActive 
                   ? "bg-[#1e6e1e] text-white" 
                   : "hover:bg-white/10"
                 }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;