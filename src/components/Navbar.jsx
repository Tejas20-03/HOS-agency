import {
  faArrowRight,
  faBars,
  faDiagramProject,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      name: "Services",
      ref: "#services",
    },
    {
      name: "Pricing",
      ref: "#pricing",
    },
    {
      name: "Testimonials",
      ref: "#testimonials",
    },
    {
      name: "FAQ",
      ref: "#faq",
    },
    {
      name: "Contact",
      ref: "#contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex bg-white justify-between p-4 items-center">
      <a href="/" className="flex gap-2 items-center flex-1">
        <img
          className="flex object-cover"
          src={logo}
          alt="logo"
          width={"150px"}
        />
        <div className="flex flex-col">
          <span className="text-lg font-medium">High On</span>
          <span className="tracking-widest uppercase font-light text-xl">
            Style
          </span>
        </div>
      </a>
      <div className="md:flex gap-12 hidden">
        {links.map((link, index) => (
          <a
            className="font-medium hover:text-[#3238f5] cursor-pointer"
            key={index}
            href={link.ref}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <FontAwesomeIcon icon={faDiagramProject} />
          <span>Explore Projects</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <button className="p-2 md:hidden" onClick={handleMenu}>
        <FontAwesomeIcon className="text-gray-600" icon={faBars} />
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed bg-white inset-0 p-4 z-10">
          <div className="flex justify-between">
            <a href="#" className="flex items-center gap-2">
              <img
                className="flex object-cover"
                src={logo}
                alt="logo"
                width={"150px"}
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium">High On</span>
                <span className="tracking-widest uppercase font-light text-xl">
                  Style
                </span>
              </div>
            </a>
            <button className="p-2 md:hidden" onClick={handleMenu}>
              <FontAwesomeIcon className="text-gray-600" icon={faXmark} />
            </button>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            {links.map((link, index) => (
              <a
                className="font-medium hover:text-[#3238f5] cursor-pointer"
                key={index}
                href={link.ref}
                onClick={handleMenu}
              >
                {link.name}
              </a>
            ))}
            <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
              <FontAwesomeIcon icon={faDiagramProject} />
              <span>Explore Projects</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
