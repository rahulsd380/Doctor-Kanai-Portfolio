import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    {
      label: "হোম",
      path: "/",
    },
    {
      label: "আমার সম্পর্কে",
      path: "/",
    },
    {
      label: "সেবা সমূহ",
      path: "/",
    },
    {
      label: "যোগাযোগ",
      path: "/",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-6 bg-neutral-light-10">
      <Container>
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2 text-2xl font-Poppins font-bold">
            <img src={ICONS.doctor} alt="doctor" className="size-8" />
            ড. কানাই রায়
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {navlinks.map((link, index) => (
              <Link key={index} to={link?.path} className="font-Nunito-Bengali font-semibold">
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
            ) : (
              <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-5 mt-5 md:hidden bg-neutral-light-10 p-5 rounded-lg shadow-lg">
            {navlinks.map((link, index) => (
              <Link key={index} to={link?.path} onClick={toggleMenu} className="font-Nunito-Bengali font-semibold">
                {link?.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
