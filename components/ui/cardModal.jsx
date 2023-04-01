import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/cartSlice";

const CardModal = ({ setIsCardModal, isCardModal }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
          {cart.products.map((product) => (
            <li className="flex items-center relative">
              <div className="p-img light-bg">
                <Image
                  src={product.image}
                  width={75}
                  height={75}
                  alt="Product Image"
                />
              </div>
              <div className="p-data">
                <h3 className="font-fredoka leading-5">{product.name}</h3>
                <p className="font-fredoka">{product.quantity} x {product.price}</p>
              </div>
              <a href="JavaScript:void(0)" id="crosss"></a>
            </li>
          ))}
        </ul>
        <div className="cart-total flex items-center justify-between">
          <span className="font-fredoka">Total:</span>
          <span className="font-fredoka">${cart.total}</span>
        </div>
        <div className="cart-btns flex items-center justify-between">
          <a className="font-bold text-black" href="cart">
            View Cart
          </a>
          <a
            className="font-bold bg-pink text-white checkout"
            href="checkout" onClick={() => dispatch(reset())}
          >
            Checkout
          </a>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
export default CardModal;
