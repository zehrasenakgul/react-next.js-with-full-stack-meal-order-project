import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewItem = () => {
  return (
    <li className="single-comment children">
      <Image
        className="me-3"
        src="/img/comment-2.jpg"
        width={130}
        height={130}
        alt="img"
      />{" "}
      <a href="#" className="bg-pink">
        reply
      </a>
      <div className="ps-md-4 ml-5">
        <div className="flex items-center">
          <h4>Smith Johnson</h4>
          <span className="text-pink">January 7, 2023 </span>
        </div>
        <p>
          Nellente sque um ac quam nec odio rbine. Nisl quam nestibulum ac quam
          nec io elementu aucan ligula.
        </p>
      </div>
    </li>
  );
};

const Review = () => {
  return (
    <section className="gap no-top font-fredoka">
      <div className="container mx-auto">
        <div className="comment">
          <h3>02 Comments</h3>
          <ul>
            <li className="single-comment">
              <Image
                className="me-3"
                src="/img/comment-1.jpg"
                width={130}
                height={130}
                alt="img"
              />
              <a href="#" className="bg-pink">
                reply
              </a>
              <div className="ps-md-4 ml-5">
                <div className="flex items-center">
                  <h4>Smith Johnson</h4>
                  <span className="text-pink">January 7, 2023 </span>
                </div>
                <p>
                  Nellente sque um ac quam nec odio rbine. Nisl quam nestibulum
                  ac quam nec io elementu aucan ligula.
                </p>
              </div>
            </li>
            <li className="single-comment children">
              <Image
                className="me-3"
                src="/img/comment-2.jpg"
                width={130}
                height={130}
                alt="img"
              />{" "}
              <a href="#" className="bg-pink">
                reply
              </a>
              <div className="ps-md-4 ml-5">
                <div className="flex items-center">
                  <h4>Smith Johnson</h4>
                  <span className="text-pink">January 7, 2023 </span>
                </div>
                <p>
                  Nellente sque um ac quam nec odio rbine. Nisl quam nestibulum
                  ac quam nec io elementu aucan ligula.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="review">
          <form className="add-review leave-comment">
            <div className="rating">
              <h3>Add Review</h3>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2 pl-0 pr-2 max-sm:w-full max-sm:pr-0">
                <input type="text" name="name" placeholder="Complate Name" />
              </div>
              <div className="w-1/2 pr-0 pl-2 max-sm:w-full max-sm:pl-0">
                <input type="text" name="Email" placeholder="Email Address" />
              </div>
              <textarea placeholder="Add Review"></textarea>
              <button className="button bg-pink">
                <span>Post Review</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
