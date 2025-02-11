import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname); // Ensure state updates on route change
    console.log("Current Path:", location.pathname); // Debugging
  }, [location.pathname]);

  // Normalize paths to remove trailing slashes
  const normalizedPath = currentPath.replace(/\/$/, "");

  // Define pages where "Kadagam Ventures" should be visible
  const showKadagamText = ["/", "/about", "/contact"].includes(normalizedPath);

  // Social Media Links for Each Section
  const socialMediaLinks = {
    "/NithyaEvent": [
      { icon: faFacebookF, url: "https://www.facebook.com/share/19vAnCKb8e/", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
      { icon: faInstagram, url: "https://www.instagram.com/nithya_event?igsh=ZngydWlvc2JzY2Nn", bgColor: "bg-pink-500", hoverColor: "hover:bg-pink-600" },
      { icon: faTwitter, url: "https://twitter.com/NithyaEvent", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
      { icon: faLinkedinIn, url: "https://www.linkedin.com/NithyaEvent", bgColor: "bg-gray-700", hoverColor: "hover:bg-gray-900" }
    ],
    "/NithyaTickets": [
      { icon: faFacebookF, url: "https://www.facebook.com/NithyaTickets", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
      { icon: faInstagram, url: "https://www.instagram.com/nithyaticket?igsh=eXI0OGNmYTMya2M1", bgColor: "bg-pink-500", hoverColor: "hover:bg-pink-600" },
      { icon: faTwitter, url: "https://twitter.com/NithyaTickets", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
      { icon: faLinkedinIn, url: "https://www.linkedin.com/NithyaTickets", bgColor: "bg-gray-700", hoverColor: "hover:bg-gray-900" }
    ],
    "/KadagamFoundation": [
      { icon: faFacebookF, url: "https://www.facebook.com/share/18g2BHEv3h/", bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
      { icon: faInstagram, url: "https://www.instagram.com/kadamfoundationbangalore?igsh=MXRjdzNxZHVncnYycg==", bgColor: "bg-pink-500", hoverColor: "hover:bg-pink-600" },
      { icon: faTwitter, url: "https://twitter.com/KadagamFoundation", bgColor: "bg-blue-400", hoverColor: "hover:bg-blue-500" },
      { icon: faLinkedinIn, url: "https://www.linkedin.com/KadagamFoundation", bgColor: "bg-gray-700", hoverColor: "hover:bg-gray-900" }
    ]
  };

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-100 w-full py-10 border-t">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Quick Links</h3>
          <ul className="text-gray-600 text-sm space-y-2 mt-3">
            <li><a href="/" className="hover:text-indigo-500 transition duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-500 transition duration-300">About</a></li>
            <li><a href="/products" className="hover:text-indigo-500 transition duration-300">Products</a></li>
            <li><a href="/contact" className="hover:text-indigo-500 transition duration-300">Contact us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Contact Us</h3>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            NO.34 1st Floor, Venkatappa Road, Tasker Town, Off Queens Road, Bengaluru - 560051
          </p>
          <p className="mt-3 text-indigo-700 font-medium hover:text-indigo-900 transition duration-300 cursor-pointer">
            +91 8867999897
          </p>
        </div>

        {/* Right Side: Kadagam Ventures Text or Social Links */}
        <div>
          {/* Show "Kadagam Ventures" text on Home, About, Contact pages */}
          {showKadagamText && (
            <h1 className="text-6xl sm:text-6xl md:text-5xl font-bold text-white py-8">
              <span className="text-red-500">Kadagam</span>{" "}
              <span className="text-blue-600">Ventures</span>
            </h1>
          )}

          {/* Show Social Links based on current page */}
          {socialMediaLinks[normalizedPath] && (
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4 mt-3">
                {socialMediaLinks[normalizedPath].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${link.bgColor} text-white ${link.hoverColor} transition duration-300 shadow-md`}
                  >
                    <FontAwesomeIcon icon={link.icon} size="sm" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t pt-6 text-center">
        <p className="text-gray-600 text-sm">
          Copyright © 2025 KADAGAM Ventures Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
