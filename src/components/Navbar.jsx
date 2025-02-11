import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Dropdown arrow icon
import logo from "../assets/kadagamLogo.png";
import DropdownIcon1 from "../assets/DropdownIcon1.png";
import DropdownIcon2 from "../assets/DropdownIcon2.png";
import DropdownIcon3 from "../assets/DropdownIcon3.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Use for programmatic navigation

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Dropdown items with icons
  const dropdownItems = [
    { name: "Nithya Event", path: "/NithyaEvent", icon: DropdownIcon1 },
    { name: "Nithya Tickets", path: "/NithyaTickets", icon: DropdownIcon2 },
    { name: "Kadagam Foundation", path: "/KadagamFoundation", icon: DropdownIcon3 },
  ];

  // Function to navigate and close menu
  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 bg-white shadow-md">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {["Home", "About Us", "Products", "Contact Us"].map((item, index) => (
          <li key={index} className="relative">
            {item === "Products" ? (
              <div className="dropdown-menu relative">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  {item}
                  <IoIosArrowDown 
                    className={`ml-1 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-56 text-left z-50">
                    {dropdownItems.map((subItem, subIndex) => (
                      <li 
                        key={subIndex} 
                        className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-200 transition cursor-pointer"
                        onClick={() => handleNavigate(subItem.path)}
                      >
                        <img src={subItem.icon} alt={subItem.name} className="h-5 w-5" />
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300"
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <button className="absolute top-5 right-6 text-2xl text-gray-700" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <ul className="flex flex-col mt-16 space-y-6 text-center">
          {["Home", "About Us", "Products", "Contact Us"].map((item, index) => (
            <li key={index} className="relative">
              {item === "Products" ? (
                <div className="dropdown-menu relative">
                  <button
                    className="text-gray-700 text-lg flex items-center justify-center w-full hover:text-blue-600 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen(!dropdownOpen);
                    }}
                  >
                    {item}
                    <IoIosArrowDown 
                      className={`ml-1 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} 
                    />
                  </button>

                  {dropdownOpen && (
                    <ul className="bg-gray-100 rounded-lg mt-2 text-left">
                      {dropdownItems.map((subItem, subIndex) => (
                        <li 
                          key={subIndex} 
                          className="px-4 py-2 flex items-center space-x-2 hover:bg-gray-300 transition cursor-pointer"
                          onClick={() => handleNavigate(subItem.path)}
                        >
                          <img src={subItem.icon} alt={subItem.name} className="h-5 w-5" />
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-700 hover:text-blue-600 text-lg transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
