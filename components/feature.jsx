import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const FeatureItem = () => {
  return (
    <div className="featured-dishes">
      <div className="featured-dishes-img">
        <Image
          src="/img/featured-dishes-3.png"
          width={323}
          height={322}
          alt="featured-dishes"
        />
      </div>
      <ul className="star">
        <li>
          <FaStar className="star" />
        </li>
        <li>
          <FaStar className="star" />
        </li>
        <li>
          <FaStar className="star" />
        </li>
        <li>
          <FaStar className="star" />
        </li>
        <li>
          <FaStar className="star" />
        </li>
      </ul>
      <a href="">
        <h5 className="font-fredoka font-bold text-xl text-black">
          Parisian Hamburger
        </h5>
      </a>
      <p className="font-fredoka font-bold">
        <span className="text-pink">$</span>10.85
      </p>
      <a href="">
        <i>
          <svg
            className="featured-shopping-bag hover:bg-pink"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
            </g>
          </svg>
        </i>
      </a>
    </div>
  );
};

const Feature = () => {
  return (
    <section
      className="gap section-featured"
      style={{ backgroundColor: "#f5f8fd" }}
    >
      <div className="container mx-auto">
        <div className="heading-two">
          <h2 className="font-fredoka font-bold text-6xl max-sm:text-3xl max-md:text-3xl">
            Featured Dishes
          </h2>
          <div className="line"></div>
        </div>
        <div className="flex justify-between container mx-auto gap-6 flex-wrap">
          <OwlCarousel items={3} className="owl-theme" loop dots margin={8}>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Feature;
