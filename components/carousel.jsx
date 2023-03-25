import React from "react";
import { FaStar } from "react-icons/fa";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  return (
    <section className="slider-hero">
      <div className="slider-home-1">
        <OwlCarousel items={1} className="owl-theme" loop dots margin={8}>
          <div
            className="hero-section item"
            style={{
              backgroundImage: "url(/img/hero-1.jpg)",
            }}
          >
            <div className="container mx-auto max-sm:mr-5 max-sm:ml-5 ">
              <div className="flex items-end">
                <div className="featured-area w-2/4 max-sm:w-full max-md:w-full max-lg:w-full">
                  <h2 className="text-white font-fredoka capitalize text-6xl max-sm:text-3xl max-xl:text-4xl leading-tight font-black">
                    The Perfect Space to Enjoy Fantastic Food
                  </h2>
                  <h5 className="pt-5 pb-12 leading-8 text-2xl font-fredoka">
                    Festive dining at Farthings where we are strong believers in
                    using the very best produce
                  </h5>
                  <div className="md:flex items-center">
                    <a
                      href=""
                      className="button bg-pink button font-bold font-fredoka"
                    >
                      See Our Menus
                    </a>
                    <div className="video">
                      <a
                        data-fancybox=""
                        href="https://www.youtube.com/watch?v=1La4QzGeaaQ"
                      >
                        <i>
                          <svg
                            width={15}
                            height={22}
                            viewBox="0 0 11 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z"
                              fill="#fff"
                            />
                          </svg>
                        </i>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-section item"
            style={{
              backgroundImage: "url(/img/hero-2.jpg)",
            }}
          >
            <div className="container mx-auto">
              <div className="flex items-end">
                <div className="featured-area w-2/4">
                  <h2 className="text-white font-fredoka capitalize text-6xl leading-tight font-black">
                    grilled cheese
                  </h2>
                  <h1 className="pt-5 pb-12 leading-8 text-5xl font-bold font-fredoka text-yellow">
                    burger
                  </h1>
                  <div className="md:flex items-center">
                    <a
                      href=""
                      className="button bg-pink button font-bold font-fredoka"
                    >
                      See Our Menus
                    </a>
                    <div className="video">
                      <a
                        data-fancybox=""
                        href="https://www.youtube.com/watch?v=1La4QzGeaaQ"
                      >
                        <i>
                          <svg
                            width={15}
                            height={22}
                            viewBox="0 0 11 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z"
                              fill="#fff"
                            />
                          </svg>
                        </i>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        <div className="weekly-special">
          <span className="bg-pink">Weekly Special</span>
          <div>
            <h4 className="text-white font-fredoka font-bold">
              <sup className="text-pink">$</sup>90.85
            </h4>
            <h5 className="font-bold font-fredoka">Sicilian Pizza</h5>
            <ul className="star">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
