import React from "react";

import invite1 from "../assets/invite1.png";

const MagicInvite = () => {
  return (
    <div className="container py-4">
      <div className="magic-banner">
        {/* Left Side */}
        <div className="left-side">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <img src={invite1} className="card-img img1" alt="" />
        </div>

        {/* Right Side */}
        <div className="right-side text-center text-lg-start">
          <h1 className="fw-bold text-white">Magic invite</h1>

          <p className="text-white mt-3">
            Describe your event and style, and AI does the rest.
          </p>

          <button className="btn btn-light magic-btn mt-3">
            Start Magic invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagicInvite;
