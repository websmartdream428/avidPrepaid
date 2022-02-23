import React, { useContext, useState } from "react";

import InputMask from "react-input-mask";
import Container from "components/Container";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";

import cardImg from "assets/image/Avid_Card_Slant.png";
import accessImg from "assets/image/early-access-icon.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const GetStartedPart = () => {
  const { phoneNumber, setPhoneNumber } = useContext<any>(PhoneNumberContext);
  const { phoneCode, setPhoneCode } = useContext<any>(PhoneCodeContext);
  const [code, setCode] = useState("");
  const [inputFlag, setInputFlag] = useState(true);
  const [error, setError] = useState("");

  const handleGetStartedClick = () => {
    if (phoneNumber === "" || phoneNumber.indexOf("_") > -1) {
      setPhoneNumber("");
    } else {
      setPhoneCode(true);
      window.location.href = "#phonecode";
    }
  };

  const handleBack = () => {
    setPhoneCode(false);
  };

  const handleContinue = () => {
    if (code.length < 6 && code.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (code.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(true);
      setError("Incorrect code.");
      // setPhoneCode(false);
    }
  };

  const handleChange = (e: any) => {
    if (isNaN(e.target.value) || e.target.value.length > 6) {
      return;
    }
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
    setCode(e.target.value);
  };

  const handleFocus = (e: any) => {
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
  };

  const handleResend = () => {
    setInputFlag(false);
    setCode("");
  };

  return (
    <div className="mt-[15px] pb-[4%] relative bg-[#f3f3f3]">
      <Container>
        <div className="text-center landing-get-started">
          <img
            src={cardImg}
            alt="cardImg"
            className="card-img sm:w-[25em] w-[18em] m-auto"
          />
          {phoneCode ? (
            <>
              <h1
                id="phonecode"
                className="text-[#0386ff] text-[2.4em] leading-[44px] m-0 mb-8 -tracking-[1px]"
              >
                Enter Your Code
              </h1>
              <p className="text-[1.2em] font-semibold leading-[35px] m-0 pb-[4%] mb-5">
                {
                  "We sent a code to your mobile device. Please enter it below to start your application process."
                }
              </p>
              <div className="grid lg:grid-cols-2 gap-5 justify-around items-start">
                <div className="p-[5%] bg-white md:rounded-[50px] rounded-[30px]">
                  <img
                    src={accessImg}
                    alt="accessImg"
                    className="w-[213px] m-auto -mt-[50px]"
                  />
                  <p className="text-[1.4em] font-bold leading-[35px] m-0 pb-[4%] mt-6">
                    {"Early Access"}
                    <sup>1</sup>
                  </p>
                  <ul className="pl-[5%] pr-[2%] list-disc mb-[10px] leading-[40px] text-[#1d2127] text-[1.1em] text-left">
                    <li>
                      <p>Get your federal benefits up to 6 days early</p>
                    </li>
                    <li>
                      <p>
                        Receive your payroll and all other direct deposits up to
                        2 days early
                      </p>
                    </li>
                    <li>
                      <p>
                        Avid Prepaid processes the deposits as soon as the
                        government or employer sends notice that it intends on
                        making a payment
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="text-left sm:w-[70%] w-full mx-auto">
                  <p className="pl-3 pb-2 text-gray-700">Text Code *</p>
                  <input
                    type="text"
                    onFocus={handleFocus}
                    value={code}
                    className={`rounded-full text-[1.3em] text-[#555] w-full border-[#aaa] p-2 outline-none border-[1px] focus:shadow-md ${
                      inputFlag
                        ? "focus:shadow-red-200 focus:border-red-200"
                        : "focus:shadow-blue-200 focus:border-[#aaa]"
                    }`}
                    onChange={handleChange}
                  />
                  {inputFlag && (
                    <p className="text-red-500 font-bold text-center mt-3">
                      {error}
                    </p>
                  )}
                  <div
                    className="text-center mt-1 text-blue-500 hover:underline cursor-pointer"
                    onClick={handleResend}
                  >
                    Resend Code
                  </div>
                  <div className="flex justify-between mt-2">
                    <button
                      className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                      onClick={handleBack}
                    >
                      <FaAngleLeft className="mr-2 inline-block" />
                      Back
                    </button>
                    <button
                      className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                      onClick={handleContinue}
                    >
                      Continue
                      <FaAngleRight className="ml-2 inline-block" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default GetStartedPart;
