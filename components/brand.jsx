import React from "react";
import { FaInstagram } from "react-icons/fa";
const Brand = () => {
  return (
    <section>
      <div className="gap no-top">
        <div
          style={{
            backgroundImage: "url(/img/follow.jpg)",
          }}
          className="follow"
        >
          <div className="instagram-icon">
            <FaInstagram />
          </div>
          <a href="#">
            <h2 className="font-fredoka font-bold text-5xl relative">
              Follow @Winsfolio.com
            </h2>
          </a>
          <p className="relative">Join our community to inspire your desires</p>
        </div>
      </div>
    </section>
  );
};

export default Brand;
