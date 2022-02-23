import React, { useContext } from "react";

import InputMask from "react-input-mask";
import Container from "components/Container";
import cardImg from "assets/image/Avid_Card_Slant.png";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";

const GetStartedPart = () => {
  const { phoneNumber, setPhoneNumber } = useContext<any>(PhoneNumberContext);
  const { phoneCode, setPhoneCode } = useContext<any>(PhoneCodeContext);

  const handleGetStartedClick = () => {
    if (phoneNumber === "" || phoneNumber.indexOf("_") > -1) {
      setPhoneNumber("");
    } else {
      setPhoneCode(true);
      window.location.href = "#phonecode";
    }
  };

  return (
    <div className="mt-[15px] pb-[4%] relative">
      <Container>
        <div className="text-center landing-get-started">
          <img
            src={cardImg}
            alt="cardImg"
            className="card-img sm:w-[25em] w-[18em] m-auto"
          />
          {
            <>
              <h1 className="text-[#0386ff] text-[2.4em] leading-[44px] m-0 mb-8 -tracking-[1px]">
                Lets Get Started
              </h1>
              <p className="text-[1.2em] font-semibold leading-[35px] m-0 pb-[4%]">
                {
                  "It's easy. Simply enter your phone number in the field below to receive a text code to start the process."
                }
              </p>
              <div className="flex lg:flex-row flex-col justify-center items-center">
                <InputMask
                  value={phoneNumber}
                  placeholder="Enter Mobile Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  mask="(999) 999-9999"
                  // maskChar=" "
                  className="border-[#0386ff] lg:mr-[15px] lg:mb-0 mr-0 mb-[15px]  border-[1px] h-[50px] outline-none bg-white text-[#777] text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#0386ff]"
                />
                <div
                  className="border-[1px] whitespace-nowrap border-[#0386ff] bg-[#0386ff] text-[1.25em] py-[10px] px-[16px] rounded-full h-[50px] font-medium text-white hover:text-black flex items-center cursor-pointer tracking-normal"
                  onClick={handleGetStartedClick}
                >
                  Lets Get Started
                </div>
              </div>
            </>
          }
        </div>
      </Container>
    </div>
  );
};

export default GetStartedPart;
