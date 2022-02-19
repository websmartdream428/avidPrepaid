import Container from "components/Container";
import React from "react";

import supportImg from "assets/image/service-img.png";

const SupportPart = () => {
  return (
    <div className="landing-support py-[4%]">
      <Container>
        <div className="flex items-center">
          <div className="pl-[3%] w-[45%]">
            <h1 className="text-[#0386ff] leading-[44px] text-[2.4em] mb-8 -tracking-[1px]">
              {"Superior Service Without The Wait & Award Winning Support"}
            </h1>
            <p className="text-[1em] text-[#1d2127] leading-[30px] mb-5">
              {
                "Are you tired of attempting to speak with someone, having to wait on the phone to clear up issues? We know it can be frustrating, that’s why the Avid Prepaid team makes it a point to have your best interests in mind when others won’t. Our friendly, dedicated, and bilingual customer services team is based in the U.S. and available every day to meet your needs."
              }
            </p>
            <ul className="pl-[5%] pr-[2%] list-disc mb-[10px] leading-[30px] text-[#1d2127] text-[1.1em]">
              <li>
                Our bilingual U.S based customer service is available 7 days a
                week
              </li>
              <li>
                Our in-house Call Center is full of specially trained
                representatives waiting to help and there are numerous self
                service options on our 24 hour comprehensive automated phone
                system
              </li>
              <li>
                Have an enjoyable caller experience with our world class
                friendly and dedicated Customer Service Team members
              </li>
              <li>
                Our highly trained live representatives will assist you with
                anything regarding Avid Prepaid
              </li>
            </ul>
            <div className="ml-[5%] mt-[5%]">
              <span className="text-[#0386ff] leading-[44px] text-[2em] mb-8 -tracking-[1px] font-semibold">
                Lets Get Started
              </span>
              <a
                href="#faq"
                className="flex rounded-full text-[1.1em] justify-center bg-[#0583e9] text-white h-[50px] p-3 w-[170px] mt-[2%]"
              >
                Lets Get Started
              </a>
            </div>
          </div>
          <div className="w-[55%]">
            <img
              src={supportImg}
              alt="supportImg"
              className="relative left-[100px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SupportPart;
