import React, { useState } from "react";
import CardModal from "../ui/cardModal";
import Logo from "../ui/logo";
import MobileMenu from "../ui/mobileMenu";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  const [isCardModal, setIsCardModal] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <header>
      <div className="bg-yellow p-2 block max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden">
        <div className="container mx-auto">
          <div className="flex-row flex-wrap items-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className="flex items-center mr-[3rem]">
                  <i className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mr-3">
                    <svg
                      className="w-6"
                      viewBox="0 0 32 32"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="_16-Smartphone" data-name="16-Smartphone">
                        <path d="m23 2h-14a3 3 0 0 0 -3 3v22a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-22a3 3 0 0 0 -3-3zm-5.39 2-.33 1h-2.56l-.33-1zm6.39 23a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-22a1 1 0 0 1 1-1h3.28l.54 1.63a2 2 0 0 0 1.9 1.37h2.56a2 2 0 0 0 1.9-1.37l.54-1.63h3.28a1 1 0 0 1 1 1z"></path>
                        <path d="m17 24h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path>
                      </g>
                    </svg>
                  </i>
                  <h4 className="text-black font-fredoka text-base font-bold">
                    Phone:{" "}
                    <a href="callto:+1(850)344066" className="ml-2">
                      +1 (850) 344 0 66
                    </a>
                  </h4>
                </div>
                <div className="flex items-center mr-[3rem]">
                  <i className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mr-3">
                    <svg
                      className="w-6"
                      viewBox="0 0 32 32"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="_01-Email" data-name="01-Email">
                        <path d="m29.61 12.21-13-10a1 1 0 0 0 -1.22 0l-13 10a1 1 0 0 0 -.39.79v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-14a1 1 0 0 0 -.39-.79zm-13.61-7.95 11.36 8.74-11.36 8.74-11.36-8.74zm11 23.74h-22a1 1 0 0 1 -1-1v-12l11.39 8.76a1 1 0 0 0 1.22 0l11.39-8.76v12a1 1 0 0 1 -1 1z"></path>
                      </g>
                    </svg>
                  </i>
                  <h4 className="text-black font-fredoka text-base font-bold">
                    Email:{" "}
                    <a href="mailto:info@domain.com" className="ml-2">
                      info@domain.com
                    </a>
                  </h4>
                </div>
              </div>
              <div className="flex items-center  justify-between">
                <div>
                  <a
                    href="#"
                    className="border-b-[1px] border-black ml-10 font-bold text-black font-fredoka"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="border-b-[1px] border-black ml-10 font-bold text-black font-fredoka"
                  >
                    İnstagram
                  </a>
                  <a
                    href="#"
                    className="border-b-[1px] border-black ml-10 font-bold text-black font-fredoka"
                  >
                    Youtube
                  </a>
                </div>
                <div className="flex items-center">
                  <i>
                    <svg
                      className="w-8 h-auto mr-1"
                      viewBox="0 0 32 32"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Approved-User">
                        <path d="m10.105 22.3c.21-.482.511-.926.89-1.305.797-.797 1.878-1.245 3.005-1.245h4c1.127 0 2.208.448 3.005 1.245.379.379.68.823.89 1.305.166.379.608.553.988.387.379-.165.553-.608.387-.987-.285-.653-.691-1.253-1.204-1.766-1.078-1.078-2.541-1.684-4.066-1.684-1.3 0-2.7 0-4 0-1.525 0-2.988.606-4.066 1.684-.513.513-.919 1.113-1.204 1.766-.166.379.008.822.387.987.38.166.822-.008.988-.387z"></path>
                        <path d="m16 8.25c-3.174 0-5.75 2.576-5.75 5.75s2.576 5.75 5.75 5.75 5.75-2.576 5.75-5.75-2.576-5.75-5.75-5.75zm0 1.5c2.346 0 4.25 1.904 4.25 4.25s-1.904 4.25-4.25 4.25-4.25-1.904-4.25-4.25 1.904-4.25 4.25-4.25z"></path>
                        <path d="m26.609 12.25c.415 1.173.641 2.435.641 3.75 0 6.209-5.041 11.25-11.25 11.25s-11.25-5.041-11.25-11.25 5.041-11.25 11.25-11.25c1.315 0 2.577.226 3.75.641.39.138.819-.067.957-.457s-.067-.819-.457-.957c-1.329-.471-2.76-.727-4.25-.727-7.037 0-12.75 5.713-12.75 12.75s5.713 12.75 12.75 12.75 12.75-5.713 12.75-12.75c0-1.49-.256-2.921-.727-4.25-.138-.39-.567-.595-.957-.457s-.595.567-.457.957z"></path>
                        <path d="m21.47 8.53 2 2c.293.293.767.293 1.06 0l4-4c.293-.292.293-.768 0-1.06-.292-.293-.768-.293-1.06 0l-3.47 3.469s-1.47-1.469-1.47-1.469c-.292-.293-.768-.293-1.06 0-.293.292-.293.768 0 1.06z"></path>
                      </g>
                    </svg>
                  </i>
                  <a href="" className="font-bold text-black font-fredoka ml-2">
                    Login / Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[7rem]">
        <div className="container mx-auto h-full">
          <div className="flex flex-wrap items-center justify-between h-full">
            <div className="flex items-center justify-between h-full w-full xl:w-auto">
              <div className="logo">
                <a href="home">
                  <Logo />
                </a>
              </div>
              <div className="hidden cart-checkout max-sm:flex max-md:flex max-lg:flex max-xl:flex">
                <a href="cart">
                  <i>
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
                      </g>
                    </svg>
                  </i>
                </a>
                <div className="bar-menu">
                  <button onClick={() => setIsMobileMenu(true)}>
                    <FaBars />
                  </button>
                </div>
              </div>
            </div>
            <nav className="flex items-center relative justify-center p-0 max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden">
              <ul className="flex list-none">
                <li className="relative">
                  <a
                    href="home"
                    className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    Home
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="menu"
                    className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    Menu
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="shop"
                    className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    Shop
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="news"
                    className="text-black  hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    News
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="about"
                    className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    About
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="contact"
                    className="text-black hover:text-pink font-bold font-fredoka border-b-[0.313rem] border-transparent capitalize text-lg block py-[2.5rem] px-[1.563rem]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-end max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden">
              <div className="relative donation">
                <button onClick={() => setIsCardModal(true)}>
                  <svg
                    className="w-[1.563rem] h-[1.563rem] mr-5 block"
                    id="Shoping-bags"
                    fill="black"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
                    </g>
                  </svg>
                </button>
                {isCardModal && (
                  <CardModal
                    setIsCardModal={setIsCardModal}
                    isCardModal={isCardModal}
                  ></CardModal>
                )}
              </div>
              <a href="" className="bg-pink button font-bold font-fredoka">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenu && (
        <MobileMenu
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}
        ></MobileMenu>
      )}
    </header>
  );
};
export default Header;
