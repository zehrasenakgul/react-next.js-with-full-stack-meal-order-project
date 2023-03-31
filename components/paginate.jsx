import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Paginate = () => {
  return (
    <ul className="pagination m-auto mt-5">
      <li className="prev">
        <a href="#" className="font-fredoka font-bold">
          <FaAngleLeft className="text-white text-2xl" />
        </a>
      </li>
      <li>
        <a href="#" className="font-fredoka font-bold">1</a>
      </li>
      <li>
        <a href="#" className="font-fredoka font-bold">2</a>
      </li>
      <li>
        <a href="#" className="font-fredoka font-bold">3</a>
      </li>
      <li>
        <a href="#" className="font-fredoka font-bold">...</a>
      </li>
      <li>
        <a href="#" className="font-fredoka font-bold">18</a>
      </li>
      <li className="next">
        <a href="#" className="font-fredoka font-bold">
          <FaAngleRight className="text-white text-2xl" />
        </a>
      </li>
    </ul>
  );
};

export default Paginate;
