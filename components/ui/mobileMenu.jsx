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
          <a href="">
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
              href="#"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Menus
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Shop
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-black  hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              News
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block "
            >
              Pages
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
