import React from "react";
import Input from "./input";


const Reserve = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    {
      id: 4,
      name: "date",
      type: "datetime-local",
      placeholder: "",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div
          style={{
            backgroundImage: "url(/img/patron.jpg)",
          }}
          className="reserve-table"
        >
          <div className="grid grid-flow-row-dense grid-cols-3 max-lg:grid-cols-1">
            <div className="col-span-1">
              <div className="reserve-table-text">
                <h3 className="font-fredoka leading-tight font-bold text-5xl">
                  RESERVE A TABLE
                </h3>
                <p>Discover our New Menu !</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="best-food-restaurants">
                <form role="form" id="reservation-form" method="post">
                  <div className="lg:flex-1 w-full">
                    <div className="grid grid-flow-row-dense grid-cols-2 max-md:grid-cols-1">
                      {inputs.map((input) => (
                        <Input key={input.id} {...input} />
                      ))}
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
