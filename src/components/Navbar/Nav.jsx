import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [open, setOpen] = useState(false);

  const categories = [
    ["Smartphone", "📱"],
    ["Laptop", "💻"],
    ["Camera", "📷"],
    ["Headphones", "🎧"],
    ["PC Gaming", "🎮"],
    ["Tablets", "📱"],
    ["Television", "📺"],
  ];

  return (
    <>
      <nav className="w-full flex- flex-col justify-center items-center relative">
        {/* Top Bar */}
        <div className="top-nav w-full flex justify-between items-center bg-black text-white px-[5%] py-3 text-sm">
          <div className="flex w-1/2 gap-5 items-center">
            <div className="relative group">
              <span className="cursor-pointer flex items-center hover:text-yellow-500">
                English{" "}
                <span className="text-xl group-hover:-rotate-180 transition-all ease-in-out duration-300">
                  <FaCaretDown />
                </span>
              </span>
              <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden transition group-hover:flex flex-col gap-2 z-50">
                <li>Français</li>
                <li>Deutsch</li>
              </ul>
            </div>

            <div className="relative group">
              <span className="cursor-pointer flex items-center hover:text-yellow-500">
                USD{" "}
                <span className="text-xl group-hover:-rotate-180 transition-all ease-in-out duration-300">
                  <FaCaretDown />
                </span>
              </span>

              <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 hidden transition group-hover:flex flex-col gap-2 z-50">
                <li>USD</li>
                <li>EUR</li>
              </ul>
            </div>
            <p className="hide">Free Shipping On All Orders over $100</p>
          </div>

          <ul className="flex gap-5 w-1/2 justify-end items-center">
            <li className="text-yellow-400 flex items-center gap-1">
              ⚡<Link href="#">Flash Sale</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition">
                <i className="bi bi-person-circle"></i> Account Login
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition">
                <i className="bi bi-globe-americas"></i> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Nav */}
        <div className="middle-nav w-full flex justify-between items-center px-[5%] py-6 gap-10">
          <div className="w-1/5">
            <Link to="/">
              <h2 className="text-5xl font-bricolage font-bold text-black">
                Tron<span className="text-yellow-500">Mart</span>
              </h2>
            </Link>
          </div>

          <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-1/2 overflow-hidden">
            <select className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none">
              <option>All Categories</option>
              <option>Camera</option>
              <option>Accessories</option>
              <option>Camera & Lenses</option>
              <option>Drones</option>
              <option>Security Cameras</option>
              <option>Games</option>
            </select>
            <input
              type="text"
              placeholder="Search for products"
              className="w-full py-2 px-3 outline-none font-medium bg-gray-100"
            />
            <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full">
              Search
            </button>
          </div>

          <div className="get-help flex gap-5 items-center w-1/3 justify-end">
            <div className="flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-telephone"></i>
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Need Help?</span>
                <span className="text-yellow-600 font-bold">
                  +234 9068871537
                </span>
              </div>
            </div>
            <Link to="/wishlist" className="flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-suit-heart"></i>
              </span>
              <div className="flex flex-col text-sm">
                <div className="text-gray-500">My</div>
                <div className="text-yellow-600 font-bold">Wishlist</div>
              </div>
            </Link>

            <Link to="/cart" className="flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-cart2"></i>
              </span>
              <div className="flex flex-col text-sm">
                <div className="text-gray-500">My</div>
                <div className="text-yellow-600 font-bold">Cart</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`w-full px-[5%] py-6 flex justify-between items-center gap-6 transition-all duration-500 ${menuOpen ? "h-auto" : ""}`}
        >
          <div className="relative w-1/5 hide">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center gap-2">
                <GiHamburgerMenu className="text-xl" />
                <span className="font-bold">Shop Categories</span>
              </div>
            </div>

            {open && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300">
                {categories.map(([label, icon], i) => (
                  <a
                    href="#"
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-gray-100"
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </a>
                ))}
              </ul>
            )}
          </div>
          <ul className="flex gap-10 w-2/5 nav-menu font-bold">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-500 text-xl transistion"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-500 text-xl transistion"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-yellow-500 text-xl transistion"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-yellow-500 text-xl transistion"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-yellow-500 text-xl transistion"
              >
                Faq's
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-500 text-xl transistion"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/wishlist" className="flex items-center gap-3 hide">
            <span className="text-2xl text-gray-600">
              <i className="bi bi-suit-heart"></i>
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-sm">Today's Deal</span>
              <span className="bg-red-600 text-white text-xs px-2 pt-1 rounded-sm uppercase relative">
                hot
              </span>
            </div>
          </Link>
          {menuOpen && (
            <FaX
              onClick={toggleMenu}
              className="text-2xl absolute top-4 right-4 cursor-pointer"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
