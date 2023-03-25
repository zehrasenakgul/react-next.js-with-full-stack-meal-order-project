import Image from "next/image";
import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const App = () => {
  return (
    <section
      className="gap no-bottom app-foods"
      style={{ backgroundColor: "#f5f8fd" }}
    >
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-1">
            <div className="heading">
              <span className="text-pink font-fredoka font-bold text-xl uppercase tracking-widest	">
                Best App For Foods Ordering
              </span>
              <h3 className="font-fredoka font-bold text-5xl">
                Manage Your Restaurant Anytime! Anywhere!
              </h3>
            </div>
            <ul className="higher-reach">
              <li className="font-epilogue">
                <div className="bol"></div>Higher Reach - Minimal Effort
              </li>
              <li>
                <div className="bol"></div>Showcase your Brand
              </li>
              <li>
                <div className="bol"></div>Exclusive offers &amp; discounts
              </li>
            </ul>
            <div className="flex mt-5">
              <a href="#">
                <div className="download-from">
                  <FaGooglePlay />
                  <div>
                    <span className="font-fredoka font-bold">
                      Download From
                    </span>
                    <h5 className="font-fredoka font-bold">Google Play</h5>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="download-from apple">
                  <FaApple />
                  <div>
                    <span className="font-fredoka font-bold">
                      Download From
                    </span>
                    <h5 className="font-fredoka font-bold">App Store</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="manage-your-img">
              <Image
                src="/img/manage-your.png"
                width={649}
                height={559}
                alt="manage-your"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
