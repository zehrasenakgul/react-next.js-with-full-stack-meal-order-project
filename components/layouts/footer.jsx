import React from "react";
import WhiteLogo from "../ui/whiteLogo";
const Footer = () => {
  return (
    <footer className=" pt-[6.25rem] bg-cover center">
      <div className="container mx-auto h-full">
        <div className="flex max-sm:block max-md:block max-lg:block max-sm:pt-[3.75]">
          <div className="bg-pink p-10 rounded-3xl logo-white basis-1/3 mr-20 max-sm:mr-5">
            <a href="">
              <WhiteLogo />
            </a>
            <p className="font-fredoka font-bold text-1xl">
              Tuesday - Saturday: 12:00pm - 23:00pm<br></br>
              <span>Closed on Sunday</span>
            </p>
            <h6 className="font-fredoka font-bold text-1xl">
              5 star rated on TripAdvisor
            </h6>
          </div>
          <div className="link-about basis-1/6">
            <h3 className="text-black font-fredoka font-bold text-2xl">
              About
            </h3>
            <ul>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Information
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Special Dish
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Reservation
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="link-about basis-1/6">
            <h3 className="text-black font-fredoka font-bold text-2xl">menu</h3>
            <ul>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Steaks
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Burgers
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Coctails
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Bar B Q
                </a>
              </li>
              <li>
                <a href="" className="hover:text-pink text-black font-fredoka">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
          <div className="link-about basis-1/3">
            <h3 className="text-black font-fredoka font-bold text-2xl">
              Newsletter
            </h3>
            <p className="font-fredoka">Get recent news and updates.</p>
            <form className="footer-form">
              <input
                className="bg-white text-black font-fredoka"
                type="text"
                name="Enter Your Email Address"
                placeholder="Enter Your Email Address..."
              />
              <button className="button bg-pink button font-bold font-fredoka">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bootem">
          <h6 className="font-bold font-fredoka text-black text-lg">
            <span className="text-pink">© 2023 Foodio</span> | Restaurant and
            BBQ.
          </h6>
          <div className="header-social-media">
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
