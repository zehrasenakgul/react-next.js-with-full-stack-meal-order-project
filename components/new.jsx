import Image from "next/image";
import React from "react";

const NewItem = () => {
  return (
    <div className="flex-1 items-center">
      <div className="recent-news">
        <Image
          src="/img/recent-news-1.jpg"
          width={260}
          height={280}
          alt="recent-news"
        />
        <div className="ml-5">
          <a href="#">
            <span className="font-fredoka font-bold">29 December, 2023</span>
          </a>
          <a href="">
            <h3 className="font-fredoka font-bold text-3xl">
              Table restaurant located in on Bank Street
            </h3>
          </a>
          <div className="flex items-center">
            <Image
              className="me-3"
              src="/img/man.jpg"
              width={55}
              height={55}
              alt="img"
            />
            <h6 className="font-fredoka font-bold ml-5">by Thomas Walimes</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const New = () => {
  return (
    <section className="gap">
      <div className="container mx-auto">
        <div className="heading-two">
          <h2 className="font-fredoka font-bold text-6xl max-sm:text-3xl max-md:text-3xl">
            Recent News
          </h2>
          <div className="line"></div>
        </div>
        <div className="flex justify-between container mx-auto gap-6 flex-wrap">
          <NewItem />
          <NewItem />
        </div>
      </div>
    </section>
  );
};

export default New;
