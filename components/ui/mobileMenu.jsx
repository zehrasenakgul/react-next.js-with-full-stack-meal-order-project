import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Logo from "./logo";

const MobileMenu = ({ isMobileMenu, setIsMobileMenu }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setIsMobileMenu(false)}>
      <div
        className={"mobile-nav hmburger-menu" + (isMobileMenu ? " open" : "")}
        id="mobile-nav"
      >
        <div className="res-log">
          <a href="home">
            <Logo />
          </a>
        </div>
        <ul>
          <li className="relative">
            <a
              href="#"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Home
            </a>
          </li>
          <li className="relative">
            <a
              href="menu"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Menu
            </a>
          </li>
          <li className="relative">
            <a
              href="shop"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Shop
            </a>
          </li>
          <li className="relative">
            <a
              href="news"
              className="text-black  hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              News
            </a>
          </li>
          <li className="relative">
            <a
              href="about"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              About
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          className="cursor-pointer"
          onClick={() => setIsMobileMenu(false)}
          id="res-cross"
        ></a>
      </div>
    </OutsideClickHandler>
  );
};

export default MobileMenu;
