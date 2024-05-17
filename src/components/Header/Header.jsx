import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo_-removebg-preview.png";

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Testimonials", link: "/" },
    { name: "Careers", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-home py-4 md:px-10 px-7">
        <div className="font-bold cursor-pointer flex">
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-home md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl font-bold md:my-0 my-7"
            >
              <Link
                to={link.link}
                className="text-white text-lg hover:text-yellow-500 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8 text-xl font-bold md:my-0 my-7">
            <button className="bg-herobtn hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
