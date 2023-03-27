import React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { FaHome } from "react-icons/fa";
import Head from "next/head";

const Checkout = () => {
  return (
    <div>
      <Head>
        <title>Cart Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
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
                <h2 className="font-fredoka font-bold text-6xl">
                  Cart Checkout
                </h2>
                <p>A magical combination that sent aromas to the taste buds</p>
              </div>
              <ol className="breadcrumb bg-pink font-fredoka">
                <li className="breadcrumb-item">
                  <a href="" className="flex items-center">
                    <FaHome /> <span className="ml-3">Home</span>
                  </a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  Shop Cart
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart Checkout
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="gap">
        <div className="container mx-auto">
          <form className="checkout-meta donate-page">
            <div className="flex max-md:block">
              <div className="w-3/5 max-md:w-full mx-5 max-md:mx-0 font-fredoka font-bold">
                <h3 className="pb-3 text-3xl mb-3">Billing details</h3>
                <div className="w-full">
                  <input
                    type="text"
                    className="input-text "
                    name="billing_name"
                    placeholder="Complete Name"
                  />
                  <input
                    type="email"
                    className="input-text "
                    name="billing_email"
                    placeholder="Email address"
                  />
                  <select
                    name="billing_country"
                    className="nice-select Advice country_to_state"
                  >
                    <option>Country</option>
                    <option>Select Topic 1</option>
                    <option>Select Topic 2</option>
                    <option>Select Topic 3</option>
                    <option>Select Topic 4</option>
                  </select>
                  <div className="flex max-md:block flex-wrap">
                    <div className="w-1/2 max-md:w-full pr-2 max-md:pr-0">
                      <select
                        name="billing_country"
                        className="nice-select Advice city"
                      >
                        <option>City</option>
                        <option>Select Topic 1</option>
                        <option>Select Topic 2</option>
                        <option>Select Topic 3</option>
                        <option>Select Topic 4</option>
                      </select>
                    </div>
                    <div className="w-1/2 max-md:w-full pl-2 max-md:pl-0">
                      <select
                        name="billing_country"
                        className="nice-select Advice state province"
                      >
                        <option>State / Province</option>
                        <option>Select Topic 1</option>
                        <option>Select Topic 2</option>
                        <option>Select Topic 3</option>
                        <option>Select Topic 4</option>
                      </select>
                    </div>
                    <div className="w-1/2 max-md:w-full pr-2 max-md:pr-0">
                      <input
                        type="text"
                        name="Postal_Code"
                        placeholder="Postal Code"
                      />
                    </div>
                    <div className="w-1/2 max-md:w-full pl-2 max-md:pl-0">
                      <input
                        type="tel"
                        className="input-text "
                        name="billing_phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <input type="text" name="Address" placeholder="Address" />
                  <div className="ship-address">
                    <div className="flex">
                      <input
                        type="radio"
                        id="Create"
                        name="Create"
                        value="Create"
                      />
                      <label for="Create">
                        Create an account for later use
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="ShipAddress"
                        name="Create"
                        value="ShipAddress"
                      />
                      <label for="ShipAddress">Ship to same Address</label>
                    </div>
                  </div>
                </div>
                <div className="woocommerce-additional-fields">
                  <textarea
                    name="order_comments"
                    className="input-text "
                    placeholder="Order Note"
                  ></textarea>
                </div>
              </div>
              <div className="w-2/5 w- max-md:w-full font-fredoka font-bold">
                <div
                  className="cart_totals-checkout"
                  style={{
                    backgroundImage: "url(/img/patron.jpg)",
                  }}
                >
                  <div className="cart_totals cart-Total">
                    <h4 className="text-3xl mb-5">Cart Total</h4>
                    <table className="shop_table_responsive">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Subtotal:</th>
                          <td>
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                358.00
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="Shipping">
                          <th>Shipping:</th>
                          <td>
                            <span className="woocommerce-Price-amount amount">
                              free
                            </span>
                          </td>
                        </tr>
                        <tr className="Total">
                          <th>Total:</th>
                          <td>
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                <span>$</span>358.00
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkout-side">
                    <h3>Payment Method</h3>
                    <ul>
                      <li>
                        <input
                          type="radio"
                          id="Bank_Payment"
                          name="Bank_Payment"
                          value="Bank_Payment"
                        />
                        <label for="Bank_Payment">Bank Payment</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="Check_Payment"
                          name="Bank_Payment"
                          value="Check_Payment"
                        />
                        <label for="Check_Payment">Check Payment</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="PayPal"
                          name="Bank_Payment"
                          value="Check_Payment"
                        />
                        <label for="PayPal">PayPal</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          id="Cash on Delivery"
                          name="Bank_Payment"
                          value="Check_Payment"
                        />
                        <label for="Cash on Delivery">Cash on Delivery</label>
                      </li>
                    </ul>
                    <button type="submit" className="button">
                      <span>Place Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
