"use client";
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const MenuNav = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { text: "Home", link: "/home", icon: <HomeIcon /> },
    { text: "menu", link: "/menu", icon: <FastfoodIcon /> },
    {
      text: "Working Hours",
      link: "/working-hours",
      icon: <QueryBuilderIcon />,
    },
    { text: "Contact", link: "/contact", icon: <CallIcon /> },
  ];
  const user = false;
  return (
    <>
      <div className="block md:hidden">
        {open ? (
          <div onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
        ) : (
          <div onClick={() => setOpen(true)}>
            <MenuOpenIcon />
          </div>
        )}
      </div>
      {open && (
        <div
          className="md:hidden  w-full absolute 
      bg-[#e7603b] 
      text-white
      top-[85px]
      h-[calc(100vh-85px)]
      left-0 flex flex-col 
      items-center justify-center gap-6 z-20 "
        >
          {menuLinks.map((link) => (
            <div className="hover:text-blue-500" key={link.text}>
              <Link
                className="flex items-center gap-1 text-2xl transition-colors duration-300  hover:transform hover:font-bold hover:-translate-y-1"
                href={link.link}
              >
                {link.icon}
                {link.text}
              </Link>
            </div>
          ))}
          <div>
            {!user && (
              <div className="flex flex-col gap-6">
                <Link
                  className="flex items-center gap-1 text-3xl"
                  href={"/login"}
                >
                  <AccountCircleIcon /> LOGIN
                </Link>
                <Link
                  className="flex items-center gap-1 text-3xl"
                  href={"/cart"}
                >
                  <ShoppingCartIcon />
                  CART
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuNav;
