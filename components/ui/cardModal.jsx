import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";

const CardModal = ({ setIsCardModal, isCardModal }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setIsCardModal(false)}>
      <div className={"cart-popup" + (isCardModal ? " show-cart" : "")}>
        <button
          type="button"
          className="close bg-pink"
          onClick={() => setIsCardModal(false)}
        >
          ×
        </button>

        <ul>
          <li className="flex items-center relative">
            <div className="p-img light-bg">
              <Image
                src="/img/product-img-1.png"
                width={75}
                height={75}
                alt="Product Image"
              />
            </div>

            <div className="p-data">
              <h3 className="font-fredoka">Brown Sandwich</h3>
              <p className="font-fredoka">1 x $10.50</p>
            </div>
            <a href="JavaScript:void(0)" id="crosss"></a>
          </li>

          <li className="flex items-center relative">
            <div className="p-img light-bg">
              <Image
                src="/img/product-img-1.png"
                width={75}
                height={75}
                alt="Product Image"
              />
            </div>

            <div className="p-data">
              <h3 className="font-fredoka">Banana Leaves</h3>

              <p className="font-fredoka">1 x $12.60</p>
            </div>
            <a href="JavaScript:void(0)" id="crosss"></a>
          </li>
        </ul>

        <div className="cart-total flex items-center justify-between">
          <span className="font-fredoka">Total:</span>

          <span className="font-fredoka">$23.10</span>
        </div>

        <div className="cart-btns flex items-center justify-between">
          <a className="font-bold text-black" href="shop-cart.html">
            View Cart
          </a>

          <a
            className="font-bold bg-pink text-white checkout"
            href="cart-checkout.html"
          >
            Checkout
          </a>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default CardModal;
