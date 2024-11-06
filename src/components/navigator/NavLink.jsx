import React from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";

export default function NavLink({ to, icon, activeIcon }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`hover:text-primary ${isActive && "text-primary"}`}
    >
      {isActive ? activeIcon : icon}
    </Link>
  );
}
