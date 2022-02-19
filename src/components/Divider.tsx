import React from "react";
import Container from "./Container";

import logo from "assets/image/logo.png";

const Divider = () => {
  return (
    <div className="landing-divider">
      <Container>
        <div className="flex justify-between items-center gap-5">
          <img src={logo} alt="logo" className="logo-img w-[9.5em]" />
          <div className="h-[2px] bg-white w-[65em] ml-[65px]" />
        </div>
      </Container>
    </div>
  );
};

export default Divider;
