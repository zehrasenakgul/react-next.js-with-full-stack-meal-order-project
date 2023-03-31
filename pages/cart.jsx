import React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { FaHome } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
const Cart = () => {
  return (
    <div>
      <Head>
        <title>Shop Cart</title>
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
                <h2 className="font-fredoka font-bold text-6xl">Shop Cart</h2>
                <p>A magical combination that sent aromas to the taste buds</p>
              </div>
              <ol className="breadcrumb bg-pink font-fredoka">
                <li className="breadcrumb-item">
                  <a href="" className="flex items-center">
                    <FaHome /> <span className="ml-3">Home</span>
                  </a>
                </li>
                <li className="breadcrumb-item text-white" aria-current="page">
                  Shop
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shop Cart
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="gap font-fredoka">
        <div className="container mx-auto">
          <form className="woocommerce-cart-form">
            <div>
              <table className="shop_table table-responsive">
                <thead className="bg-pink">
                  <tr>
                    <th className="product-name">Product</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-name">
                      <Image
                        src="/img/product-1.png"
                        width={111}
                        height={111}
                        alt="product-image"
                      />{" "}
                      <div className="ml-3">
                        <a href="#" className="font-bold">
                          Blue Cheese &amp; Ham
                        </a>
                        <span>Sausage, three rashers of streaky bacon</span>
                      </div>
                    </td>
                    <td className="product-quantity">
                      <input
                        type="number"
                        className="input-text font-bold"
                        value="1"
                      />
                    </td>
                    <td className="product-subtotal">
                      <span className="woocommerce-Price-amount text-pink font-bold">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          9.00
                        </bdi>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-name">
                      <Image
                        src="/img/product-1.png"
                        width={111}
                        height={111}
                        alt="product-image"
                      />{" "}
                      <div className="ml-3">
                        <a href="#" className="font-bold">
                          Blue Cheese &amp; Ham
                        </a>
                        <span>Sausage, three rashers of streaky bacon</span>
                      </div>
                    </td>
                    <td className="product-quantity">
                      <input
                        type="number"
                        className="input-text font-bold"
                        value="1"
                      />
                    </td>
                    <td className="product-subtotal">
                      <span className="woocommerce-Price-amount text-pink font-bold">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          9.00
                        </bdi>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-name">
                      <Image
                        src="/img/product-1.png"
                        width={111}
                        height={111}
                        alt="product-image"
                      />{" "}
                      <div className="ml-3">
                        <a href="#" className="font-bold">
                          Blue Cheese &amp; Ham
                        </a>
                        <span>Sausage, three rashers of streaky bacon</span>
                      </div>
                    </td>
                    <td className="product-quantity">
                      <input
                        type="number"
                        className="input-text font-bold"
                        value="1"
                      />
                    </td>
                    <td className="product-subtotal">
                      <span className="woocommerce-Price-amount text-pink font-bold">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          9.00
                        </bdi>
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="coupon">
                    <td colspan="3">
                      <div className="flex items-center justify-between">
                        <button
                          type="submit"
                          name="apply_coupon"
                          className="apply-coupon"
                          value="Apply coupon"
                        >
                          Apply coupon
                        </button>
                        <button
                          type="submit"
                          className="update-cart bg-pink"
                          value="Update cart"
                        >
                          Update Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex mt-5 flex-row max-md:block">
              <div className="w-1/4 max-md:w-full">
                <div className="coupon-area">
                  <h3>Apply Coupon</h3>
                  <div className="coupon">
                    <input
                      type="text"
                      name="coupon_code"
                      className="input-text"
                      placeholder="Coupon Code"
                    />
                    <button type="submit" name="apply_coupon">
                      <span>Apply coupon</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-3/4 ml-5 max-md:w-full max-md:ml-0">
                <div className="cart_totals">
                  <h4>Cart Totals</h4>
                  <div className="shop_table-boder">
                    <table className="shop_table_responsive">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Sub total:</th>
                          <td>
                            <span className="woocommerce-Price-amount text-pink font-bold">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                250.00
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="Shipping">
                          <th>Shipping:</th>
                          <td>
                            <span className="woocommerce-Price-amount text-pink font-bold amount">
                              free
                            </span>
                          </td>
                        </tr>
                        <tr className="Total">
                          <th>Total:</th>
                          <td>
                            <span className="woocommerce-Price-amount text-pink font-bold">
                              <bdi>
                                <span>$</span>250.00
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="wc-proceed-to-checkout">
                    <a href="#" className="button bg-pink">
                      <span>Proceed to checkout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    
    </div>
  );
};

export default Cart;
