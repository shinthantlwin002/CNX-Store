import React from "react";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Searchbox from "../../ui/Searchbox";
import "./style.css";

const Navbar = () => {
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <nav>
          <div className="grid grid-cols-3">
            <Searchbox
              placeholderText="Search Product"
              containerClass="w-fit"
            />
            <h1 className="place-self-center text-4xl raleway-bold">CNX</h1>
            <div className="place-self-end flex items-center gap-4">
              <User />
              <Link to={`/wishlist`} className="relative">
                <Heart />
                <span className="absolute -top-2 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-[#1E1E1E] text-white text-xs">
                  0
                </span>
              </Link>
              <Link to={`/cart`} className="relative">
                <ShoppingBag />
                <span className="absolute -top-2 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-[#1E1E1E] text-white text-xs">
                  0
                </span>
              </Link>
            </div>
          </div>
          <ul className="flex justify-center items-center gap-10 my-8">
            <li className="nav-item">
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/shop`}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/cart`}>Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
