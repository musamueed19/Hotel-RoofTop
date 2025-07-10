import React from "react";

// img
import NotFoundImg from "/images/notFound.png";

const NotFound = () => {
  return (
    <div
      className="w-screen h-screen bg-contain bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${NotFoundImg})` }}
    >
      {/* You can keep the img tag if you want it as a fallback or additional content */}
      {/* <img src={NotFoundImg} width={200} height={200} alt="" /> */}
    </div>
  );
};

export default NotFound;
