import React from "react";
import Input from "./input";
import { useFormik } from "formik";
import { reserveSchema } from "./schema/reserve";
const Reserve = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      persons: "",
      date: "",
    },
    onSubmit,
    validationSchema: reserveSchema,
  });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      values: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      values: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber
    },
    {
      id: 3,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      values: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons
    },
    {
      id: 4,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      values: values.date,
      errorMessage: errors.date,
      touched: touched.date
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
                <form role="form" id="reservation-form" onSubmit={handleSubmit}>
                  <div className="lg:flex-1 w-full">
                    <div className="grid grid-flow-row-dense grid-cols-2 max-md:grid-cols-1">
                      {inputs.map((input) => (
                        <Input key={input.id} {...input}
                          onChange={handleChange}
                          onBlur={handleBlur} />
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
