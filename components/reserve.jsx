import React from "react";
import Input from "./input";

const Reserve = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div
          style={{
            backgroundImage: "url(/img/patron.jpg)",
          }}
          className="reserve-table"
        >
          <div className="flex flex-row">
            <div className="basis-3/8">
              <div className="reserve-table-text">
                <h3 className="font-fredoka leading-tight font-bold text-5xl">
                  RESERVE A TABLE
                </h3>
                <p>Discover our New Menu !</p>
              </div>
            </div>
            <div className="basis-5/8">
              <div className="best-food-restaurants">
                <form role="form" id="reservation-form" method="post">
                  <div className="flex flex-row">
                    <div className="basis-1/2 m-2">
                      <Input />
                    </div>
                    <div className="basis-1/2 m-2">
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="basis-1/2 m-2">
                      <Input />
                    </div>
                    <div className="basis-1/2 m-2">
                      <div className="flex flex-row">
                        <div className="basis-1/2 m-2">
                          <Input />
                        </div>
                        <div className="basis-1/2 m-2">
                          <Input />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button mt-5" type="submit">
                    Reserve a Table
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
