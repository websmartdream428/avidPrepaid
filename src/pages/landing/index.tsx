import React from "react";
import AboutPart from "./AboutPart";
import BenefitPart from "./BenefitPart";

import IntroPart from "./IntroPart";
import ServicePart from "./ServicePart";

const LandingPage = () => {
  return (
    <div>
      <IntroPart />
      <AboutPart />
      <ServicePart />
      <BenefitPart />
    </div>
  );
};

export default LandingPage;
