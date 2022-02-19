import React from "react";
import AboutPart from "./AboutPart";
import BenefitPart from "./BenefitPart";
import FooterPart from "./FooterPart";

import IntroPart from "./IntroPart";
import ServicePart from "./ServicePart";

const LandingPage = () => {
  return (
    <div>
      <IntroPart />
      <AboutPart />
      <ServicePart />
      <BenefitPart />
      <FooterPart />
    </div>
  );
};

export default LandingPage;
