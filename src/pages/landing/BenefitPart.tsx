import React from "react";

import benefitImg from "assets/image/benefit.png";

const BenefitPart = () => {
  return (
    <div className="landing-benefits py-16">
      <div className="max-w-[1280px] w-[95%] items-center flex m-auto">
        <div className="relative py-[3%] h-fit rounded-[100px] left-[5%] bg-[#f0f2f6] text-center">
          <img src={benefitImg} alt="benefitImg" className="w-[85%] m-auto" />
          <p className="m-0 px-[7%] text-[10px] leading-[35px] font-medium text-[#1d2127]">
            December 2021 SSI and VA payments were made available to recipients
            on December 1st, 2021 by most banks and Direct Express<sup>®</sup>
          </p>
        </div>
        <div className="max-w-[755px] rounded-[100px] py-[5%] px-[8%] bg-white">
          <h1 className="text-[4em] mb-5 font-normal leading-[60px] text-[#0386ff] -tracking-[1px]">
            Your Federal Benefits Made Easy
          </h1>
          <p className="text-[1.1em] text-[#1d2127] leading-[30px] mb-5">
            Get paid fast with Early Access
          </p>
          <ul className="benefit-card-list text-[1.1em] list-disc text-[#1d2127] leading-[30px] pl-[25px] pr-[10px] mb-[10px]">
            <li>
              Avid Prepaid processes the deposits as soon as the Government
              sends notice that it intends on making a payment to the customer.
              This occurs several days before the actual payment date. For
              example, SSI and VA Payments that are paid on the first of each
              month are credited to their Avid Prepaid account up to 6 days
              early every month and all other payments are credited up to 2 days
              early.<sup>1</sup>
            </li>
            <li>
              Federal benefits up to 6 days early and payroll and other deposits
              up to 2 days early<sup>1</sup>
            </li>
          </ul>
          <a
            href="#faq"
            className="flex rounded-full text-[1.1em] justify-center bg-[#0583e9] text-white h-[50px] p-3 w-[170px] mt-[2%]"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenefitPart;
