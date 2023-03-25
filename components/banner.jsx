import React from "react";

const BannerItem = () => {
  return (
    <div
      className="bbq flex-1 items-center"
      style={{
        backgroundImage: "url(/img/bbq.jpg)",
      }}
    >
      <h2 className="font-fredoka font-bold text-6xl mb-3">Steaks & BBQ</h2>
      <p className="text-white text-lg">
        canonical classics to obscure <br /> tiki drinks
      </p>
      <div className="bbr-price">
        <div>
          <h3 className="text-pink font-fredoka font-bold">$120</h3>
          <span className="font-fredoka font-bold text-black">per person</span>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="gap">
      <div className="container mx-auto">
        <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
          <BannerItem />
          <BannerItem />
        </div>
      </div>
    </section>
  );
};

export default Banner;
