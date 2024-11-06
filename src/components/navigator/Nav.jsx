import React, { useContext, useEffect, useMemo, useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  PiHouseSimpleThin,
  PiShoppingCartSimpleFill,
  PiHouseSimpleFill,
  PiShoppingCartSimpleThin,
} from "react-icons/pi";
import { RiSearchFill } from "react-icons/ri";
import NavLink from "./NavLink";
import { AuthContext } from "../../context/AuthContext";
import { HiUser } from "react-icons/hi2";
import { IMGS } from "../../utilities/Imgs";
import { CartContext } from "../../context/CartContext";

export default function Nav({ dark, menuBtn, toggleDrawer, className }) {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const quantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <nav
      className={`md:px-16 px-5 w-full md:h-24 h-16 flex justify-between items-center z-50 ${
        dark ? "text-black/50" : "text-white/50"
      } ${className}`}
    >
      <button
        onClick={() => navigate("/")}
        className="uppercase md:text-3xl text-xl font-serif"
      >
        <img
          src={dark ? IMGS.darkLogo : IMGS.logo}
          className="sm:w-24 sm:h-12 w-14 h-7"
          alt="Logo"
        />
      </button>
      <div className="flex gap-2 md:text-xl">
        <NavLink
          to="/search"
          icon={<CiSearch />}
          activeIcon={<RiSearchFill />}
        />
        <div className=" relative">
          <span className=" md:text-[6px] text-[5px] absolute md:h-3 md:w-3 h-2 w-2 flex justify-center items-center text-white left-1/2 -translate-x-1/2 md:-top-2 -top-1 rounded-full bg-primary ">
            {quantity}
          </span>
          <NavLink
            to="/cart"
            icon={<PiShoppingCartSimpleThin />}
            activeIcon={<PiShoppingCartSimpleFill />}
          />
        </div>

        <NavLink
          to={loggedIn ? "/auth/profile" : "/auth/login"}
          icon={<CiUser />}
          activeIcon={<HiUser />}
        />
        <NavLink
          to="/"
          icon={<PiHouseSimpleThin />}
          activeIcon={<PiHouseSimpleFill />}
        />

        {menuBtn && (
          <button className="hover:text-primary" onClick={toggleDrawer}>
            <HiBars3BottomRight />
          </button>
        )}
      </div>
    </nav>
  );
}
