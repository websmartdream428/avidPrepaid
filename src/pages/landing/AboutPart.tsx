import React from "react";

import Container from "components/Container";
import aboutImg from "assets/image/ppl-phone-img.png";
const AboutPart = () => {
  return (
    <div>
      <Container>
        <p className="py-16 text-center text-[1.3em] text-[#1d2127] font-medium leading-[35px]">
          {
            'Avid Prepaid Visa Debit card allows you to get your federal benefits up to 6 days early and all other direct deposits up to 2 days early.1 Its digital banking at its best! With no overdraft fees or minimum balance requirement2, you always have control over your account. Getting started is easy, just enter your mobile number and click "Lets Get Started" to sign up today!'
          }
        </p>
      </Container>
      <div
        id="about"
        className="flex lg:flex-row flex-col landing-about justify-center items-center lg:pb-[236px] pb-[10%] lg:pt-16 pt-[10%] bg-[#f3f3f3]"
      >
        <div className="lg:p-0 p-[7%]">
          <img
            src={aboutImg}
            className="w-[640px] relative lg:top-[40px] lg:left-[8em]"
            alt="aboutImg"
          />
        </div>
        <div className="bg-white md:rounded-[50px] rounded-[30px] lg:py-[95px] lg:px-[175px] p-[10%] lg:w-[60%] w-[85%] max-w-[865px]">
          <h1 className="text-[#0386ff] md:text-[2.4em] text-[2em] leading-[44px] mb-8 m-0">
            Avid Prepaid
            <br /> Digital Banking at its Best
          </h1>
          <p className="text-[1em] text-[#1d2127] leading-[30px] mb-5 m-0">
            {
              "Use Avid Prepaid anywhere Visa debit is accepted worldwide. Available for use at major retailers, gas stations, pharmacies, and online. Access cash at virtually any ATM nationwide or at most bank branches. Plus, enjoy the added security of chip technology."
            }
          </p>
          <ul className="text-[1.1em] list-disc text-[#1d2127] leading-[30px] pl-[25px] pr-[10px]">
            <li>
              Government benefits up to 6 days early and receive payroll up to 2
              days early<sup>1</sup>
            </li>
            <li>US Based Customer Service personalized for you</li>
            <li>
              No overdraft fees or minimum balance required<sup>2</sup>
            </li>
            <li>
              Use anywhere Visa debit is accepted<sup>1</sup>
            </li>
          </ul>
          <a
            href="#faq"
            className="flex rounded-full text-[1.1em] justify-center bg-[#0583e9] text-white h-[50px] p-3 w-[170px] mt-5 ml-[5%]"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
