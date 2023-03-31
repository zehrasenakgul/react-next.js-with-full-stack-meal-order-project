import Head from "next/head";
import React from "react";

import { FaHome, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Image from "next/image";
import Review from "../components/review";
const NewDetails = () => {
  return (
    <>
      <Head>
        <title>New Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
</Head>
      <div
        className="banner pt-10 pb-10"
        style={{
          backgroundImage: "url(/img/background.png)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-full">
              <div className="title-area-data">
                <h2 className="font-fredoka font-bold text-6xl">New Detail</h2>
                <p>A magical combination that sent aromas to the taste buds</p>
              </div>
              <ol className="breadcrumb bg-pink font-fredoka">
                <li className="breadcrumb-item">
                  <a href="" className="flex items-center">
                    <FaHome /> <span className="ml-3">Home</span>
                  </a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  News
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  New Details
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="gap our-blog font-fredoka font-bold">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between max-xl:block">
            <div className="w-4/6 max-xl:w-full max-md:ml-0">
              <div className="recent-news-two font-fredoka font-bold mb-10">
                <Image
                  src="/img/recent-news-6.jpg"
                  width={850}
                  height={530}
                  alt="recent-news-img"
                  className="rounded-3xl"
                />
                <div className="recent-news mt-3">
                  <div>
                    <a href="newDetails">
                      <span className="mb-3">29 December, 2023</span>
                    </a>
                    <a href="newDetails">
                      <h2 className="text-4xl mb-3 hover:text-pink">
                        Tender fried baby squid with a salt, pepper
                      </h2>
                    </a>
                    <div className="flex items-center">
                      <Image
                        className="me-3"
                        src="/img/man.jpg"
                        width={55}
                        height={55}
                        alt="img"
                      />
                      <h6 className="ml-5">by Thomas Walimes</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-chef font-fredoka">
                <div className="container mx-auto">
                  <p className="text-[#555555] mr-5">
                    Nisl quam nestibulum ac quam nec odio elementu sceisu aucan
                    ligula. Orci varius natoque pena tibus et magnis dis urient
                    monte ulus mus nellent esque habitanum ac quam nec odio
                    rbine. Nisl quam nestibulum ac quam nec odio elementu sceisu
                    aucan ligula. toque pena tibus et magnis dis u rient monte
                    nascete ridic ulus mus nellentesque habitanum ac quam nec
                    odio rbine. Nisl quamu quam nec odio elementu sceisu aucan
                    ligula. Orc i varius natoque pena tibus et magnis dis urient
                    monte nascete ridic ulus mus a habitanum ac quam nec odio
                    rbine. Nisl quam nestibulum ac qua m nec odio elementu
                    sceisu aucan ligula. Orci varius natoque pe magnis dis
                    urient monte nascete ridiculus mus nellentesque habitanum ac
                    quam nec odio rbine. Nisl quam nestibulum ac quam ntoque
                    pena tibus et magnis dis urient monte nascete ridic ulus mus
                    nellentesque habitanum ac quam nec odio rbine. Nisl quam a
                    quam nec odio elementu sceisu aucan ligula. Orci varius
                    natoque pena tibus et magnis dis urient monte nascet e ridic
                    ulus mus n habitanum ac quam nec odio rbine.
                    <br />
                    <br />
                    Nisl quam nestibulum ac quam nec odio elementu sceisu aucan
                    ligula. Orci varius natoque pena tibus et magnis dis urient
                    monte quam nec odio e lementu sceisu aucan ligula. Orci
                    varius natoque pena tibus et magnis dis urient monte nascete
                    ridic.
                  </p>
                </div>
              </div>
              <Review />
            </div>
            <div className="w-2/6 max-xl:w-full max-md:ml-0 ">
              <div className="posts recent-posts">
                <h3 className="text-3xl">Recent Posts</h3>
                <ul>
                  <li>
                    <Image
                      className="me-3"
                      src="/img/recent-news-blog-1.jpg"
                      width={80}
                      height={80}
                      alt="img"
                    />
                    <div className="ml-4">
                      <a href="#" className="text-pink">
                        29 December, 2022
                      </a>
                      <h6>
                        <a href="#">Restaurant Located in on Bank Street</a>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <Image
                      className="me-3"
                      src="/img/recent-news-blog-1.jpg"
                      width={80}
                      height={80}
                      alt="img"
                    />
                    <div className="ml-4">
                      <a href="#" className="text-pink">
                        29 December, 2022
                      </a>
                      <h6>
                        <a href="#">Restaurant Located in on Bank Street</a>
                      </h6>
                    </div>
                  </li>{" "}
                  <li>
                    <Image
                      className="me-3"
                      src="/img/recent-news-blog-1.jpg"
                      width={80}
                      height={80}
                      alt="img"
                    />
                    <div className="ml-4">
                      <a href="#" className="text-pink">
                        29 December, 2022
                      </a>
                      <h6>
                        <a href="#">Restaurant Located in on Bank Street</a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="posts">
                <h3 className="text-3xl">Categories</h3>
                <ul className="categories">
                  <li className="pt-0">
                    <a href="#">
                      food<span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Inspiration<span>13</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle<span>19</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      People<span>22</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Recipes <span>11</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      World<span>08</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};
export default NewDetails;
