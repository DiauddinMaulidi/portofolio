import React from "react";
import { Link } from "react-router-dom";
import artikel from "../../assets/paper.png";

const Paper = () => {
  return (
    <div className="px-0 sm:px-15 mb-5 sm:mb-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-8 animate-[fadeUp_0.6s_ease]">
        <Link to="https://doi.org/10.29408/jt.v4i1.35051" target="_blank">
          <img
            src={artikel}
            className="box-border hover:transition duration-300 cursor-pointer transform hover:scale-[1.04] hover:border-2 hover:border-[#16FF00] rounded-[10px]"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Paper;
