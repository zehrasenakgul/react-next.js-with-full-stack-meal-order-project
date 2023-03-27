import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewItem = () => {
  return (
    <div className="single-comment font-fredoka">
      <Image
        src="/img/review.jpg"
        width={200}
        height={200}
        alt=""
        className="review-img"
      />
      <div className="ps-md-4 ml-4 max-sm:mt-5">
        <div className="flex items-center">
          <h4 className="font-bold text-5xl">Smith Johnson</h4>
          <span className="text-pink font-bold">Jun 07, 2023</span>
        </div>
        <p className="text-[#555]">
          Integer sollicitudin ligula non enim sodales non lacinia commodo
          tempor mod licitudin. Integer sollicitudin ligula non enim sodales non
          lacinia commodo tempor mod licitudin.
        </p>
      </div>
      <ul className="star">
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
        <li>
          <FaStar />
        </li>
      </ul>
    </div>
  );
};

const Review = () => {
  return (
    <section className="gap no-top font-fredoka">
      <div className="container mx-auto">
        <div className="review">
          <h3 className="font-bold text-6xl">Review</h3>
          <ReviewItem />
          <ReviewItem />
          <form className="add-review leave-comment">
            <div className="rating">
              <h3>Add Review</h3>
              <div className="flex items-center">
                <span>Your Rating</span>
                <div className="start flex items-center ps-md-4 ml-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
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
