import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
    return (
      <div className="mt-8 mb-6 mx-auto w-[50%] flex items-center justify-center">
        <DotLottieReact src="/loaders/loader.lottie" loop autoplay />
      </div>
    );
};

export default Loader;
