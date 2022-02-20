import React, { useState } from "react";
import Container from "components/Container";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const FaqPart = () => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Container>
        <div className="pb-[4%]">
          <p className="m-0 text-[1.3em] font-medium pt-[2%] text-center">
            <strong>Have more Questions?</strong>
            {" Find more information by "}
            <a
              href="https://google.com"
              className="text-[#0386ff] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              clicking here
            </a>
          </p>
          <h1 className="text-center mt-[5%] font-extrabold text-[#0386ff] text-[2.4em] leading-][44px] mb-8 -tracking-[1px]">
            Lets Get Started
          </h1>
          <div className="md:flex-row flex-col flex items-center justify-center md:gap-[45px] gap-[20px]">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="border-[#0386ff] border-[1px] h-[50px] outline-none bg-white text-black text-[22px] py-[10px] px-4 rounded-full min-w-[11em] max-w-[13em] placeholder:text-[#0386ff]"
            />
            <div className="border-[1px] whitespace-nowrap border-[#0386ff] bg-[#0386ff] text-[1.25em] py-[10px] px-[16px] rounded-full h-[50px] font-medium text-white hover:text-black flex items-center cursor-pointer tracking-normal w-fit">
              Lets Get Started
            </div>
          </div>
        </div>
        <div>
          <div className="contact-tab-header flex md:flex-row flex-col gap-[2px]">
            <div
              onClick={() => setTab(1)}
              className={`border-[1px] border-b-0  ${
                tab === 2
                  ? "bg-[#3984ed] text-white border-[#3984ed]"
                  : "border-[#ddd] text-[#1d2127] bg-white"
              }`}
            >
              <p>Customer Service</p>
            </div>
            <div
              onClick={() => setTab(2)}
              className={`border-[1px] border-b-0  ${
                tab === 1
                  ? "bg-[#3984ed] text-white border-[#3984ed]"
                  : "border-[#ddd] text-[#1d2127] bg-white"
              }`}
            >
              <p>{"Cardholder Tools & Account Access"}</p>
            </div>
          </div>
          <div className="contact-tab-body border-[#ddd] border-[1px]">
            <div
              className={`flex py-[2%] px-[40px] md:flex-row flex-col gap-4 ${
                tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-col md:w-[50%] w-full gap-4">
                <p className="flex items-center">
                  <FaPhoneAlt fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <strong>{"Call us at: "}</strong>{" "}
                    <a
                      href="tel:(801) 893-7716"
                      className="text-[#0386ff] hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"(801) 893-7716"}
                    </a>
                  </span>
                </p>
                <p className="flex items-center">
                  <HiMail fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <a
                      href="tel:(801) 893-7716"
                      className="text-[#0386ff] hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {"Email Us"}
                    </a>
                  </span>
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt fill="#0386ff" size={20} />
                  <span className="ml-3 text-[1.1em]">
                    <strong>{"Address: P.O.:"}</strong>
                    {" Box 307, New Hyde Park, NY 11040"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:w-[50%] w-full gap-4">
                <p>
                  <strong>{"Business Hours:"}</strong>
                  {
                    " Monday - Friday: 7AM to 12AM (EST) Saturday & Sunday: 9AM to 7PM (EST)"
                  }
                </p>
                <p className="flex gap-4 text-[20px]">
                  <FaFacebookF fill="#0386ff" />
                  <FaInstagram fill="#0386ff" />
                  <FaYoutube fill="#0386ff" />
                </p>
              </div>
            </div>
            <div
              className={`py-[2%] px-[40px] text-center ${
                tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <p className="mb-[20px] text-[1.1em]">
                <strong>
                  Are you an existing or returning customer and need access to
                  your account?
                </strong>{" "}
                <a
                  href="https://google.com"
                  className="text-[#0386ff] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sign In
                </a>
              </p>
              <p className="text-[1.1em]">
                <strong>Do you want to learn more? </strong>
                <a href="#fap" className="text-[#0386ff] hover:underline">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqPart;
